import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import { getCourseBySlug } from '@/lib/coursesCatalog';
import { SITE_URL } from '@/lib/site';

/**
 * POST /api/create-preference
 *
 * Recibe { nombre, email, cursoSlug } desde el formulario pre-pago,
 * guarda la intención de compra en Supabase con estado "pendiente",
 * crea la preferencia en Mercado Pago (Checkout Pro) y devuelve la URL
 * de pago (init_point) para que el frontend redirija.
 *
 * Seguridad:
 * - El MONTO nunca llega desde el cliente: se resuelve server-side contra
 *   coursesCatalog.ts, que a su vez toma el precio real de elearningCourses.ts.
 * - external_reference lleva solo el id interno (uuid) de la fila en
 *   compras_pendientes, nunca nombre/email en texto plano.
 * - Toda comunicación con Supabase usa la Service Role Key (solo server-side).
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    if (!process.env.MP_ACCESS_TOKEN) {
      throw new Error('Falta configurar MP_ACCESS_TOKEN.');
    }
    const mercadopago = new MercadoPagoConfig({
      accessToken: process.env.MP_ACCESS_TOKEN,
    });
    const supabaseAdmin = getSupabaseAdmin();

    const body = await req.json();
    const nombre = typeof body.nombre === 'string' ? body.nombre.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const cursoSlug = typeof body.cursoSlug === 'string' ? body.cursoSlug.trim() : '';

    // --- Validación de entrada ---
    if (nombre.length < 3 || nombre.length > 120) {
      return NextResponse.json({ error: 'Nombre inválido.' }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email) || email.length > 200) {
      return NextResponse.json({ error: 'Email inválido.' }, { status: 400 });
    }

    const course = getCourseBySlug(cursoSlug);
    if (!course) {
      return NextResponse.json({ error: 'Curso no encontrado.' }, { status: 400 });
    }
    if (!course.priceARS || course.priceARS <= 0) {
      return NextResponse.json(
        { error: 'Este curso no tiene un precio configurado.' },
        { status: 400 }
      );
    }

    // --- 1. Guardar intención de compra ANTES de contactar a Mercado Pago ---
    const { data: compra, error: insertError } = await supabaseAdmin
      .from('compras_pendientes')
      .insert({
        nombre,
        email,
        curso_slug: cursoSlug,
        curso_titulo: course.title,
        monto: course.priceARS,
        moneda: 'ARS',
        estado: 'pendiente',
      })
      .select('id')
      .single();

    if (insertError || !compra) {
      console.error('Error insertando compras_pendientes:', insertError);
      return NextResponse.json(
        { error: 'No pudimos registrar tu inscripción. Probá de nuevo.' },
        { status: 500 }
      );
    }

    // --- 2. Crear la preferencia en Mercado Pago ---
    const preferenceClient = new Preference(mercadopago);

    const preference = await preferenceClient.create({
      body: {
        items: [
          {
            id: cursoSlug,
            title: course.title,
            quantity: 1,
            unit_price: course.priceARS,
            currency_id: 'ARS',
          },
        ],
        payer: {
          name: nombre,
          email,
        },
        // Solo viaja el id interno, no datos personales.
        external_reference: compra.id,
        back_urls: {
          success: `${SITE_URL}/online/${cursoSlug}?status=success`,
          failure: `${SITE_URL}/online/${cursoSlug}?status=failure`,
          pending: `${SITE_URL}/online/${cursoSlug}?status=pending`,
        },
        auto_return: 'approved',
        notification_url: `${SITE_URL}/api/mercadopago/webhook`,
        statement_descriptor: 'NEXT ENGLISH INST',
      },
    });

    if (!preference.init_point) {
      throw new Error('Mercado Pago no devolvió init_point.');
    }

    // --- 3. Guardar el id de preferencia para poder reconciliar después ---
    const { error: updateError } = await supabaseAdmin
      .from('compras_pendientes')
      .update({ mp_preference_id: preference.id })
      .eq('id', compra.id);

    if (updateError) {
      console.error('Error guardando mp_preference_id:', updateError);
    }

    return NextResponse.json({ initPoint: preference.init_point });
  } catch (err) {
    console.error('Error en create-preference:', err);
    return NextResponse.json(
      { error: 'No pudimos iniciar el pago. Probá de nuevo en unos minutos.' },
      { status: 500 }
    );
  }
}
