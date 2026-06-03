create table if not exists leads (
  id         uuid        primary key default gen_random_uuid(),
  email      text        not null unique,
  source     text        not null default 'ai-design-os',
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table leads enable row level security;

-- Anonymous users can insert (email capture form)
create policy "anon_insert_leads"
  on leads
  for insert
  to anon
  with check (true);

-- Only authenticated users (you) can read
create policy "auth_read_leads"
  on leads
  for select
  to authenticated
  using (true);