import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";
import HealthRouter from "./routes/health.routes";
import ProjectsRouter from "./routes/projects.routes";
const app = new OpenAPIHono();

app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/health", HealthRouter);
app.route("/projects", ProjectsRouter);

app.notFound((c) => {
  return c.text("Page does not exist - 404", 404);
});

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default app;
