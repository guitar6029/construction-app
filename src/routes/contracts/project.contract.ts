import {
  CreateProjectSchema,
  ProjectIdParamsSchema,
  ProjectSchema,
} from "@/schemas/Project";
import { createRoute, z } from "@hono/zod-openapi";

export const getProjectsRoute = createRoute({
  operationId: "getProjects",
  method: "get",
  path: "/",
  tags: ["Projects"],
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.array(ProjectSchema),
        },
      },
      description: "Retrive projects",
    },
  },
});

export const updateProjectRoute = createRoute({
  operationId: "updateProject",
  method: "patch",
  path: "/{projectId}",
  tags: ["Projects"],
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
      description: "Update project",
    },
  },
});

export const deleteProjectRoute = createRoute({
  operationId: "deleteProject",
  method: "delete",
  path: "/{projectId}",
  tags: ["Projects"],
  request: {
    params: ProjectIdParamsSchema,
  },
  responses: {
    200: {
      description: "Delete project",
    },
  },
});

export const getProjectRoute = createRoute({
  operationId: "getProject",
  method: "get",
  path: "/{projectId}",
  tags: ["Projects"],
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
      description: "Retrieve project",
    },
  },
});

export const createProjectRoute = createRoute({
  operationId: "createProject",
  method: "post",
  path: "/",
  tags: ["Projects"],
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
