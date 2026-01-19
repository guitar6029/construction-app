import {
  InspectionIdParamsSchema,
  InspectionSchema,
} from "@/schemas/Inspection";
import { createRoute, z } from "@hono/zod-openapi";

export const getInspectionsRoute = createRoute({
  method: "get",
  path: "/",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.array(InspectionSchema),
        },
      },
      description: "Retrieve inspections",
    },
  },
});

export const getInspectionRoute = createRoute({
  method: "get",
  path: "/",
  request: {
    params: InspectionIdParamsSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: InspectionSchema,
        },
      },
      description: "Retrieve inspection",
    },
  },
});
