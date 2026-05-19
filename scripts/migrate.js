const { drizzle } = require('drizzle-orm/node-postgres');
const { migrate } = require('drizzle-orm/node-postgres/migrator');
const { Client } = require('pg');
const fs = require('fs/promises');
const path = require('path');

function buildConfig(url) {
  const isLocal = /@(db|localhost|127\.0\.0\.1)[:/]/.test(url);
  const connectionString = url
    .replace(/[?&]sslmode=[^&]*/g, '')
    .replace(/[?&]pgbouncer=[^&]*/g, '')
    .replace(/[?&]$/, '');
  return { connectionString, ssl: isLocal ? undefined : { rejectUnauthorized: false } };
}

async function run() {
  const connectionString = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL;
  if (!connectionString) {
    console.error('Migration skipped: POSTGRES_URL is not set.');
    return;
  }

  const client = new Client(buildConfig(connectionString));
  await client.connect();

  try {
    const db = drizzle(client);
    await migrate(db, { migrationsFolder: path.join(__dirname, '..', 'migrations') });
    console.log('Schema migrations complete.');
  } catch (err) {
    console.error('Schema migration failed:', err.message);
    await client.end();
    process.exit(1);
  }

  const seedFile = path.join(__dirname, '..', 'migrations', '004_seed_ProductInsuranceRates.sql');
  try {
    const sql = await fs.readFile(seedFile, 'utf8');
    const { rows } = await client.query('SELECT COUNT(*)::int AS count FROM productinsurancerate');
    if (rows[0].count === 0) {
      console.log('Seeding ProductInsuranceRate...');
      await client.query('BEGIN');
      await client.query(sql);
      await client.query('COMMIT');
      console.log('Seed complete.');
    } else {
      console.log('Skipping seed: ProductInsuranceRate already has data.');
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      await client.end();
      return;
    }
    await client.query('ROLLBACK').catch(() => {});
    console.error('Seed failed:', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

run();
