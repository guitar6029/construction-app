import {
  CreateInspectionSchema,
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
  path: "/{inspectionId}",
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

export const createInspectionRoute = createRoute({
  method: "post",
  path: "/",
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateInspectionSchema,
        },
      },
    },
  },
  responses: {
    201: {
      content: {
        "application/json": {
          schema: InspectionSchema,
        },
      },
      description: "Create Inspection",
    },
  },
});

export const updateInspectionRoute = createRoute({
  method: "patch",
  path: "/{inspectionId}",
  request: {
    params: InspectionIdParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: CreateInspectionSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: InspectionSchema,
        },
      },
      description: "Updated single project",
    },
  },
});
