import { promises as fs } from "fs";
import path from "path";
import { Kysely, Migrator, FileMigrationProvider } from "kysely";
import { Pool } from "pg";
import { PostgresDialect } from "kysely";

const db = new Kysely({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: process.env.PGHOST,
      port: Number(process.env.PGPORT),
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    }),
  }),
});

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(__dirname, "migrations"),
  }),
});

async function migrate() {
  const { error, results } = await migrator.migrateToLatest();

  results?.forEach((migration) => {
    if (migration.status === "Success") {
      console.log(`✅ ${migration.migrationName}`);
    } else {
      console.error(`❌ ${migration.migrationName}`);
    }
  });

  if (error) {
    console.error("Migration failed", error);
    process.exit(1);
  }

  await db.destroy();
}

migrate();
