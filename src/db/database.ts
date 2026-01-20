import { InspectionsTable } from "./tables/inspections.table";
import { ProjectsTable } from "./tables/projects.table";

export interface Database {
  projects: ProjectsTable;
  inspections: InspectionsTable;
}
