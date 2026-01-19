import { InspectionSchema } from "@/schemas/Inspection";
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
