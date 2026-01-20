import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("inspections")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn("project_id", "uuid", (col) =>
      col.notNull().references("projects.id").onDelete("cascade"),
    )
    .addColumn("name", "text")
    .addColumn("status", sql`inspection_status`, (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn("updated_at", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute();

  await db.schema
    .createIndex("inspections_project_id_idx")
    .on("inspections")
    .column("project_id")
    .execute();

  // optional but often useful (if you filter inspections by status)
  // await db.schema
  //   .createIndex("inspections_status_idx")
  //   .on("inspections")
  //   .column("status")
  //   .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  // if you add inspections_status_idx, drop it here too
  await db.schema.dropIndex("inspections_project_id_idx").execute();
  await db.schema.dropTable("inspections").execute();
}
