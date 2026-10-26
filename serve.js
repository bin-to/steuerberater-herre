// Kleiner lokaler Server für die Vorschau: node serve.js  →  http://localhost:5173
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT) || 5173;
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".pdf": "application/pdf",
};

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  // /kanzlei → /kanzlei/ (wie ein normaler Webserver)
  if (!path.extname(p) && !p.endsWith("/")) return res.writeHead(301, { Location: p + "/" }).end();
  if (p.endsWith("/")) p += "index.html";
  const file = path.join(root, path.normalize(p));
  if (!file.startsWith(root)) return res.writeHead(403).end();
  fs.readFile(file, (err, data) => {
    // Wie GitHub Pages: unbekannte Adressen bekommen die 404-Seite
    if (err) return fs.readFile(path.join(root, "404.html"), (e, page) => res.writeHead(404, { "Content-Type": types[".html"] }).end(e ? "Not found" : page));
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(port, () => console.log(`http://localhost:${port}`));
