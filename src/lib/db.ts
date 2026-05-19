import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

type Schema = typeof schema;

let _db: NodePgDatabase<Schema> | undefined;

function buildPoolConfig() {
  const url = process.env.POSTGRES_URL;
  if (!url) throw new Error("POSTGRES_URL is not set");
  const isLocal = /@(db|localhost|127\.0\.0\.1)[:/]/.test(url);
  return {
    connectionString: url
      .replace(/[?&]sslmode=[^&]*/g, "")
      .replace(/[?&]pgbouncer=[^&]*/g, "")
      .replace(/[?&]$/, ""),
    ssl: isLocal ? undefined : ({ rejectUnauthorized: false } as const),
  };
}

export function getDb(): NodePgDatabase<Schema> {
  if (!_db) _db = drizzle(new Pool(buildPoolConfig()), { schema });
  return _db;
}
