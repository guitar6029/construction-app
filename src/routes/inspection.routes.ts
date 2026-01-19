import { OpenAPIHono } from "@hono/zod-openapi";
import {
  createInspectionRoute,
  getInspectionRoute,
  getInspectionsRoute,
  updateInspectionRoute,
} from "./contracts/inspection.contract";
import {
  createInspection,
  getInspection,
  getInspections,
  updateInspection,
} from "@/services/inspectionService";

const router = new OpenAPIHono();

// GET all
router.openapi(getInspectionsRoute, async (c) => {
  const inspections = await getInspections();
  return c.json(inspections);
});

// //  GET single

router.openapi(getInspectionRoute, async (c) => {
  const { inspectionId } = c.req.valid("param");
  const inspection = await getInspection(inspectionId);
  return c.json(inspection);
});

// // POST
router.openapi(createInspectionRoute, async (c) => {
  const payload = c.req.valid("json");
  const created = await createInspection(payload);
  return c.json(created, 201);
});

// PATCH
router.openapi(updateInspectionRoute, async (c) => {
  const { inspectionId } = c.req.valid("param");
  let payload = c.req.valid("json");
  const updated = await updateInspection(inspectionId, payload);
  return c.json(updated);
});

// // DELETE

// router.openapi(deleteInspectionRoute, async (c) => {
//   const { inspectionId } = c.req.valid("param");
//   await deleteInspection(inspectionId);
//   return c.body(null, 204);
// });
