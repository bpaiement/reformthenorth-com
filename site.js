/* Static content first; motion is a one-time enhancement. */
(() => {
  "use strict";
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  const mast = document.querySelector(".brand-mast");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;

  function syncChrome() {
    frame = 0;
    if (!header || !hero || !mast) return;
    const heroPassed = hero.getBoundingClientRect().bottom <= 0;
    header.classList.toggle("is-on", heroPassed);
    // The compact bar repeats the mast and has no interactive controls.
    const rect = mast.getBoundingClientRect();
    mast.style.setProperty("--mast-opacity", reducedMotion.matches ? "1" :
      String(Math.max(0, Math.min(1, rect.bottom / rect.height))));
  }

  function scheduleChrome() {
    if (!frame) frame = window.requestAnimationFrame(syncChrome);
  }

  window.addEventListener("scroll", scheduleChrome, { passive: true });
  window.addEventListener("resize", scheduleChrome);
  window.addEventListener("pageshow", scheduleChrome);
  window.addEventListener("hashchange", scheduleChrome);
  if ("ResizeObserver" in window && hero && mast) {
    const geometry = new ResizeObserver(scheduleChrome);
    geometry.observe(hero);
    geometry.observe(mast);
  }
  if (document.fonts) document.fonts.ready.then(scheduleChrome);
  syncChrome();

  let reveals;
  function showAll() {
    reveals?.disconnect();
    document.querySelectorAll(".reveal-pending").forEach((el) => {
      el.classList.remove("reveal-pending");
    });
  }

  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    reveals = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("reveal-pending");
        reveals.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      // Restored scroll positions and deep links never hide earlier content.
      if (el.getBoundingClientRect().top < window.innerHeight - 32) return;
      el.classList.add("reveal-pending");
      reveals.observe(el);
    });
  }

  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) showAll();
    scheduleChrome();
  });
  window.addEventListener("beforeprint", showAll);
  document.addEventListener("beforematch", showAll);
})();
