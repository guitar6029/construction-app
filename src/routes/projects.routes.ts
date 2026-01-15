import { OpenAPIHono } from "@hono/zod-openapi";
import { listProjects } from "@/services/projectService";
import { listProjectsRoute } from "./contracts/project.contract";
const router = new OpenAPIHono();

router.openapi(listProjectsRoute, async (c) => {
  const projects = await listProjects();
  return c.json(projects);
});

router.post("/", (c) => {
  return c.json({ created: "ok" });
});

router.get("/:projectId", (c) => {
  return c.json({ id: c.req.param("projectId") });
});

export default router;
