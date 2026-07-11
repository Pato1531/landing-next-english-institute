// src/lib/campus/provisionAlumno.ts
//
// Se llama desde /api/mercadopago/webhook, únicamente después de confirmar
// contra la API de Mercado Pago que el pago está realmente aprobado.
//
// Qué hace:
// 1. Crea (o reutiliza, si el alumno ya compró otro curso antes) el usuario
//    en Supabase Auth — EN SILENCIO, sin mandar ningún mail en este paso.
// 2. Da de alta / actualiza su fila en `alumnos`.
// 3. Crea la `inscripcion` al curso comprado, vinculada a la compra.
// 4. Manda el código de acceso de 6 dígitos (mismo camino para alumnos
//    nuevos y recurrentes — así el login siempre funciona igual).
//
// Por qué código y no link: los links de un solo uso pueden ser "gastados"
// por escáneres de seguridad de los proveedores de email (Gmail, Outlook)
// antes de que el alumno lo toque, dejándolo inválido cuando el alumno
// intenta entrar de verdad. Un código que el alumno tipea a mano no tiene
// ese problema — ningún bot completa un formulario por vos.
//
// Requiere Service Role Key (ya la tenés cargada, mismo proyecto Landing-Campus-Next).

import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

interface ProvisionAlumnoParams {
  compraId: string;
  nombre: string;
  email: string;
  cursoSlug: string;
}

interface ProvisionAlumnoResult {
  alumnoId: string;
  yaExistia: boolean;
}

export async function provisionAlumno({
  compraId,
  nombre,
  email,
  cursoSlug,
}: ProvisionAlumnoParams): Promise<ProvisionAlumnoResult> {
  const supabase = getSupabaseAdmin();
  const emailNormalizado = email.trim().toLowerCase();

  let alumnoId: string;
  let yaExistia = false;

  // 1) Crear el usuario en Auth, sin mandar mail (el mail lo manda el
  // paso 4, siempre por el mismo camino).
  const { data: createData, error: createError } =
    await supabase.auth.admin.createUser({
      email: emailNormalizado,
      email_confirm: true,
      user_metadata: { nombre },
    });

  if (createError) {
    const yaRegistrado =
      createError.message?.toLowerCase().includes("already been registered") ||
      createError.status === 422;

    if (!yaRegistrado) throw createError;

    yaExistia = true;

    const { data: usersPage, error: listError } =
      await supabase.auth.admin.listUsers();
    if (listError) throw listError;

    const existente = usersPage.users.find(
      (u) => u.email?.toLowerCase() === emailNormalizado
    );
    if (!existente) {
      throw new Error(
        `No se pudo resolver el usuario existente para ${emailNormalizado}`
      );
    }
    alumnoId = existente.id;
  } else {
    if (!createData.user) {
      throw new Error("createUser no devolvió el usuario creado");
    }
    alumnoId = createData.user.id;
  }

  // 2) Alta / actualización en alumnos (idempotente)
  const { error: alumnoError } = await supabase
    .from("alumnos")
    .upsert(
      { id: alumnoId, nombre, email: emailNormalizado },
      { onConflict: "id" }
    );
  if (alumnoError) throw alumnoError;

  // 3) Alta de la inscripción (idempotente por el unique(alumno_id, curso_slug))
  const { error: inscripcionError } = await supabase
    .from("inscripciones")
    .upsert(
      { alumno_id: alumnoId, curso_slug: cursoSlug, compra_id: compraId },
      { onConflict: "alumno_id,curso_slug" }
    );
  if (inscripcionError) throw inscripcionError;

  // 4) Mandar el código de acceso de 6 dígitos.
  const { error: otpError } = await supabase.auth.signInWithOtp({
    email: emailNormalizado,
    options: { shouldCreateUser: false },
  });
  if (otpError) throw otpError;

  return { alumnoId, yaExistia };
}
