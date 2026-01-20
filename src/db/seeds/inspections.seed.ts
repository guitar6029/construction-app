import { Kysely } from "kysely";
import type { Database } from "@/db/database";
import { InspectionStatus } from "@/enums/inspectionStatus";

export async function seedInspections(
  db: Kysely<Database>,
  projectIds: string[],
) {
  if (projectIds.length === 0) return;

  await db
    .insertInto("inspections")
    .values([
      {
        project_id: projectIds[0],
        name: "Initial walkthrough",
        status: InspectionStatus.Scheduled,
      },
      {
        project_id: projectIds[0],
        name: "Safety check",
        status: InspectionStatus.InProgress,
      },
      {
        project_id: projectIds[1],
        name: "Final inspection",
        status: InspectionStatus.Passed,
      },
    ])
    .execute();
}
