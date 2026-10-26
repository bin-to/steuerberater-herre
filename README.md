# steuerberaterherre – Relaunch

Statische Website (HTML/CSS/JS, kein Framework). Alle Seiten nutzen dasselbe Template.

## Struktur

- `src/components.js` – Layout (Head, Header, Footer) und alle Sektionen (Leistungen, Team/Vita, DATEV-Siegel, Karriere, Kontakt …)
- `src/pages.js` – Seiten: Start, Kanzlei, Privat, Unternehmen, Karriere, Impressum, Datenschutz
- `assets/css/style.css` – Designsystem (Farben, Typo, Komponenten)
- `assets/js/main.js` – Menü, Scroll-Animationen, Vita, Lightbox
- `assets/img`, `assets/docs` – alle Medien der Originalseite (für das Web optimiert)
- `_src/` – Originalseiten als HTML und Bilder in voller Auflösung (nur Referenz, nicht hochladen)

## Befehle

```bash
node build.js   # erzeugt die *.html im Hauptordner neu
node serve.js   # Vorschau unter http://localhost:5173
```

Texte und Inhalte in `src/` ändern, dann `node build.js` ausführen. Zum Hosten reichen die `*.html`-Dateien und `assets/`.

## Vor dem Livegang

- Datenschutzerklärung einsetzen und anpassen (Platzhalter in `src/pages.js`)
- Haftungs-/Urheberrechtsabschnitte im Impressum ergänzen
- Leistungslisten auf Privat/Unternehmen inhaltlich prüfen
- Google Fonts ggf. lokal einbinden (DSGVO)
