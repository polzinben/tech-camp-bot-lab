// Tiny zero-dependency static file server so the Bot Lab runs in Replit's preview.
// You don't need to touch this file — just edit bot-config.js and hit Run.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);
    if (urlPath === "/") urlPath = "/index.html";
    const filePath = path.join(__dirname, path.normalize(urlPath));
    // Never serve files outside this folder.
    if (!filePath.startsWith(__dirname)) {
      res.writeHead(403);
      return res.end("Forbidden");
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end("Not found");
      }
      res.writeHead(200, {
        "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream",
        // Don't cache, so editing bot-config.js + refresh always shows the new bot.
        "Cache-Control": "no-store",
      });
      res.end(data);
    });
  })
  .listen(PORT, "0.0.0.0", () => console.log("Bot Lab running on port " + PORT));
