import { InspectionStatus } from "@/enums/inspectionStatus";
import { z } from "zod";

export const InspectionSchema = z.object({
  id: z.uuid(),
  projectId: z.uuid(),
  status: z.enum(InspectionStatus),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type Inspection = z.infer<typeof InspectionSchema>;
