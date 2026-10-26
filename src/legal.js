// Rechtstexte: Impressum, Datenschutzerklärung, AGB.
// Stand und Platzhalter (z. B. Hosting-Anbieter) vor dem Livegang prüfen.
const c = require("./components");
const { site, icon } = c;

const stand = "Oktober 2026";
const docs = {
  agb: "{{root}}assets/docs/AGBs.pdf",
  mandanten: "{{root}}assets/docs/Pflichtinformationen_gem.-DS_GVO_Mandanten-1.pdf",
  bewerber: "{{root}}assets/docs/09_Pflichtinformationen_gem.-DS_GVO_Mitarbeiter_Bewerber-1.pdf",
};

const slug = (s) =>
  s.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Einheitlicher Aufbau aller Rechtsseiten: Inhaltsverzeichnis links (sticky), Abschnitte als Karten rechts
function legalPage({ intro = "", sections, aside = "" }) {
  const toc = sections.map(([h], i) => `<li><a href="#${slug(h)}"><span>${String(i + 1).padStart(2, "0")}</span>${h}</a></li>`).join("\n          ");
  const body = sections
    .map(([h, html], i) => `<section class="legal__block" id="${slug(h)}">
        <h2><span>${String(i + 1).padStart(2, "0")}</span>${h}</h2>
        ${html}
      </section>`)
    .join("\n      ");
  return `<section class="section legal-wrap">
  <div class="wrap legal">
    <aside class="legal__aside">
      <nav class="legal__toc" aria-label="Inhalt">
        <p class="legal__toc-title">Inhalt</p>
        <ol>
          ${toc}
        </ol>
      </nav>
      ${aside}
    </aside>
    <div class="legal__content prose">
      ${intro}
      ${body}
      <p class="legal__stand">Stand: ${stand}</p>
    </div>
  </div>
</section>`;
}

const docBox = `<div class="legal__docs">
        <p class="legal__toc-title">Downloads</p>
        <a href="${docs.agb}" target="_blank" rel="noopener"><span class="pdf">PDF</span>Allgemeine Geschäftsbedingungen</a>
        <a href="${docs.mandanten}" target="_blank" rel="noopener"><span class="pdf">PDF</span>Pflichtinformationen Mandanten</a>
        <a href="${docs.bewerber}" target="_blank" rel="noopener"><span class="pdf">PDF</span>Pflichtinformationen Mitarbeiter &amp; Bewerber</a>
      </div>`;

/* ------------------------------------------------------------------ Impressum */

