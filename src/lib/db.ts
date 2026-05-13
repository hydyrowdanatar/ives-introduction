import { Pool, type QueryResult, type QueryResultRow } from "pg";

let _pool: Pool | undefined;

function getPool(): Pool {
  
  if (!_pool) {
    const connectionString = process.env.POSTGRES_URL;
    if (!connectionString) throw new Error("POSTGRES_URL is not set");
    const isLocal = /@(db|localhost|127\.0\.0\.1)[:/]/.test(connectionString);
    const cleanUrl = connectionString.replace(/[?&]sslmode=[^&]*/g, "").replace(/[?&]pgbouncer=[^&]*/g, "").replace(/[?&]$/, "");
    _pool = new Pool({
      connectionString: cleanUrl,
      ssl: isLocal ? undefined : { rejectUnauthorized: false },
    });
  }
  return _pool;
}

export default {
  query<T extends QueryResultRow = QueryResultRow>(
    text: string,
    values?: unknown[]
  ): Promise<QueryResult<T>> {
    return getPool().query<T>(text, values);
  },
};
