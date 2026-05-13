import { Pool } from "pg";

const connectionString = process.env.POSTGRES_URL;
const isLocal =
  !connectionString || /@(db|localhost|127\.0\.0\.1)[:/]/.test(connectionString);

const pool = new Pool({
  connectionString,
  ssl: isLocal ? undefined : { rejectUnauthorized: false },
});

export default pool;
