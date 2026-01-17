import { promises as fs } from "fs";
import path from "path";
import { Migrator, FileMigrationProvider } from "kysely";
import { db } from "./index";
import "dotenv/config";

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(__dirname, "migrations"),
  }),
});

async function migrate() {
  try {
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
      process.exitCode = 1;
    }
  } catch (err) {
    console.error("Migration crashed", err);
  } finally {
    await db.destroy();
  }
}

migrate();
