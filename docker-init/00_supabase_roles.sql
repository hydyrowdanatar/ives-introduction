-- Required by supabase/studio and supabase/postgres-meta
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'supabase_admin') THEN
    CREATE ROLE supabase_admin WITH LOGIN SUPERUSER PASSWORD 'postgres';
  END IF;
END
$$;
