import { Kysely } from "kysely";
import type { Database } from "@/db/database";
import { ProjectStatus } from "@/enums/status";

export async function seedProjects(db: Kysely<Database>) {
  // Insert projects and return ids so inspections can reference them
  const projects = await db
    .insertInto("projects")
    .values([
      {
        name: "Alpha Tower",
        client_name: "ACME",
        status: ProjectStatus.Active,
      },
      { name: "Sunset Plaza", client_name: "Beacon Group", status: "planning" },
    ])
    .returning(["id", "name"])
    .execute();

  return projects;
}
