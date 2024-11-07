import { Hono } from "hono";
import { notesRoutes } from "./routes/notes";
const app = new Hono();

app.get("/test", (c) =>
  c.json({
    success: true,
    route: "test",
  })
);

// all notes routes
app.route("api/notes", notesRoutes);

export default app;