const impressum = {
  file: "impressum",
  active: "",
  title: "Impressum | steuerberaterherre",
  description: "Impressum von steuerberaterherre – Stefanie Herre, Steuerberaterin, Esslinger Str. 26, 73776 Altbach.",
  body: `${c.pageHero({ plain: true, crumb: "Impressum", eyebrow: "Rechtliches", title: "Impressum", lead: "Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz (DDG) und Angaben nach der Dienstleistungs-Informationspflichten-Verordnung (DL-InfoV)." })}
${legalPage({
  aside: docBox,
  sections: [
    ["Anbieterin", `<p><strong>Stefanie Herre</strong><br>Steuerberaterin, Dipl.-Finanzwirtin (FH)<br>steuerberaterherre<br>${site.street}<br>${site.city}<br>Deutschland</p>`],
    ["Kontakt", `<dl class="facts">
          <dt>Telefon</dt><dd><a href="${site.phoneHref}">+49 7153 92269-0</a></dd>
          <dt>Telefax</dt><dd>+49 7153 92269-99</dd>
          <dt>E-Mail</dt><dd><a href="mailto:${site.mail}">${site.mail}</a></dd>
        </dl>`],
    ["Umsatzsteuer-ID", `<p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br><strong>DE815788892</strong></p>`],
    ["Berufsrechtliche Angaben", `<dl class="facts">
          <dt>Gesetzliche Berufsbezeichnung</dt><dd>Steuerberaterin / Steuerberater, verliehen in der Bundesrepublik Deutschland (Baden-Württemberg)</dd>
          <dt>Zuständige Kammer</dt><dd>Steuerberaterkammer Stuttgart, Körperschaft des öffentlichen Rechts<br>Hegelstraße 33, 70174 Stuttgart<br><a href="https://www.stbk-stuttgart.de" target="_blank" rel="noopener">www.stbk-stuttgart.de</a></dd>
          <dt>Zuständige Aufsichtsbehörde</dt><dd>Steuerberaterkammer Stuttgart (Anschrift wie oben)</dd>
        </dl>
        <p>Für Steuerberater gelten insbesondere folgende berufsrechtliche Regelungen:</p>
        <ul>
          <li>Steuerberatungsgesetz (StBerG)</li>
          <li>Durchführungsverordnung zum Steuerberatungsgesetz (DVStB)</li>
          <li>Berufsordnung der Bundessteuerberaterkammer (BOStB)</li>
          <li>Steuerberatervergütungsverordnung (StBVV)</li>
        </ul>
        <p>Die Regelungen können bei der <a href="https://www.bstbk.de" target="_blank" rel="noopener">Bundessteuerberaterkammer</a> (Rubrik Berufsrecht) sowie bei der Steuerberaterkammer Stuttgart eingesehen werden.</p>`],
    ["Berufshaftpflichtversicherung", `<dl class="facts">
          <dt>Versicherer</dt><dd>Allianz Versicherungs-AG, 10900 Berlin</dd>
          <dt>Räumlicher Geltungsbereich</dt><dd>Tätigkeitsort der Berufsträger</dd>
          <dt>Versicherungssumme</dt><dd>1.000.000 EUR je Versicherungsfall, Jahreshöchstleistung 4.000.000 EUR</dd>
        </dl>`],
    ["Vergütung", `<p>Die Vergütung für Steuerberatungsleistungen richtet sich grundsätzlich nach der Steuerberatervergütungsverordnung (StBVV). Die Gebühren hängen überwiegend vom Gegenstandswert und damit von den Umständen des Einzelfalls ab (§ 11 StBVV), sodass sich keine festen Preise im Voraus nennen lassen. Abweichende Vereinbarungen in Textform sind im Rahmen der StBVV möglich. Gerne erstellen wir Ihnen vorab eine unverbindliche Kosteneinschätzung.</p>`],
    ["Allgemeine Geschäftsbedingungen", `<p>Für unsere Aufträge gelten unsere <a href="{{root}}agb/">Allgemeinen Geschäftsbedingungen</a>, soweit nichts anderes in Textform vereinbart ist.</p>`],
    ["Verbraucherstreitbeilegung", `<p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).</p>`],
    ["Haftung für Inhalte", `<p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Sie dienen der allgemeinen Information und ersetzen keine individuelle steuerliche Beratung. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Als Diensteanbieterin sind wir für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Eine Pflicht, übermittelte oder gespeicherte fremde Informationen zu überwachen, besteht nicht.</p>`],
    ["Haftung für Links", `<p>Diese Website enthält Links zu Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist stets der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Werden uns Rechtsverletzungen bekannt, entfernen wir die betreffenden Links umgehend.</p>`],
    ["Urheberrecht", `<p>Texte, Fotos, Grafiken und Logos auf dieser Website unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung. Die Labels „Digitale Kanzlei“ sind Auszeichnungen der DATEV eG.</p>`],
    ["Kommunikation per E-Mail", `<p>Unverschlüsselte E-Mails können auf dem Übertragungsweg von Dritten gelesen werden. Wenn Sie uns per E-Mail schreiben, gehen wir davon aus, dass wir Ihnen ebenfalls per E-Mail antworten dürfen. Möchten Sie das nicht, teilen Sie uns bitte einen anderen Kommunikationsweg mit. Für vertrauliche Unterlagen empfehlen wir unser <a href="${site.portal}" target="_blank" rel="noopener">Mandantenportal</a>.</p>`],
  ],
})}`,
};

/* -------------------------------------------------------------- Datenschutz */

