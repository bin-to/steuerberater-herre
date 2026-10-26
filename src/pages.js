// Seitendefinitionen: jede Seite nutzt dasselbe Layout und dieselben Bausteine.
const c = require("./components");
const { site, icon, img } = c;

const desc = "steuerberaterherre in Altbach – Ihre Steuerkanzlei für Privatpersonen und Unternehmen. Zuverlässig. Familiär. Unkompliziert.";

const home = {
  file: "",
  active: "home",
  title: "steuerberaterherre – Steuerberater in Altbach | Zuverlässig. Familiär. Unkompliziert.",
  description: desc,
  body: `<section class="hero">
  <div class="hero__media"><img src="${img("0N5A2675-scaled.jpg")}" alt="Kanzleigebäude von steuerberaterherre in Altbach unter Bäumen" fetchpriority="high"></div>
  <img class="hero__stamp" src="${img("stempel.png")}" alt="Stempel: Steuern können wir">
  <div class="wrap">
    <div class="hero__content">
      <p class="eyebrow">Steuerkanzlei in Altbach</p>
      <h1>Steuern<span class="script">können wir.</span></h1>
      <p class="hero__claim"><span>Zuverlässig.</span><span>Familiär.</span><span>Unkompliziert.</span></p>
      <div class="btn-row">
        <a class="btn" href="#kontakt">Kennenlerngespräch vereinbaren ${icon.arrow}</a>
        <a class="btn btn--ghost" href="#leistungen">Unsere Leistungen</a>
      </div>
    </div>
    <div class="hero__facts">
      <div><strong>2005</strong><span>gegründet als HERRE &amp; PARTNER</span></div>
      <div><strong>2 Steuerberater</strong><span>mit Erfahrung aus dem Finanzamt</span></div>
      <div><strong>5 × DATEV</strong><span>Digitale Kanzlei 2021–2025</span></div>
    </div>
  </div>
</section>
${c.services()}
${c.values()}
${c.about()}
${c.team()}
${c.privateBanner()}
${c.digital()}
${c.career()}
${c.rooms()}
${c.contact()}`,
};

const kanzlei = {
  file: "kanzlei",
  active: "kanzlei",
  title: "Kanzlei & Team | steuerberaterherre Altbach",
  description: "Lernen Sie das Team von steuerberaterherre kennen: Stefanie und Ralph Herre und ihr familiäres Team in Altbach.",
  body: `${c.pageHero({
    image: "Slider_Kanzlei_V3-1.jpg",
    crumb: "Kanzlei",
    eyebrow: "Kanzlei",
    title: `Freundlich. Familiär. <span class="script">Kompetent.</span>`,
    lead: "Ein junges Team mit langjähriger Erfahrung aus der Finanzverwaltung – wir kennen beide Seiten.",
  })}
${c.about({ withLink: false })}
${c.team()}
${c.rooms()}
${c.digital({ head: true })}
${c.cta()}`,
};

const privat = {
  file: "privat",
  active: "privat",
  title: "Steuerberatung für Privatpersonen | steuerberaterherre Altbach",
  description: "Wir lassen Sie nicht im Regen stehen: umfassende Steuerberatung für Privatpersonen in Altbach und Umgebung.",
  body: `${c.pageHero({
    image: "privat.jpg",
    crumb: "Privat",
    eyebrow: "Für Privatpersonen",
    title: `Wir lassen Sie nicht im <span class="script">Regen stehen.</span>`,
    lead: "Von der kleinsten Maus bis zum dicksten Elefanten – wir betreuen Sie umfassend in allen privaten Steuerangelegenheiten.",
  })}
<section class="section">
  <div class="wrap split">
    <div class="split__media" data-reveal>
      <img src="${img("StephiRalph.jpg")}" alt="Stefanie und Ralph Herre" loading="lazy">
      <img class="split__badge" src="${img("Icons_herre-01.png")}" alt="" loading="lazy" style="background:var(--ink);padding:22px">
    </div>
    <div data-reveal style="--d:.1s">
      <p class="eyebrow">Privat</p>
      <h2>Ihre Steuern in <span class="hl">guten Händen</span>.</h2>
      <p class="lead">Egal ob einfache Steuererklärung oder komplexe Vermögensfragen: Wir nehmen Ihnen die Arbeit ab und holen das Beste für Sie heraus.</p>
      <ul class="checks">
        <li>Einkommensteuererklärungen für Arbeitnehmer, Rentner und Familien</li>
        <li>Vermietung &amp; Verpachtung, Kapitalerträge</li>
        <li>Prüfung von Steuerbescheiden und Einspruch</li>
        <li>Belege bequem digital über unser Mandantenportal</li>
      </ul>
      <a class="btn" href="${site.phoneHref}">Kostenloses Kennenlerngespräch ${icon.arrow}</a>
    </div>
  </div>
</section>
${c.values()}
${c.cta()}
${c.contact()}`,
};

