import { OpenAPIHono } from "@hono/zod-openapi";
import {
  listProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
} from "@/services/projectService";
import {
  listProjectsRoute,
  getProjectRoute,
  createProjectRoute,
  deleteProjectRoute,
  updateProjectRoute,
} from "./contracts/project.contract";
const router = new OpenAPIHono();

/** GET  list of projects*/
router.openapi(listProjectsRoute, async (c) => {
  const projects = await listProjects();
  return c.json(projects);
});

/** GET single project {/projectId} */
router.openapi(getProjectRoute, async (c) => {
  const { projectId } = c.req.valid("param");
  const project = await getProject(projectId);
  return c.json(project);
});

/** POST  create new project*/
router.openapi(createProjectRoute, async (c) => {
  const payload = c.req.valid("json");
  const created = await createProject(payload);
  return c.json(created, 201);
});

/** PATCH , update a project */
router.openapi(updateProjectRoute, async (c) => {
  const { projectId } = c.req.valid("param");
  let payload = c.req.valid("json");
  const updated = await updateProject(projectId, payload);
  return c.json(updated);
});

/** DELETE */

router.openapi(deleteProjectRoute, async (c) => {
  const { projectId } = c.req.valid("param");
  await deleteProject(projectId);
  return c.body(null, 204);
});

export default router;
