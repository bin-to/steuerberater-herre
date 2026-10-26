// Gemeinsame Bausteine: Layout (Head, Header, Footer) und wiederverwendbare Sektionen.
// Jede Seite in src/pages.js setzt sich aus diesen Funktionen zusammen.

const site = {
  name: "steuerberaterherre",
  phone: "07153 9 22 69-0",
  phoneHref: "tel:+4971539226900",
  fax: "07153 9 22 69-99",
  mail: "kanzlei@steuerberaterherre.de",
  street: "Esslinger Str. 26",
  city: "73776 Altbach",
  portal: "https://steuerberaterherre.online/Login",
  maps: "https://www.google.com/maps/search/?api=1&query=Esslinger+Str.+26%2C+73776+Altbach",
};

const nav = [
  { href: "index.html", label: "Start", key: "home" },
  { href: "privat.html", label: "Privat", key: "privat" },
  { href: "unternehmen.html", label: "Unternehmen", key: "unternehmen" },
  { href: "kanzlei.html", label: "Kanzlei", key: "kanzlei" },
  { href: "karriere.html", label: "Karriere", key: "karriere" },
];

const seals = [
  { src: "Signet_Digitale_Kanzlei_2021_RGB.png", year: 2021 },
  { src: "Signet_Digitale_Kanzlei_2022_RGB.png", year: 2022 },
  { src: "Signet_Digitale_Kanzlei_2023_RGB.png", year: 2023 },
  { src: "DATEV_Label_Digitale_Kanzlei_2024_RGB1.png", year: 2024 },
  { src: "DATEV_Label_Digitale_Kanzlei_2025_RGB.png", year: 2025 },
];

const img = (file) => `assets/img/${file}`;

const icon = {
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`,
  up: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>`,
  laptop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>`,
  team: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.7 5 5.8"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  train: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l-2-4M15 21l2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/></svg>`,
};

/* ---------------------------------------------------------------- Layout */

