const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

async function migrate() {
  const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    console.error('Migration skipped: neither DIRECT_URL nor DATABASE_URL is set.');
    return;
  }
  const isLocal = /@(db|localhost|127\.0\.0\.1)[:/]/.test(connectionString);
  const client = new Client({
    connectionString,
    ssl: isLocal ? undefined : { rejectUnauthorized: false },
  });
  await client.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS _migrations (
        name TEXT PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);

    const dir = path.join(__dirname, '..', 'migrations');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.sql')).sort();

    for (const file of files) {
      const { rows } = await client.query(
        'SELECT 1 FROM _migrations WHERE name = $1',
        [file]
      );
      if (rows.length > 0) {
        console.log(`skipping ${file} (already applied)`);
        continue;
      }

      console.log(`applying ${file}...`);
      const sql = fs.readFileSync(path.join(dir, file), 'utf8');
      await client.query('BEGIN');
      await client.query(sql);
      await client.query('INSERT INTO _migrations (name) VALUES ($1)', [file]);
      await client.query('COMMIT');
      console.log(`applied ${file}`);
    }
  } catch (err) {
    await client.query('ROLLBACK').catch(() => {});
    console.error('Migration failed:', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

migrate();
