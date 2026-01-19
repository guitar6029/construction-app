import { InspectionStatus } from "@/enums/inspectionStatus";
import { Inspection } from "@/schemas/Inspection";

export async function getInspections(): Promise<Inspection[]> {
  return [
    {
      id: "8f6c1b7e-2f7a-4c6b-bd9a-9b4e0f7c3a21",
      projectId: "3a9c1e5b-6b7f-4a55-9f3d-1d2a6b9f8c44",
      status: InspectionStatus.SCHEDULED,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "c1f1a7b3-9e88-4e6b-9d53-2a5b7f8e1d90",
      projectId: "3a9c1e5b-6b7f-4a55-9f3d-1d2a6b9f8c44",
      status: InspectionStatus.PASSED,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}
