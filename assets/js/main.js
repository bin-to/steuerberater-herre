// Navigation, Scroll-Reveal, Vita-Aufklapper, Lightbox, Nach-oben-Button
(() => {
  const root = document.documentElement;

  // Mobile Navigation
  const burger = document.querySelector(".burger");
  const nav = document.getElementById("nav");
  const setNav = (open) => {
    document.body.classList.toggle("nav-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  };
  burger?.addEventListener("click", () => setNav(!document.body.classList.contains("nav-open")));
  nav?.addEventListener("click", (e) => { if (e.target.closest("a")) setNav(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setNav(false); });

  // Scroll-Reveal
  const items = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-in"));
  }

  // Werdegang in der Profilkarte auf-/zuklappen (Animation per CSS)
  document.querySelectorAll(".profile__toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      btn.closest(".profile").classList.toggle("is-open", open);
    });
  });

  // Lightbox
  const dlg = document.querySelector(".lightbox");
  if (dlg && typeof dlg.showModal === "function") {
    const dImg = dlg.querySelector("img");
    const dCap = dlg.querySelector(".lightbox__cap");
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-lightbox]");
      if (!t) return;
      e.preventDefault();
      dImg.src = t.dataset.lightbox;
      dImg.alt = t.dataset.caption || "";
      dCap.textContent = t.dataset.caption || "";
      dlg.showModal();
    });
    dlg.querySelector(".lightbox__close").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  }

  // Rechtsseiten: aktiven Abschnitt im Inhaltsverzeichnis markieren
  const tocLinks = document.querySelectorAll(".legal__toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        tocLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll(".legal__block").forEach((s) => spy.observe(s));
  }

  // Cookie-Hinweis: nur Information. Gemerkt wird lediglich das "Verstanden"
  // im localStorage (technisch erforderlich, § 25 Abs. 2 Nr. 2 TDDDG), ohne Übermittlung.
  const notice = document.querySelector(".notice-bar");
  const KEY = "sbh-notice-ok";
  let seen = false;
  try { seen = localStorage.getItem(KEY) === "1"; } catch (_) {}
  if (notice && !seen) {
    notice.hidden = false;
    document.body.classList.add("has-notice");
    notice.querySelector(".notice-bar__btn").addEventListener("click", () => {
      try { localStorage.setItem(KEY, "1"); } catch (_) {}
      notice.classList.add("is-leaving");
      document.body.classList.remove("has-notice");
      setTimeout(() => { notice.hidden = true; }, 350);
    });
  }

  // Kachel-Spotlight: Mausposition als CSS-Variablen
  document.querySelectorAll(".tile").forEach((t) => {
    t.addEventListener("pointermove", (e) => {
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", `${e.clientX - r.left}px`);
      t.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  // Scroll: Header-Zustand, Lesefortschritt, Hero-Parallax, Nach-oben-Button
  const top = document.querySelector(".to-top");
  const progress = document.querySelector(".progress");
  const heroImg = document.querySelector(".hero__media img");
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    document.body.classList.toggle("is-scrolled", y > 24);
    progress?.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : 0);
    if (heroImg && !still && y < window.innerHeight) heroImg.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.04)`;
    top?.classList.toggle("is-visible", y > 800);
    ticking = false;
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  top?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();