function head({ title, description }) {
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#1b1c1a">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="assets/img/0N5A2675-scaled.jpg">
<link rel="icon" href="assets/img/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="assets/img/favicon.png">
<link rel="preload" href="assets/fonts/titillium-web-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/titillium-web-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/style.css">
<script>document.documentElement.classList.add("js")</script>
</head>`;
}

function header(active) {
  const links = nav
    .map((n) => `<a href="${n.href}"${n.key === active ? ' aria-current="page"' : ""}>${n.label}</a>`)
    .join("\n        ");
  return `<a class="skip" href="#main">Zum Inhalt springen</a>
<div class="topbar">
  <div class="wrap">
    <a href="${site.phoneHref}">${icon.phone}${site.phone}</a>
    <a href="mailto:${site.mail}">${icon.mail}${site.mail}</a>
  </div>
</div>
<header class="header">
  <div class="wrap">
    <a class="logo" href="index.html" aria-label="steuerberaterherre – zur Startseite">
      <img src="${img("Steuerberaterherre_Logo.png")}" alt="steuerberaterherre" width="300" height="32">
    </a>
    <button class="burger" aria-label="Menü öffnen" aria-expanded="false" aria-controls="nav"><span></span></button>
    <nav class="nav" id="nav" aria-label="Hauptnavigation">
        ${links}
        <a class="btn" href="index.html#kontakt">Kontakt ${icon.arrow}</a>
    </nav>
  </div>
</header>`;
}

function footer() {
  const year = new Date().getFullYear();
  return `<footer class="footer">
  <div class="wrap">
    <div class="footer__grid">
      <div class="footer__brand">
        <img class="logo-f" src="${img("Steuerberaterherre_Logo.png")}" alt="steuerberaterherre" width="300" height="32" loading="lazy">
        <p>Ihre Steuerkanzlei in Altbach – zuverlässig, familiär und unkompliziert. Für Privatpersonen und Unternehmen.</p>
        <div class="footer__seals">
          ${seals.map((s) => `<img src="${img(s.src)}" alt="DATEV Digitale Kanzlei ${s.year}" loading="lazy" width="64" height="61">`).join("\n          ")}
        </div>
      </div>
      <div>
        <h4>Navigation</h4>
        <ul>
          ${nav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("\n          ")}
          <li><a href="${site.portal}" target="_blank" rel="noopener">Mandantenportal</a></li>
        </ul>
      </div>
      <div>
        <h4>Kontakt</h4>
        <ul>
          <li>${site.street}<br>${site.city}</li>
          <li><a href="${site.phoneHref}">Tel. ${site.phone}</a></li>
          <li><a href="mailto:${site.mail}">${site.mail}</a></li>
        </ul>
      </div>
      <div>
        <h4>Rechtliches</h4>
        <ul>
          <li><a href="impressum.html">Impressum</a></li>
          <li><a href="datenschutz.html">Datenschutz</a></li>
          <li><a href="agb.html">AGB</a></li>
          <li><a href="assets/docs/Pflichtinformationen_gem.-DS_GVO_Mandanten-1.pdf" target="_blank" rel="noopener">DSGVO-Infos Mandanten (PDF)</a></li>
          <li><a href="assets/docs/09_Pflichtinformationen_gem.-DS_GVO_Mitarbeiter_Bewerber-1.pdf" target="_blank" rel="noopener">DSGVO-Infos Bewerber (PDF)</a></li>
        </ul>
      </div>
      <div class="footer__seal">
        <img class="footer__stamp" src="${img("stempel.png")}" alt="Stempel: Steuern können wir – steuerberaterherre" width="365" height="343" loading="lazy">
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${year} Stefanie Herre · steuerberaterherre<span class="footer__credit"> · Made by <a href="https://bin-to.de" target="_blank" rel="noopener">bin-to</a></span></span>
      <nav class="footer__legal" aria-label="Rechtliches">
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
        <a href="agb.html">AGB</a>
      </nav>
    </div>
  </div>
</footer>
<button class="to-top" aria-label="Nach oben">${icon.up}</button>
<dialog class="lightbox" aria-label="Bildansicht">
  <button class="lightbox__close" aria-label="Schließen">×</button>
  <img src="" alt="">
  <p class="lightbox__cap"></p>
</dialog>
<script src="assets/js/main.js" defer></script>
</body>
</html>`;
}

// Einheitliches Seiten-Template: jede Seite = head + header + main + footer
function layout({ title, description, active, body }) {
  return `${head({ title, description })}
<body>
${header(active)}
<main id="main">
${body}
</main>
${footer()}
`;
}

/* ------------------------------------------------------------- Sektionen */

// Seitenkopf für Unterseiten (Bild-Banner, Breadcrumb, Titel)
function pageHero({ image, eyebrow, title, lead, crumb, plain }) {
  return `<section class="page-hero${plain ? " page-hero--plain" : ""}">
  ${image ? `<div class="page-hero__media"><img src="${img(image)}" alt="" fetchpriority="high"></div>` : ""}
  <div class="wrap">
    <nav class="crumbs" aria-label="Brotkrumen"><a href="index.html">Start</a><span aria-hidden="true">/</span><span>${crumb}</span></nav>
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
    <h1>${title}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ""}
  </div>
</section>`;
}

function services() {
  return `<section class="section" id="leistungen">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Unsere Leistungen</p>
      <h2>Für jeden das <span class="hl">passende Paket</span>.</h2>
      <p class="lead">Ob Einkommensteuererklärung, Lohnbuchhaltung oder Jahresabschluss – wir kümmern uns, Sie haben den Kopf frei.</p>
    </div>
    <div class="bento">
      <a class="tile tile--a" href="privat.html" data-reveal>
        <div class="tile__bg"><img src="${img("privat.jpg")}" alt="" loading="lazy"></div>
        <img class="tile__icon" src="${img("Icons_herre-01.png")}" alt="" width="64" height="64">
        <h3>Privat</h3>
        <p>Von der kleinsten Maus bis zum dicksten Elefanten – wir lassen niemanden im Regen stehen.</p>
        <span class="tile__more">Mehr erfahren ${icon.arrow}</span>
      </a>
      <a class="tile tile--b" href="unternehmen.html" data-reveal style="--d:.1s">
        <div class="tile__bg"><img src="${img("Unternehmen.jpg")}" alt="" loading="lazy"></div>
        <img class="tile__icon" src="${img("Icons_herre-02.png")}" alt="" width="64" height="64">
        <h3>Unternehmen</h3>
        <p>Digital, modern und trotzdem persönlich – maßgeschneidert für Ihren Betrieb.</p>
        <span class="tile__more">Mehr erfahren ${icon.arrow}</span>
      </a>
      <a class="tile tile--c tile--lime tile--stamp" href="kanzlei.html" data-reveal>
        <img class="tile__deco" src="${img("stempel.png")}" alt="">
        <img class="tile__icon" src="${img("Icons_herre-04.png")}" alt="" width="64" height="64">
        <h3>Kanzlei</h3>
        <p>Lernen Sie uns kennen: ein junges, familiäres Team mit Erfahrung aus der Finanzverwaltung.</p>
        <span class="tile__more">Team &amp; Räume ${icon.arrow}</span>
      </a>
      <a class="tile tile--d" href="karriere.html" data-reveal style="--d:.1s">
        <div class="tile__bg"><img src="${img("Karriere.jpg")}" alt="" loading="lazy"></div>
        <img class="tile__icon" src="${img("Icons_herre-03.png")}" alt="" width="64" height="64">
        <h3>Karriere</h3>
        <p>Lust auf Veränderung? Wir suchen Steuerberater, Steuerfachwirte und Steuerfachangestellte (m/w/d).</p>
        <span class="tile__more">Jetzt bewerben ${icon.arrow}</span>
      </a>
    </div>
  </div>
