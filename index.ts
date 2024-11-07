import app from "./app";

Bun.serve({
  fetch: app.fetch,
});

console.log("⚡⚡⚡ If you see this log that because our server is running! ⚡⚡⚡");
