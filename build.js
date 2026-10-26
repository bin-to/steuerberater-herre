// Erzeugt alle Seiten aus src/pages.js mit dem gemeinsamen Layout.
// Saubere URLs: jede Seite liegt als index.html in einem eigenen Ordner (/kanzlei/ statt /kanzlei.html).
// Pfade bleiben relativ ({{root}}), damit die Seite auch in einem Unterordner läuft.
// Aufruf: node build.js
const fs = require("fs");
const path = require("path");
const { layout } = require("./src/components");
const pages = require("./src/pages");

// Alte Ausgaben im Hauptordner (*.html, außer index.html) entfernen
for (const f of fs.readdirSync(__dirname)) {
  if (f.endsWith(".html") && f !== "index.html") fs.unlinkSync(path.join(__dirname, f));
}

for (const page of pages) {
  const dir = path.join(__dirname, page.file);
  const root = page.file ? "../" : "./";
  fs.mkdirSync(dir, { recursive: true });
  const html = layout(page).replaceAll("{{root}}", root);
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  console.log("✓", "/" + (page.file ? page.file + "/" : ""));
}
