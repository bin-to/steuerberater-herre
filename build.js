// Erzeugt alle HTML-Seiten aus src/pages.js mit dem gemeinsamen Layout.
// Aufruf: node build.js
const fs = require("fs");
const path = require("path");
const { layout } = require("./src/components");
const pages = require("./src/pages");

for (const page of pages) {
  fs.writeFileSync(path.join(__dirname, page.file), layout(page), "utf8");
  console.log("✓", page.file);
}
