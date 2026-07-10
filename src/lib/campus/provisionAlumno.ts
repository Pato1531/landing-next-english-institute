// src/lib/campus/provisionAlumno.ts
//
// Se llama desde /api/mercadopago/webhook, únicamente después de confirmar
// contra la API de Mercado Pago que el pago está realmente aprobado.
//
// Qué hace:
// 1. Crea (o reutiliza, si el alumno ya compró otro curso antes) el usuario
//    en Supabase Auth y le envía el email de acceso (magic link).
// 2. Da de alta / actualiza su fila en `alumnos`.
// 3. Crea la `inscripcion` al curso comprado, vinculada a la compra.
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

  // URL a la que vuelve el alumno después de tocar el magic link.
  // Configurar CAMPUS_SITE_URL en Vercel cuando el campus tenga su propio deploy.
  const redirectTo = `${process.env.CAMPUS_SITE_URL}/auth/callback`;

  let alumnoId: string;
  let yaExistia = false;

  // 1) Intentar crear el usuario + disparar el email de invitación/acceso.
  //    inviteUserByEmail crea el usuario en auth.users Y envía el mail en un solo paso.
  const { data: inviteData, error: inviteError } =
    await supabase.auth.admin.inviteUserByEmail(emailNormalizado, {
      redirectTo,
      data: { nombre },
    });

  if (inviteError) {
    // Caso esperado: el alumno ya existe porque compró otro curso antes.
    const yaRegistrado =
      inviteError.message?.toLowerCase().includes("already been registered") ||
      inviteError.status === 422;

    if (!yaRegistrado) {
      // Error real (credenciales, red, etc.) -> se propaga para que el webhook lo loguee.
      throw inviteError;
    }

    yaExistia = true;

    // Buscar el id del usuario existente por email.
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

    // Reenviar el acceso: como ya está registrado, generamos un magic link
    // de login normal (no invitación) para que entre directo a este nuevo curso.
    const { error: otpError } = await supabase.auth.signInWithOtp({
      email: emailNormalizado,
      options: { emailRedirectTo: redirectTo, shouldCreateUser: false },
    });
    if (otpError) throw otpError;
  } else {
    if (!inviteData.user) {
      throw new Error("inviteUserByEmail no devolvió el usuario creado");
    }
    alumnoId = inviteData.user.id;
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

  return { alumnoId, yaExistia };
}
