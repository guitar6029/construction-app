import { Status } from "@/enums/status";
import { z } from "@hono/zod-openapi";
export const ProjectSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  code: z.string(),
  description: z.string(),
  status: z.enum(Status),
  startDate: z.iso.date(),
  endDate: z.iso.date().optional(),
  estimatedCompletionDate: z.iso.date(),
  projectManagerId: z.uuid(),
  clientName: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string().length(2),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type Project = z.infer<typeof ProjectSchema>;