</section>`;
}

function values() {
  const items = [
    ["Zuverlässig", "Fristen, Bescheide, Rückfragen – bei uns bleibt nichts liegen. Sie wissen jederzeit, woran Sie sind."],
    ["Familiär", "Feste Ansprechpartner, kurze Wege und ein Team, das Sie und Ihre Geschichte kennt."],
    ["Unkompliziert", "Belege digital hochladen, Fragen schnell klären – wir machen Steuern so einfach wie möglich."],
  ];
  return `<section class="section section--tight">
  <div class="wrap">
    <div class="values">
      ${items
        .map(
          ([t, d], i) => `<article class="value" data-reveal style="--d:${i * 0.1}s">
        <span class="value__num">0${i + 1}</span>
        <h3>${t}.</h3>
        <p>${d}</p>
      </article>`
        )
        .join("\n      ")}
    </div>
  </div>
</section>`;
}

function about({ withLink = true } = {}) {
  return `<section class="section" id="kanzlei">
  <div class="wrap split">
    <div class="split__media" data-reveal>
      <img src="${img("StephiRalph.jpg")}" alt="Stefanie und Ralph Herre, Kanzleileitung" loading="lazy">
      <p class="split__quote">Wir kennen <strong>beide Seiten</strong> – die der Finanzverwaltung und Ihre.</p>
      <img class="split__badge" src="${img("stempel.png")}" alt="" loading="lazy">
    </div>
    <div data-reveal style="--d:.1s">
      <p class="eyebrow">Über uns</p>
      <h2>Freundlich. Familiär. <span class="hl">Kompetent.</span></h2>
      <p class="lead">Unser junges, familiäres Team besteht aus Steuerberatern, Bachelor of Arts, Steuerfachangestellten und weiteren hoch qualifizierten Kolleginnen und Kollegen.</p>
      <p>Jede und jeder bei uns hat ein eigenes Fachgebiet – so landet Ihr Anliegen immer bei der richtigen Person. Durch unsere langjährige Tätigkeit in der Finanzverwaltung, in der Veranlagung und als Betriebsprüfer, wissen wir, wie das Finanzamt denkt. Für unsere Mandantinnen und Mandanten ist das immer wieder ein echter Vorteil.</p>
      <ul class="checks">
        <li>Zwei Steuerberater mit Erfahrung aus Veranlagung und Betriebsprüfung</li>
        <li>Fachberater Gesundheitswesen (IBG/HS Bremerhaven)</li>
        <li>Seit 2021 jedes Jahr als DATEV Digitale Kanzlei ausgezeichnet</li>
      </ul>
      ${withLink ? `<a class="link-arrow" href="kanzlei.html">Mehr über die Kanzlei ${icon.arrow}</a>` : ""}
    </div>
  </div>
