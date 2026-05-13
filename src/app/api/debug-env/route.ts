const KEYS = [
  "NODE_ENV",
  "POSTGRES_URL",
  "POSTGRES_PRISMA_URL",
  "POSTGRES_URL_NON_POOLING",
  "POSTGRES_USER",
  "POSTGRES_HOST",
  "POSTGRES_PASSWORD",
  "POSTGRES_DATABASE",
  "SUPABASE_URL",
  "SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "SUPABASE_JWT_SECRET",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
];

export async function GET() {
  const vars = Object.fromEntries(
    KEYS.map((key) => [key, process.env[key] ?? null])
  );
  return Response.json(vars);
}
