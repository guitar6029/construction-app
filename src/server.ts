import "dotenv/config";
import app from "./app";

const port = Bun.env.PORT || 3000;

Bun.serve({ port, fetch: app.fetch });
