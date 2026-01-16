import { Status } from "@/enums/status";

export interface ProjectsTable {
  id: string;
  name: string;
  client_name: string;
  status: Status;
  created_at: Date;
  updated_at: Date;
}

export interface Database {
  projects: ProjectsTable;
}
