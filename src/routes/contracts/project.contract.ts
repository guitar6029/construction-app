import {
  CreateProjectSchema,
  ProjectIdParamsSchema,
  ProjectSchema,
} from "@/schemas/Project";
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

export const updateProjectRoute = createRoute({
  method: "patch",
  path: "/{projectId}",
  request: {
    params: ProjectIdParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: CreateProjectSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ProjectSchema,
        },
      },
      description: "Updated single project",
    },
  },
});

export const deleteProjectRoute = createRoute({
  method: "delete",
  path: "/{projectId}",
  request: {
    params: ProjectIdParamsSchema,
  },
  responses: {
    200: {
      description: "Proejct deleted",
    },
  },
});

export const getProjectRoute = createRoute({
  method: "get",
  path: "/{projectId}",
  request: {
    params: ProjectIdParamsSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ProjectSchema,
        },
      },
      description: "Retrieve single project",
    },
  },
});

export const createProjectRoute = createRoute({
  method: "post",
  path: "/",
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateProjectSchema,
        },
      },
    },
  },
  responses: {
    201: {
      content: {
        "application/json": {
          schema: ProjectSchema,
        },
      },
      description: "Create project",
    },
  },
});
