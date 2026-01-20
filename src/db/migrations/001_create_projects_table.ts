import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  //needed for uuid
  await db.executeQuery(
    sql`CREATE EXTENSION IF NOT EXISTS pgcrypto`.compile(db),
  );

  //create the table
  await db.schema
    .createTable("projects")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("client_name", "text", (col) => col.notNull())
    .addColumn("status", "text", (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn("updated_at", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute();

  await db.schema
    .createIndex("projects_status_idx")
    .on("projects")
    .column("status")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropIndex("projects_status_idx").execute();
  await db.schema.dropTable("projects").execute();
}
