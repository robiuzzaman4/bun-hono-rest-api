import { Hono } from "hono";

export const notesRoutes = new Hono();
notesRoutes.get("/", (c) => {
  return c.json({
    success: true,
    status: 200,
    notes: [
      { id: 1, title: "Note 1", content: "Content 1" },
      { id: 2, title: "Note 2", content: "Content 2" },
      { id: 3, title: "Note 3", content: "Content 3" },
      { id: 4, title: "Note 4", content: "Content 4" },
      { id: 5, title: "Note 5", content: "Content 5" },
      { id: 6, title: "Note 6", content: "Content 6" },
      { id: 7, title: "Note 7", content: "Content 7" },
      { id: 8, title: "Note 8", content: "Content 8" },
      { id: 9, title: "Note 9", content: "Content 9" },
      { id: 10, title: "Note 10", content: "Content 10" },
    ],
  });
});