</section>`;
}

const vitas = {
  sh: {
    name: "Stefanie Herre",
    role: "Steuerberaterin / Dipl.-Finanzwirtin (FH)",
    sub: "Kanzleileitung",
    photo: "SteffiHerre.jpg",
    image: "Zeitstrahl_vita_SH-scaled.jpg",
    steps: [
      ["1995 – 1998", "Studium an der Fachhochschule Ludwigsburg, Hochschule für Finanzen"],
      ["10/1998", "Abschluss: Dipl.-Finanzwirtin (FH)"],
      ["ab 10/1998", "Sachbearbeiterin beim Finanzamt Esslingen"],
      ["1999 – 3/2005", "Betriebsprüferin beim Finanzamt Esslingen"],
      ["04/2002", "Abschluss: Steuerberaterexamen"],
      ["bis 12/2004", "Dozentin und Mitglied des Prüfungsausschusses der IHK Ludwigsburg für Buchführung/Bilanzierung der Bilanzbuchhaltung"],
      ["ab 04/2005", "Selbständige Steuerberaterin"],
      ["06/2005", "Gründung HERRE & PARTNER StBG"],
      ["ab 2007", "Dozentin der Steuerberaterkammer Stuttgart und Mitglied des Prüfungsausschusses für Fortbildungsprüfungen zum Steuerfachwirt/in"],
      ["2018", "Aus HERRE & PARTNER StBG wird steuerberaterherre"],
    ],
  },
  rh: {
    name: "Ralph Herre",
    role: "Steuerberater / Dipl.-Finanzwirt (FH)",
    sub: "Kanzleileitung · Fachberater Gesundheitswesen (IBG/HS Bremerhaven)",
    photo: "RalphHerre.jpg",
    image: "Zeitstrahl_vita_RH-scaled.jpg",
    steps: [
      ["1993 – 1996", "Studium an der Fachhochschule Ludwigsburg, Hochschule für Finanzen"],
      ["10/1996", "Abschluss: Dipl.-Finanzwirt (FH)"],
      ["1996 – 1997", "Sachbearbeiter Veranlagung beim Finanzamt Donaueschingen und beim Finanzamt Karlsruhe-Durlach"],
      ["01/1998 – 05/2002", "Betriebsprüfer bei der BP-Hauptstelle des Finanzamts Stuttgart I"],
      ["02/2002", "Abschluss: Steuerberaterexamen"],
      ["06/2002 – 12/2002", "Angestellter Steuerberater"],
      ["05/2005", "Selbständiger Steuerberater"],
      ["06/2005", "Gründung HERRE & PARTNER StBG"],
      ["seit 2010", "Referent für die DATEV eG"],
      ["seit 2012", "Mitglied der Vertreterversammlung der DATEV eG"],
      ["2018", "Aus HERRE & PARTNER StBG wird steuerberaterherre"],
    ],
  },
};

function team() {
  const card = (id, v, i) => `<article class="person" data-reveal style="--d:${i * 0.1}s">
        <div class="person__img"><img src="${img(v.photo)}" alt="${v.name}" loading="lazy"></div>
        <div>
          <h3>${v.name}</h3>
          <p class="person__role">${v.role}</p>
          <p class="person__sub">${v.sub}</p>
          <button class="person__btn" aria-expanded="false" aria-controls="vita-${id}">Werdegang ansehen ${icon.chevron}</button>
        </div>
      </article>`;
  const vita = (id, v) => `<div class="vita" id="vita-${id}">
      <div class="vita__head">
        <h3>Werdegang <span>${v.name}</span></h3>
        <button class="btn btn--ghost" data-lightbox="${img(v.image)}" data-caption="Zeitstrahl ${v.name}">Als Grafik ansehen</button>
      </div>
      <ol class="timeline">
        ${v.steps.map(([t, d]) => `<li><time>${t}</time><span>${d}</span></li>`).join("\n        ")}
      </ol>
    </div>`;
  return `<section class="section dark chalk--mark chalk" id="team">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Kanzleileitung</p>
      <h2>Die Köpfe hinter <span class="script">steuerberaterherre</span></h2>
      <p class="lead">Beide haben jahrelang auf der anderen Seite des Schreibtischs gesessen – in Veranlagung und Betriebsprüfung. Davon profitieren Sie heute.</p>
    </div>
    <div class="team">
      ${card("sh", vitas.sh, 0)}
      ${card("rh", vitas.rh, 1)}
    </div>
    ${vita("sh", vitas.sh)}
    ${vita("rh", vitas.rh)}
  </div>
