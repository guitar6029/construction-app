import { InspectionStatus } from "@/enums/inspectionStatus";
import { z } from "zod";

export const InspectionIdParamsSchema = z.object({
  inspectionId: z.string(),
});

export const InspectionSchema = z.object({
  id: z.uuid(),
  projectId: z.uuid(),
  status: z.enum(InspectionStatus),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export const CreateInspectionSchema = z.object({
  status: z.enum(InspectionStatus),
});

export type Inspection = z.infer<typeof InspectionSchema>;
export type CreateInspection = z.infer<typeof CreateInspectionSchema>;
