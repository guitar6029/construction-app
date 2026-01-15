import { Status } from "@/enums/status";
import { z } from "@hono/zod-openapi";

const MIN_NAME_LENGTH = 2;

export const ProjectIdParamsSchema = z.object({ projectId: z.string() });

export const CreateProjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(MIN_NAME_LENGTH, { error: "Name must be at least 2 characters" }),
  code: z.string().trim(),
  description: z.string(),
  status: z.enum(Status),
  estimatedCompletionDate: z.iso.date(),
  projectManagerId: z.uuid(),
  clientName: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string().length(2),
});

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

export const UpdateProjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(MIN_NAME_LENGTH, { error: "Name must be at least 2 characters" })
    .optional(),

  clientName: z.string().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

export type CreateProjectInput = z.infer<typeof CreateProjectSchema>;

export type UpdateProjectIinput = z.infer<typeof UpdateProjectSchema>;
