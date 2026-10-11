-- Messages du formulaire de contact du site — à exécuter dans le SQL Editor
-- Supabase (même projet que bepas_log). À consulter depuis bepas_log.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) between 5 and 200),
  phone text check (phone is null or char_length(phone) <= 40),
  subject text not null check (char_length(subject) between 2 and 200),
  message text not null check (char_length(message) between 10 and 5000),
  status text not null default 'new'
    check (status in ('new', 'in_progress', 'done', 'spam')),
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

create index if not exists contact_messages_status_idx
  on public.contact_messages (status);

alter table public.contact_messages enable row level security;

-- Le site (clé anon) peut seulement insérer un nouveau message, jamais lire,
-- modifier ou supprimer. bepas_log lit et traite via son compte / service role.
drop policy if exists "contact_messages_public_insert" on public.contact_messages;
create policy "contact_messages_public_insert"
  on public.contact_messages
  for insert
  to anon
  with check (status = 'new');
