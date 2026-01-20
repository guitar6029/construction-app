import { InspectionStatus } from "@/enums/inspectionStatus";
import { z } from "@hono/zod-openapi";

export const InspectionIdParamsSchema = z.object({
  inspectionId: z.uuid(),
});

export const InspectionSchema = z.object({
  id: z.uuid(),
  projectId: z.uuid(),
  name: z.string().optional(),
  status: z.enum(InspectionStatus),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export const UpdateInspectionSchema = z.object({
  name: z.string().optional(),
  status: z.enum(InspectionStatus).optional(),
});

export const CreateInspectionSchema = z.object({
  name: z.string().optional(),
  status: z.enum(InspectionStatus),
});

export type Inspection = z.infer<typeof InspectionSchema>;
export type CreateInspection = z.infer<typeof CreateInspectionSchema>;
export type UpdateProjectIinput = z.infer<typeof UpdateInspectionSchema>;