const datenschutz = {
  file: "datenschutz",
  active: "",
  title: "Datenschutzerklärung | steuerberaterherre",
  description: "Datenschutzerklärung von steuerberaterherre: welche Daten wir beim Besuch dieser Website verarbeiten und welche Rechte Sie haben.",
  body: `${c.pageHero({ plain: true, crumb: "Datenschutz", eyebrow: "Rechtliches", title: "Datenschutz&shy;erklärung", lead: "Verschwiegenheit ist unser Beruf. Hier erfahren Sie, welche personenbezogenen Daten wir beim Besuch dieser Website verarbeiten – und welche nicht." })}
${legalPage({
  aside: docBox,
  intro: `<div class="legal__summary">
        <p class="legal__toc-title">Auf einen Blick</p>
        <ul class="checks">
          <li>Keine Cookies, kein Tracking, keine Analyse-Tools</li>
          <li>Keine Social-Media-Plugins und keine eingebetteten Karten</li>
          <li>Schriften werden lokal geladen – keine Verbindung zu Google</li>
          <li>Verschlüsselte Übertragung per TLS (HTTPS)</li>
        </ul>
      </div>`,
  sections: [
    ["Verantwortliche Stelle", `<p>Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
        <p><strong>Stefanie Herre</strong>, Steuerberaterin – steuerberaterherre<br>${site.street}, ${site.city}<br>Telefon: <a href="${site.phoneHref}">${site.phone}</a><br>E-Mail: <a href="mailto:${site.mail}">${site.mail}</a></p>`],
    ["Datenschutzbeauftragter", `<p>Unseren externen Datenschutzbeauftragten erreichen Sie unter der oben genannten Anschrift mit dem Zusatz „z. Hd. Datenschutzbeauftragter“ oder direkt:</p>
        <p>Lutz Voswinkel, DATEV eG<br>Hansaallee 101, 40549 Düsseldorf<br>E-Mail: <a href="mailto:lutz.voswinkel@datev.de">lutz.voswinkel@datev.de</a></p>`],
    ["Hosting und Server-Logfiles", `<p>Diese Website wird bei <strong>[Name und Anschrift des Hosting-Anbieters]</strong> betrieben. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.</p>
        <p>Bei jedem Aufruf der Website verarbeitet der Server automatisch folgende Daten, die Ihr Browser übermittelt:</p>
        <ul>
          <li>IP-Adresse des anfragenden Geräts</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>übertragene Datenmenge und HTTP-Statuscode</li>
          <li>Browsertyp, Betriebssystem und Referrer-URL</li>
        </ul>
        <p>Die Verarbeitung ist erforderlich, um die Website auszuliefern und ihre Sicherheit und Stabilität zu gewährleisten. Rechtsgrundlage ist unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO. Die Logfiles werden nach spätestens 14 Tagen gelöscht, sofern sie nicht zur Aufklärung eines konkreten Sicherheitsvorfalls länger benötigt werden. Eine Zusammenführung mit anderen Datenquellen findet nicht statt.</p>`],
    ["TLS-Verschlüsselung", `<p>Aus Sicherheitsgründen nutzt diese Website eine TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ und dem Schloss-Symbol in der Adresszeile Ihres Browsers.</p>`],
    ["Cookies und Tracking", `<p>Diese Website setzt <strong>keine Cookies</strong>. Wir verwenden keine Analyse-, Tracking- oder Werbedienste und erstellen keine Nutzungsprofile.</p>
        <p>Einzige Ausnahme: Wenn Sie den Hinweis „Keine Cookies, kein Tracking“ mit „Verstanden“ schließen, wird dies im lokalen Speicher Ihres Browsers (localStorage) vermerkt, damit der Hinweis nicht bei jedem Seitenaufruf erneut erscheint. Der Eintrag enthält keine personenbezogenen Daten, wird nicht an uns oder Dritte übermittelt und ist für diese von Ihnen gewünschte Funktion unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Eine Einwilligung ist daher nicht nötig. Sie können den Eintrag jederzeit über die Einstellungen Ihres Browsers löschen.</p>`],
    ["Schriftarten", `<p>Die verwendeten Schriftarten (Titillium Web, Allura) sind lokal auf unserem Server gespeichert. Beim Seitenaufruf wird keine Verbindung zu Servern von Google oder anderen Drittanbietern hergestellt.</p>`],
    ["Kontaktaufnahme", `<p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, Kontaktdaten, Inhalt Ihrer Anfrage), um Ihr Anliegen zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, im Übrigen unser berechtigtes Interesse an der Beantwortung nach Art. 6 Abs. 1 lit. f DSGVO.</p>
        <p>Wir löschen die Daten, sobald sie nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten (z. B. nach § 66 StBerG, § 147 AO, § 257 HGB) entgegenstehen. Als Berufsgeheimnisträger unterliegen wir der gesetzlichen Verschwiegenheitspflicht (§ 57 StBerG, § 203 StGB).</p>`],
    ["Mandatsverhältnis", `<p>Welche Daten wir im Rahmen eines Mandats verarbeiten, auf welcher Rechtsgrundlage und wie lange, erläutern unsere <a href="${docs.mandanten}" target="_blank" rel="noopener">Pflichtinformationen für Mandanten nach Art. 13 und 14 DSGVO (PDF)</a>.</p>`],
    ["Mandantenportal", `<p>Für den sicheren Austausch von Belegen und Dokumenten nutzen wir das Mandantenportal unter <a href="${site.portal}" target="_blank" rel="noopener">steuerberaterherre.online</a>. Das Portal ist ein eigenständiges Angebot mit eigenen Datenschutzhinweisen, die Sie dort vor der Anmeldung abrufen können. Auf dieser Website wird es nur verlinkt. Daten werden erst übertragen, wenn Sie den Link anklicken.</p>`],
    ["Bewerbungen", `<p>Bewerbungsunterlagen, die Sie uns per E-Mail oder Post senden, verarbeiten wir zur Durchführung des Bewerbungsverfahrens (§ 26 BDSG, Art. 6 Abs. 1 lit. b DSGVO). Kommt kein Beschäftigungsverhältnis zustande, löschen wir die Unterlagen spätestens sechs Monate nach Abschluss des Verfahrens, sofern Sie nicht in eine längere Speicherung eingewilligt haben. Einzelheiten finden Sie in unseren <a href="${docs.bewerber}" target="_blank" rel="noopener">Pflichtinformationen für Mitarbeiter und Bewerber (PDF)</a>.</p>`],
    ["Externe Links", `<p>Unsere Website enthält Links zu externen Angeboten, etwa zu Google Maps (Routenplanung), zur Steuerberaterkammer oder zu unserem Mandantenportal. Diese Inhalte sind nicht eingebettet. Erst wenn Sie einen Link anklicken, werden Sie zum jeweiligen Anbieter weitergeleitet, der dann eigenverantwortlich Daten verarbeitet.</p>`],
    ["Ihre Rechte", `<p>Sie haben jederzeit das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO), soweit keine Aufbewahrungspflichten entgegenstehen</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <div class="notice"><strong>Widerspruchsrecht nach Art. 21 DSGVO:</strong> Soweit wir Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, können Sie dieser Verarbeitung aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen.</div>
        <p>Für die Ausübung Ihrer Rechte genügt eine formlose Nachricht an die oben genannten Kontaktdaten.</p>`],
    ["Beschwerderecht", `<p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für uns zuständig ist:</p>
        <p>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br>Lautenschlagerstraße 20, 70173 Stuttgart<br>Postfach 10 29 32, 70025 Stuttgart<br>Telefon: 0711 615541-0<br><a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener">www.baden-wuerttemberg.datenschutz.de</a></p>`],
    ["Automatisierte Entscheidungen", `<p>Eine automatisierte Entscheidungsfindung einschließlich Profiling nach Art. 22 DSGVO findet nicht statt.</p>`],
    ["Änderungen", `<p>Wir passen diese Datenschutzerklärung an, wenn sich die Website oder die Rechtslage ändert. Es gilt die jeweils hier veröffentlichte Fassung.</p>`],
  ],
})}`,
};

/* ----------------------------------------------------------------------- AGB */

// Kurzüberblick in eigenen Worten. Verbindlich ist das AGB-PDF (Formulartext des Berufsstands).
const agbPoints = [
  ["Umfang und Ausführung des Auftrags", "Maßgeblich ist der erteilte Auftrag. Wir arbeiten nach den Grundsätzen ordnungsgemäßer Berufsausübung (StBerG, BOStB). Ihre Unterlagen und Angaben legen wir als richtig zugrunde, sofern nichts anderes vereinbart ist."],
  ["Verschwiegenheit", "Wir behandeln alle Informationen aus dem Mandat vertraulich – auch nach Ende der Zusammenarbeit. Das gilt ebenso für unsere Mitarbeitenden."],
  ["Mitwirkung Dritter", "Zur Auftragsausführung dürfen wir qualifizierte Mitarbeitende, fachkundige Dritte und IT-Dienstleister (z. B. DATEV) einbeziehen, die ebenfalls zur Verschwiegenheit verpflichtet sind."],
  ["Mängelbeseitigung", "Bei Mängeln haben Sie zunächst Anspruch auf Nachbesserung. Offensichtliche Unrichtigkeiten wie Schreib- oder Rechenfehler können wir jederzeit berichtigen."],
  ["Haftung", "Unsere Haftung ist im gesetzlich zulässigen Rahmen begrenzt (§ 67a StBerG). Einzelheiten zur Höhe regelt die verbindliche Fassung."],
  ["Ihre Mitwirkung", "Bitte stellen Sie uns alle nötigen Unterlagen vollständig und rechtzeitig zur Verfügung und informieren Sie uns über alle Umstände, die für den Auftrag wichtig sein können."],
  ["Urheberrecht", "Unsere Arbeitsergebnisse wie Gutachten oder Übersichten sind nur für Ihre eigenen Zwecke bestimmt. Eine Weitergabe an Dritte bedarf unserer Zustimmung."],
  ["Vergütung und Vorschuss", "Die Vergütung richtet sich nach der Steuerberatervergütungsverordnung (StBVV), soweit nichts anderes in Textform vereinbart ist. Wir können einen angemessenen Vorschuss verlangen."],
  ["Beendigung des Vertrags", "Der Vertrag endet mit Erledigung des Auftrags oder durch Kündigung. Dauermandate können beide Seiten nach den vereinbarten bzw. gesetzlichen Regeln kündigen."],
  ["Aufbewahrung und Herausgabe", "Ihre Handakten bewahren wir nach § 66 StBerG auf. Nach Abschluss des Auftrags erhalten Sie Ihre Unterlagen auf Wunsch zurück."],
  ["Sonstiges", "Es gilt deutsches Recht. Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil."],
  ["Teilunwirksamkeit", "Ist eine Bestimmung unwirksam, bleiben die übrigen Bestimmungen gültig."],
];

const agb = {
  file: "agb",
  active: "",
  title: "Allgemeine Geschäftsbedingungen | steuerberaterherre",
  description: "Allgemeine Geschäftsbedingungen (AGB) von steuerberaterherre – Überblick und verbindliche Fassung als PDF.",
  body: `${c.pageHero({ plain: true, crumb: "AGB", eyebrow: "Rechtliches", title: "Allgemeine Geschäfts&shy;bedingungen", lead: "Für unsere Aufträge gelten die Allgemeinen Geschäftsbedingungen für Steuerberater, soweit nichts anderes in Textform vereinbart oder gesetzlich zwingend vorgeschrieben ist." })}
