import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Cliente de Supabase con la Service Role Key.
 *
 * IMPORTANTE: este archivo solo debe importarse desde código que corre
 * en el servidor (API Routes). Si se importa desde un componente
 * 'use client', Next.js intentaría incluir la Service Role Key en el
 * bundle del navegador — eso sería una filtración crítica de credenciales
 * (acceso total a la base, sin RLS).
 *
 * No lleva el prefijo NEXT_PUBLIC_ justamente para que Next.js la excluya
 * del bundle del cliente por defecto.
 *
 * Inicialización perezosa (lazy): el cliente se crea recién en la primera
 * request real, no cuando Next.js carga el módulo. Esto evita que el build
 * de producción falle si, por ejemplo, las variables de entorno todavía no
 * están configuradas en un ambiente de Preview.
 */
let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Faltan configurar SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY.');
  }

  client = createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
  return client;
}
