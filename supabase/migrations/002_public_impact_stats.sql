-- Statistiques publiques de l'accueil (bloc « Notre impact ») — à exécuter dans le
-- SQL Editor Supabase (même projet que bepas_log).
--
-- Le site public utilise la clé anon : il ne doit jamais lire la table
-- souscripteurs directement. Cette fonction ne renvoie que des comptages
-- agrégés par site et par genre, sans aucune donnée personnelle.

create or replace function public.public_impact_stats()
returns table (site text, genre text, total bigint)
language sql
stable
security definer
set search_path = public
as $$
  select s.site, s.genre, count(*)::bigint as total
  from public.souscripteurs s
  where s.deleted_at is null
  group by s.site, s.genre
$$;

revoke all on function public.public_impact_stats() from public;
grant execute on function public.public_impact_stats() to anon, authenticated;