</section>`;
}

function rooms() {
  return `<section class="section">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Unsere Räume</p>
      <h2>Willkommen in der <span class="hl">Esslinger Straße 26</span>.</h2>
      <p class="lead">Helle, moderne Räume in Altbach – mit Parkplätzen direkt vor der Tür und bester Verkehrsanbindung.</p>
    </div>
    <button class="wide-img" data-reveal data-lightbox="${img("Slider_Kanzlei_V3-1.jpg")}" data-caption="Kanzleigebäude und Empfang" style="border:0;padding:0;background:none;display:block;width:100%">
      <img src="${img("Slider_Kanzlei_V3-1.jpg")}" alt="Kanzleigebäude von außen und Empfangsbereich" loading="lazy">
    </button>
  </div>
</section>`;
}

function privateBanner() {
  return `<section class="section">
  <div class="wrap">
    <div class="banner" data-reveal>
      <img src="${img("privat.jpg")}" alt="Ein Elefant hält schützend einen Schirm über eine Maus" loading="lazy">
      <div class="banner__body">
        <p class="eyebrow">Für Privatpersonen</p>
        <h2>Von der kleinsten Maus bis zum dicksten Elefanten.</h2>
        <p>Wir lassen niemanden im Regen stehen und betreuen Sie umfassend in allen privaten Steuerangelegenheiten.</p>
        <div class="btn-row"><a class="btn" href="privat.html">Leistungen für Privat ${icon.arrow}</a></div>
      </div>
    </div>
  </div>
</section>`;
}

function digital({ head = true } = {}) {
  return `<section class="section" id="digital">
  <div class="wrap">
    ${
      head
        ? `<div class="section-head" data-reveal>
      <p class="eyebrow">Digitale Kanzlei</p>
      <h2>Weniger Papier. <span class="hl">Mehr Zeit</span> für das Wesentliche.</h2>
      <p class="lead">Wir begleiten Sie bei der Digitalisierung – maßgeschneidert auf Ihr Unternehmen. Die meisten unserer Mandanten arbeiten bereits voll digital und möchten es nicht mehr anders.</p>
    </div>`
        : ""
    }
    <div class="seals">
      ${seals
        .map(
          (s, i) => `<figure class="seal${i === seals.length - 1 ? " seal--new" : ""}" data-reveal style="--d:${i * 0.06}s">
        <img src="${img(s.src)}" alt="DATEV Label Digitale Kanzlei ${s.year}" loading="lazy" width="480" height="455">
        <figcaption>${s.year}</figcaption>
      </figure>`
        )
        .join("\n      ")}
    </div>
    <div class="portal" data-reveal>
      <div>
        <p class="eyebrow">Mandantenportal</p>
        <h3>Unkomplizierte Kommunikation – rund um die Uhr.</h3>
        <p>Mandantendaten aktualisieren, Dokumente und Belege bequem hochladen: alles an einem Ort, sicher und papierlos.</p>
        <p class="portal__url">steuerberaterherre.online</p>
      </div>
      <div class="portal__actions">
        <a class="btn" href="${site.portal}" target="_blank" rel="noopener">Zum Portal ${icon.arrow}</a>
        <a class="btn btn--ghost" href="${site.phoneHref}">Interesse? Wir registrieren Sie!</a>
      </div>
    </div>
  </div>
