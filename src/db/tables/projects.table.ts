import { ProjectStatus } from "@/enums/status";
import { Generated } from "kysely";

export interface ProjectsTable {
  id: Generated<string>;
  name: string;
  client_name: string;
  status: ProjectStatus;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}
