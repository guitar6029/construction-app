import {
  CreateInspectionSchema,
  InspectionIdParamsSchema,
  InspectionSchema,
  UpdateInspectionSchema,
} from "@/schemas/Inspection";
import { createRoute, z } from "@hono/zod-openapi";

export const getInspectionsRoute = createRoute({
  operationId: "getInspections",
  method: "get",
  path: "/",
  tags: ["Inspections"],
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
  operationId: "getInspection",
  method: "get",
  path: "/{inspectionId}",
  tags: ["Inspections"],
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
  operationId: "createInspection",
  method: "post",
  path: "/",
  tags: ["Inspections"],
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
  operationId: "updateInspection",
  method: "patch",
  path: "/{inspectionId}",
  tags: ["Inspections"],
  request: {
    params: InspectionIdParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: UpdateInspectionSchema,
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
      description: "Update inspection",
    },
  },
});

export const deleteInspectionRoute = createRoute({
  operationId: "deleteInspection",
  method: "delete",
  path: "/{inspectionId}",
  tags: ["Inspections"],
  request: {
    params: InspectionIdParamsSchema,
  },
  responses: {
    204: {
      description: "Delete inspection",
    },
  },
});
