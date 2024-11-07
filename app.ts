import { Hono } from "hono";
import { cors } from "hono/cors";
import { notesRoutes } from "./routes/notes";

const app = new Hono();

// cors configuration
app.use("*", cors());

// test route to ensure everything is working properly
app.get("/test", (c) =>
  c.json({
    success: true,
    route: "test",
  })
);

// all notes routes
app.route("/api/notes", notesRoutes);

export default app;
