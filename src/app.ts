import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";
import HealthRouter from "./routes/health.routes";
import ProjectsRouter from "./routes/projects.routes";
import { swaggerUI } from "@hono/swagger-ui";
const app = new OpenAPIHono();

app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/health", HealthRouter);
app.route("/projects", ProjectsRouter);

// Swagger UI
app.get("/docs", swaggerUI({ url: "/doc" }));

// openAPI JSON
app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Construction API",
  },
});

app.notFound((c) => {
  return c.text("Page does not exist - 404", 404);
});

export default app;