</section>`;
}

function career({ head = true } = {}) {
  const benefits = [
    [icon.laptop, "Moderner, digitaler Arbeitsplatz"],
    [icon.team, "Tolles Team"],
    [icon.book, "Umfangreiches Fortbildungsangebot"],
    [icon.clock, "Flexible Arbeitszeiten"],
    [icon.train, "Beste Verkehrsanbindung"],
  ];
  const photos = [
    ["Flur400x300.jpg", "Flur"],
    ["Konferenzraum400x300.jpg", "Konferenzraum"],
    ["Konfi400x300.jpg", "Besprechungsraum"],
    ["Arbeitsplatz400x300.jpg", "Arbeitsplatz"],
  ];
  return `<section class="section dark" id="karriere">
  <div class="wrap stack">
    ${
      head
        ? `<div class="section-head" data-reveal style="margin-bottom:0">
      <img src="${img("Icons_herre-10.png")}" alt="Dein Start in die Zukunft mit uns!" width="260" style="width:clamp(180px,22vw,260px);margin-bottom:12px" loading="lazy">
      <h2>Was erwartet dich bei uns?</h2>
      <p class="lead">Wir sind immer auf der Suche nach engagierten Menschen – bewirb dich gern auch initiativ, wenn deine Stelle gerade nicht ausgeschrieben ist.</p>
    </div>`
        : ""
    }
    <div class="benefits">
      ${benefits.map(([ic, t], i) => `<div class="benefit" data-reveal style="--d:${i * 0.06}s">${ic}<strong>${t}</strong></div>`).join("\n      ")}
    </div>
    <div class="gallery" data-reveal>
      ${photos
        .map(([f, a]) => `<button data-lightbox="${img(f)}" data-caption="${a}" aria-label="${a} vergrößern"><img src="${img(f)}" alt="${a}" loading="lazy"></button>`)
        .join("\n      ")}
    </div>
    <div class="job" data-reveal>
      <div>
        <img class="job__start job__start--dark" src="${img("Icons_herre-10.png")}" alt="" loading="lazy">
        <h3 style="font-size:clamp(1.6rem,2.6vw,2.2rem)">Lust auf <span class="script" style="font-size:1.4em">Veränderung?</span></h3>
        <p>Wir suchen Verstärkung für unser Team:</p>
        <ul class="tags"><li>Steuerberater</li><li>Steuerfachwirt</li><li>Steuerfachangestellter</li><li>Azubis</li><li>(m/w/d)</li></ul>
        <div class="btn-row">
          <a class="btn btn--dark" href="mailto:${site.mail}?subject=Bewerbung">Jetzt bewerben ${icon.arrow}</a>
          <button class="btn btn--ghost" style="color:var(--ink)" data-lightbox="${img("AZ_Azubi_185x135mm_final.jpg")}" data-caption="Stellenausschreibung">Stellenausschreibung</button>
        </div>
      </div>
      <button class="job__img" data-lightbox="${img("AZ_Azubi_185x135mm_final.jpg")}" data-caption="Stellenausschreibung" aria-label="Stellenausschreibung vergrößern">
        <img src="${img("AZ_Azubi_185x135mm_final.jpg")}" alt="Stellenanzeige: Lust auf Veränderung? Wir suchen Steuerberater, Steuerfachwirt und Steuerfachangestellte" loading="lazy">
      </button>
    </div>
  </div>
</section>`;
}

function contact() {
  return `<section class="section dark chalk" id="kontakt">
  <div class="wrap contact">
    <div data-reveal>
      <p class="eyebrow">Kontakt</p>
      <h2>Rufen Sie uns an <span class="script">– wir freuen uns!</span></h2>
      <p class="lead">Vereinbaren Sie ein kostenloses Kennenlerngespräch. Persönlich in Altbach, telefonisch oder per Video.</p>
      <img class="contact__stamp" src="${img("stempel.png")}" alt="Stempel: Steuern können wir" loading="lazy">
    </div>
    <div class="contact-cards">
      <a class="contact-card" href="${site.phoneHref}" data-reveal>
        <img src="${img("Icons_herre-07.png")}" alt="" loading="lazy">
        <div><small>Telefon</small><strong>${site.phone}</strong></div>
      </a>
      <a class="contact-card" href="mailto:${site.mail}" data-reveal style="--d:.08s">
        <img src="${img("Icons_herre-08.png")}" alt="" loading="lazy">
        <div><small>E-Mail</small><strong>${site.mail}</strong></div>
      </a>
      <a class="contact-card" href="${site.maps}" target="_blank" rel="noopener" data-reveal style="--d:.16s">
        <img src="${img("Icons_herre-06.png")}" alt="" loading="lazy">
        <div><small>Adresse · Route planen</small><strong>${site.street}, ${site.city}</strong></div>
      </a>
    </div>
  </div>
</section>`;
}

function cta({ title = "Kostenloses Kennenlerngespräch", text = "Rufen Sie uns an – wir nehmen uns Zeit für Sie." } = {}) {
  return `<section class="section section--tight">
  <div class="wrap">
    <div class="cta" data-reveal>
      <img class="cta__icon" src="${img("Icons_herre-07.png")}" alt="">
      <div><h2>${title}</h2><p>${text}</p></div>
      <a class="btn btn--dark" href="${site.phoneHref}">${icon.phone} ${site.phone}</a>
    </div>
  </div>
</section>`;
}

module.exports = {
  site, img, icon, layout, pageHero, services, values, about, team, rooms,
  privateBanner, digital, career, contact, cta,
};
