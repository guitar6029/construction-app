import { Hono } from "hono";
const router = new Hono();

router.get("/", (c) => {
  return c.json([]);
});

router.post("/", (c) => {
  return c.json({ created: "ok" });
});

router.get("/:projectId", (c) => {
  return c.json({ id: c.req.param("projectId") });
});

export default router;
