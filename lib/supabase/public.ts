import { createClient } from "@supabase/supabase-js"

/**
 * Client Supabase serveur avec la clé anon — même projet que bepas_log.
 * Soumis aux policies RLS : lecture des articles publiés, statistiques agrégées
 * et insertion des messages de contact uniquement. Ne jamais utiliser la clé
 * service_role dans ce site public.
 */
export function getSupabasePublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const anonKey = process.env.NEXT_SUPABASE_ANON_KEY?.trim()

  if (!url || !anonKey) {
    throw new Error(
      "Variables manquantes : NEXT_PUBLIC_SUPABASE_URL et NEXT_SUPABASE_ANON_KEY (dans .env ou .env.local)."
    )
  }

  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() &&
      process.env.NEXT_SUPABASE_ANON_KEY?.trim()
  )
}