const unternehmen = {
  file: "unternehmen",
  active: "unternehmen",
  title: "Steuerberatung für Unternehmen – Digitale Kanzlei | steuerberaterherre",
  description: "Digital, modern und doch sehr persönlich: Steuerberatung und Digitalisierung für Unternehmen. Ausgezeichnet als DATEV Digitale Kanzlei.",
  body: `${c.pageHero({
    image: "Unternehmen.jpg",
    crumb: "Unternehmen",
    eyebrow: "Für Unternehmen",
    title: `Digital, modern – und doch <span class="script">sehr persönlich.</span>`,
    lead: "Wir helfen Ihnen bei der Digitalisierung – maßgeschneidert auf Ihr Unternehmen.",
  })}
<section class="section">
  <div class="wrap split">
    <div data-reveal>
      <p class="eyebrow">Unternehmen</p>
      <h2>Weniger Papier. <span class="hl">Mehr Zeit.</span></h2>
      <p class="lead">Die meisten unserer Mandanten arbeiten bereits voll digital – und sind begeistert: weniger Ablage, schnellere Abläufe und mehr Zeit für die wichtigen Dinge.</p>
      <ul class="checks">
        <li>Digitale Finanzbuchhaltung mit DATEV</li>
        <li>Lohn- und Gehaltsabrechnung</li>
        <li>Jahresabschluss und betriebliche Steuern</li>
        <li>Fachberatung für das Gesundheitswesen</li>
      </ul>
      <div class="btn-row">
        <a class="btn" href="${site.portal}" target="_blank" rel="noopener">Zum Mandantenportal ${icon.arrow}</a>
        <a class="btn btn--ghost" href="${site.phoneHref}">Beratung anfragen</a>
      </div>
    </div>
    <div class="split__media" data-reveal style="--d:.1s">
      <img src="${img("0N5A2675-scaled.jpg")}" alt="Kanzleigebäude von steuerberaterherre" loading="lazy">
      <img class="split__badge" src="${img("DATEV_Label_Digitale_Kanzlei_2025_RGB.png")}" alt="DATEV Digitale Kanzlei 2025" loading="lazy">
    </div>
  </div>
</section>
${c.digital({ head: false })}
${c.cta({ title: "Interesse geweckt?", text: "Wir registrieren Sie für unser Mandantenportal und begleiten Sie Schritt für Schritt." })}
${c.contact()}`,
};

const karriere = {
  file: "karriere",
  active: "karriere",
  title: "Karriere – Jobs bei steuerberaterherre in Altbach",
  description: "Lust auf Veränderung? Moderner Arbeitsplatz, tolles Team, flexible Arbeitszeiten. Jetzt bei steuerberaterherre bewerben.",
  body: `${c.pageHero({
    image: "Karriere.jpg",
    crumb: "Karriere",
    eyebrow: "Karriere",
    title: `Karriere bei uns – <span class="script">jetzt bewerben.</span>`,
    lead: "Moderne Arbeitsplätze, ein tolles Team und echte Perspektiven – werde Teil von steuerberaterherre.",
  })}
<section class="section section--tight">
  <div class="wrap">
    <div class="wide-img" data-reveal><img src="${img("AZ_Azubi_Slider_homepage_NEU_2-scaled.jpg")}" alt="Lust auf Veränderung? Wir suchen Steuerberater, Steuerfachwirt und Steuerfachangestellte (m/w/d). Jetzt bewerben!"></div>
  </div>
</section>
${c.career()}
${c.cta({ title: "Fragen zur Bewerbung?", text: "Ruf uns einfach an oder schreib uns eine E-Mail." })}`,
};

const legal = require("./legal");

module.exports = [home, kanzlei, privat, unternehmen, karriere, legal.impressum, legal.datenschutz, legal.agb];
