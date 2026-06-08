-- CMS Actualités BEPAS — à exécuter dans le SQL Editor Supabase (même projet que bepas_log)

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content_html text not null default '',
  cover_image_url text,
  category text not null default 'bepas',
  author_name text not null default 'BEPAS',
  featured boolean not null default false,
  status text not null default 'draft'
    check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists articles_published_at_idx
  on public.articles (published_at desc nulls last);

create index if not exists articles_status_idx
  on public.articles (status);

-- Lecture publique : articles publiés uniquement (clé anon)
alter table public.articles enable row level security;

drop policy if exists "articles_public_read" on public.articles;
create policy "articles_public_read"
  on public.articles
  for select
  to anon, authenticated
  using (status = 'published');

-- Écriture : service role / admin (bepas_log) — pas de policy insert/update pour anon
