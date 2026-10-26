// Erzeugt alle Seiten aus src/pages.js mit dem gemeinsamen Layout.
// Saubere URLs: jede Seite liegt als index.html in einem eigenen Ordner (/kanzlei/ statt /kanzlei.html).
// Pfade bleiben relativ ({{root}}), damit die Seite auch in einem Unterordner läuft (z. B. GitHub Pages).
// Aufruf: node build.js
const fs = require("fs");
const path = require("path");
const c = require("./src/components");
const pages = require("./src/pages");

// Alte Ausgaben im Hauptordner (*.html, außer index.html) entfernen – werden unten neu erzeugt
for (const f of fs.readdirSync(__dirname)) {
  if (f.endsWith(".html") && f !== "index.html") fs.unlinkSync(path.join(__dirname, f));
}

for (const page of pages) {
  const dir = path.join(__dirname, page.file);
  const root = page.file ? "../" : "./";
  fs.mkdirSync(dir, { recursive: true });
  const html = c.layout(page).replaceAll("{{root}}", root);
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  console.log("✓", "/" + (page.file ? page.file + "/" : ""));
}

// Weiterleitungen für alte Links (/kanzlei.html → /kanzlei/).
// Funktioniert auch ohne .htaccess, z. B. auf GitHub Pages.
for (const page of pages.filter((p) => p.file)) {
  const to = `${page.file}/`;
  fs.writeFileSync(
    path.join(__dirname, `${page.file}.html`),
    `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>Weiterleitung …</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${to}">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace("${to}" + location.search + location.hash)</script>
</head>
<body><p>Weiter zu <a href="${to}">${page.title}</a>.</p></body>
</html>
`,
    "utf8"
  );
  console.log("↪", `/${page.file}.html → /${to}`);
}

// 404-Seite: wird von beliebiger Tiefe aus angezeigt, daher Basis-Pfad per Script setzen.
// Unbekannte .html-Links werden auf die Ordner-URL umgeleitet.
const notFound = c.layout({
  active: "",
  title: "Seite nicht gefunden | steuerberaterherre",
  description: "Diese Seite gibt es nicht (mehr).",
  body: `${c.pageHero({ plain: true, crumb: "404", eyebrow: "Fehler 404", title: `Seite nicht <span class="script">gefunden.</span>`, lead: "Die gesuchte Seite gibt es nicht (mehr). Vielleicht hilft Ihnen einer dieser Links weiter." })}
<section class="section section--tight">
  <div class="wrap">
    <div class="btn-row">
      <a class="btn" href="{{root}}">Zur Startseite ${c.icon.arrow}</a>
      <a class="btn btn--ghost" href="{{root}}#kontakt">Kontakt aufnehmen</a>
    </div>
  </div>
</section>`,
})
  .replaceAll("{{root}}", "")
  .replace(
    "<head>",
    `<head>
<script>
  // Basis: auf GitHub Pages der Repo-Ordner, sonst die Domain-Wurzel
  (function () {
    var seg = location.pathname.split("/")[1];
    var base = /\\.github\\.io$/.test(location.hostname) && seg ? "/" + seg + "/" : "/";
    var m = location.pathname.match(/^(.*?)(?:\\/index)?\\.html$/);
    if (m && m[1] && m[1] + "/" !== location.pathname) { location.replace(m[1] + "/" + location.search + location.hash); }
    document.write('<base href="' + base + '">');
  })();
</script>`
  );
fs.writeFileSync(path.join(__dirname, "404.html"), notFound, "utf8");
console.log("✓", "/404.html");