<section class="section legal-wrap">
  <div class="wrap">
    <div class="agb-download" data-reveal>
      <div class="agb-download__icon"><span class="pdf">PDF</span></div>
      <div>
        <h2>Verbindliche Fassung</h2>
        <p>Rechtlich maßgeblich ist ausschließlich der vollständige Text im PDF. Der Überblick unten soll Ihnen nur die Orientierung erleichtern.</p>
      </div>
      <a class="btn btn--dark" href="${docs.agb}" target="_blank" rel="noopener">AGB als PDF öffnen ${icon.arrow}</a>
    </div>
    <div class="section-head" style="margin-top:clamp(56px,7vw,88px)" data-reveal>
      <p class="eyebrow">Kurz erklärt</p>
      <h2>Die wichtigsten Punkte <span class="hl">auf einen Blick</span>.</h2>
    </div>
    <ol class="agb-grid">
      ${agbPoints.map(([t, d], i) => `<li class="agb-card" data-reveal style="--d:${(i % 3) * 0.06}s"><span class="agb-card__num">${String(i + 1).padStart(2, "0")}</span><h3>${t}</h3><p>${d}</p></li>`).join("\n      ")}
    </ol>
    <p class="legal__stand">Die Kurzfassung dient nur der Information und ersetzt nicht die verbindliche Fassung.</p>
  </div>
</section>
${c.cta({ title: "Fragen zu den AGB?", text: "Sprechen Sie uns an – wir erklären Ihnen gern jeden Punkt." })}`,
};

module.exports = { impressum, datenschutz, agb, docs };
