import { ProjectSchema } from "@/schemas/Project";
import { createRoute, z } from "@hono/zod-openapi";

export const listProjectsRoute = createRoute({
  method: "get",
  path: "/",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.array(ProjectSchema),
        },
      },
      description: "Retrive the projects",
    },
  },
});
