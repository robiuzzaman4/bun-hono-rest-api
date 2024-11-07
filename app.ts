import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) =>
  c.json({
    message: "Hello, World!",
    timestamp: new Date().toISOString(),
    author: "Ruhan",
    version: "1.0.0",
  })
);

export default app;
