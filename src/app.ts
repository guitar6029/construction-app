import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";
import HealthRouter from "./routes/health.routes";
const app = new OpenAPIHono();

app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/health", HealthRouter);

app.notFound((c) => {
  return c.text("Page does not exist - 404", 404);
});

export default app;
