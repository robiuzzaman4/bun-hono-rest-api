import { Hono } from "hono";

export const notesRoutes = new Hono();
notesRoutes.get("/", (c) => {
  return c.json({
    notes: [
      { id: 1, title: "Note 1", content: "Content 1" },
      { id: 2, title: "Note 2", content: "Content 2" },
      { id: 3, title: "Note 3", content: "Content 3" },
    ],
  });
});
