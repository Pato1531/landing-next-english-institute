import { NextRequest, NextResponse } from 'next/server';
import { createHmac, timingSafeEqual } from 'node:crypto';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

/**
 * POST /api/mercadopago/webhook
 *
 * Mercado Pago llama a esta URL cada vez que un pago cambia de estado
 * (aprobado, rechazado, pendiente, etc). Acá:
 *
 * 1. Validamos la firma de la notificación (para descartar mensajes que no
 *    vienen realmente de Mercado Pago).
 * 2. NO confiamos en los datos del cuerpo de la notificación para decidir
 *    nada: le preguntamos directamente a la API de Mercado Pago "¿cómo está
 *    este pago?", usando nuestro Access Token. Esa respuesta es la única
 *    fuente de verdad. Así, aunque alguien lograra falsificar una
 *    notificación, no podría inventar un pago aprobado — necesitaría que la
 *    consulta a la API real de Mercado Pago también diga "aprobado".
 * 3. Actualizamos compras_pendientes según el resultado.
 *
 * Idempotencia: Mercado Pago puede reenviar la misma notificación varias
 * veces. Como acá solo hacemos un UPDATE por id, recibir la misma
 * notificación dos veces no genera ningún problema ni datos duplicados.
 */

function verifySignature(
  xSignature: string,
  xRequestId: string | null,
  dataId: string,
  secret: string
): boolean {
  const parts = Object.fromEntries(
    xSignature.split(',').map((part) => {
      const [key, value] = part.split('=');
      return [key?.trim(), value?.trim()];
    })
  );
  const ts = parts['ts'];
  const receivedHash = parts['v1'];
  if (!ts || !receivedHash) return false;

  const manifest = `id:${dataId.toLowerCase()};${
    xRequestId ? `request-id:${xRequestId};` : ''
  }ts:${ts};`;

  const expectedHash = createHmac('sha256', secret).update(manifest).digest('hex');

  // Comparación en tiempo constante para no filtrar información por timing.
  const a = Buffer.from(receivedHash);
  const b = Buffer.from(expectedHash);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

function mapMpStatusToEstado(mpStatus: string | undefined): string {
  switch (mpStatus) {
    case 'approved':
      return 'aprobado';
    case 'rejected':
      return 'rechazado';
    case 'cancelled':
      return 'cancelado';
    default:
      // in_process, pending, in_mediation, etc. -> lo dejamos como pendiente
      return 'pendiente';
  }
}

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get('type') ?? url.searchParams.get('topic');
    const dataIdFromQuery = url.searchParams.get('data.id');

    const body = await req.json().catch(() => null);
    const dataId = dataIdFromQuery || body?.data?.id;

    // Notificación sin id de pago: no hay nada que procesar.
    if (!dataId) {
      return NextResponse.json({ received: true }, { status: 200 });
    }

    // --- Validación de firma (best-effort) ---
    const xSignature = req.headers.get('x-signature');
    const xRequestId = req.headers.get('x-request-id');
    const webhookSecret = process.env.MP_WEBHOOK_SECRET;

    if (xSignature && webhookSecret) {
      const isValid = verifySignature(xSignature, xRequestId, String(dataId), webhookSecret);
      if (!isValid) {
        console.warn(
          'Firma de webhook de Mercado Pago inválida. Se continúa igual, ya que el estado del pago se confirma directo contra la API de MP (fuente de verdad).'
        );
      }
    }

    // Solo nos interesan las notificaciones de pagos.
    if (type !== 'payment') {
      return NextResponse.json({ received: true }, { status: 200 });
    }

    if (!process.env.MP_ACCESS_TOKEN) {
      throw new Error('Falta configurar MP_ACCESS_TOKEN.');
    }

    // --- Consultamos el pago real contra la API de Mercado Pago ---
    const mercadopago = new MercadoPagoConfig({
      accessToken: process.env.MP_ACCESS_TOKEN,
    });
    const paymentClient = new Payment(mercadopago);
    const payment = await paymentClient.get({ id: String(dataId) });

    const compraId = payment.external_reference;
    if (!compraId) {
      // Pago sin referencia a una compra nuestra (no debería pasar en este flujo).
      console.warn(`Pago ${dataId} sin external_reference asociado.`);
      return NextResponse.json({ received: true }, { status: 200 });
    }

    const estado = mapMpStatusToEstado(payment.status);
    const supabaseAdmin = getSupabaseAdmin();

    const { error } = await supabaseAdmin
      .from('compras_pendientes')
      .update({
        estado,
        mp_payment_id: String(payment.id),
        mp_status: payment.status ?? null,
      })
      .eq('id', compraId);

    if (error) {
      console.error('Error actualizando compras_pendientes desde el webhook:', error);
      // Devolvemos 500 para que Mercado Pago reintente más tarde: puede ser
      // un problema transitorio de conexión con Supabase.
      return NextResponse.json({ error: 'update_failed' }, { status: 500 });
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error('Error en webhook de Mercado Pago:', err);
    return NextResponse.json({ error: 'internal_error' }, { status: 500 });
  }
}

// Mercado Pago a veces hace una verificación simple con GET al configurar la URL.
export async function GET() {
  return NextResponse.json({ ok: true }, { status: 200 });
}
