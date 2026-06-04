import { createClient } from "@supabase/supabase-js"

function getEnvOrThrow(name: string) {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Variable d'environnement manquante : ${name}`)
  }
  return value
}

function getServiceRoleKey() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  if (!key) {
    throw new Error(
      "Variable manquante : SUPABASE_SERVICE_ROLE_KEY (dans .env ou .env.local)."
    )
  }
  return key
}

/** Client Supabase serveur uniquement — même projet que bepas_log */
export function getSupabaseAdminClient() {
  return createClient(
    getEnvOrThrow("NEXT_PUBLIC_SUPABASE_URL"),
    getServiceRoleKey(),
    { auth: { persistSession: false, autoRefreshToken: false } }
  )
}

export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() &&
      process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  )
}
