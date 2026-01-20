import { InspectionStatus } from "@/enums/inspectionStatus";
import { Generated } from "kysely";

export interface InspectionsTable {
  id: Generated<string>;
  project_id: string;
  name: string | null;
  status: InspectionStatus;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}
