/* Progressive enhancement: all content and primary navigation work without JS. */
(() => {
  "use strict";
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  const mast = document.querySelector(".brand-mast");
  if (!header || !hero || !mast) return;
  const menus = [...document.querySelectorAll(".mobile-menu")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktop = window.matchMedia("(min-width: 768px)");
  let pending = false;

  function syncChrome() {
    pending = false;
    const heroPassed = hero.getBoundingClientRect().bottom <= 0;
    // Keep keyboard focus and an open menu visible until the interaction finishes.
    const headerInUse =
      header.contains(document.activeElement) ||
      !!header.querySelector(".mobile-menu[open]");
    const visible = heroPassed || headerInUse;
    header.classList.toggle("is-on", visible);
    header.inert = !visible;
    header.setAttribute("aria-hidden", String(!visible));
    const mastRect = mast.getBoundingClientRect();
    const mastInUse =
      mast.contains(document.activeElement) ||
      !!mast.querySelector(".mobile-menu[open]");
    const opacity = mastInUse
      ? 1
      : visible
        ? 0
        : reducedMotion.matches
          ? 1
          : Math.max(0, Math.min(1, mastRect.bottom / mastRect.height));
    mast.style.setProperty("--mast-opacity", String(opacity));
  }
  function scheduleSync() {
    if (!pending) {
      pending = true;
      window.requestAnimationFrame(syncChrome);
    }
  }
  function closeMenus(except) {
    menus.forEach((menu) => {
      if (menu !== except) menu.open = false;
    });
  }
  function revealHash() {
    let id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch (_) {
      return;
    }
    const target = document.getElementById(id);
    if (target?.matches(".source-records details")) {
      target.open = true;
      window.requestAnimationFrame(() =>
        target.scrollIntoView({ block: "start" }),
      );
    }
    scheduleSync();
  }
  menus.forEach((menu) => {
    menu.addEventListener("toggle", () => {
      menu
        .querySelector("summary")
        .setAttribute(
          "aria-label",
          menu.open ? "Close navigation" : "Open navigation",
        );
      if (menu.open) closeMenus(menu);
      scheduleSync();
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openMenu = menus.find((menu) => menu.open);
    if (openMenu) {
      openMenu.open = false;
      openMenu.querySelector("summary").focus({ preventScroll: true });
      scheduleSync();
    }
  });
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest('a[href^="#"]');
    if (link) {
      let id;
      try {
        id = decodeURIComponent(link.getAttribute("href").slice(1));
      } catch (_) {
        return;
      }
      const target = document.getElementById(id);
      if (target) {
        if (target.matches(".source-records details")) target.open = true;
        if (!target.hasAttribute("tabindex"))
          target.setAttribute("tabindex", "-1");
        // Move focus out of the header before it becomes inert on a return to top.
        target.focus({ preventScroll: true });
      }
      closeMenus();
    } else if (!event.target.closest(".mobile-menu")) {
      closeMenus();
    }
    scheduleSync();
  });
  document.addEventListener("focusin", scheduleSync);
  document.addEventListener("focusout", scheduleSync);
  window.addEventListener("scroll", scheduleSync, { passive: true });
  window.addEventListener("resize", scheduleSync);
  window.addEventListener("pageshow", scheduleSync);
  window.addEventListener("hashchange", revealHash);
  reducedMotion.addEventListener("change", scheduleSync);
  desktop.addEventListener("change", () => {
    closeMenus();
    scheduleSync();
  });
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(scheduleSync);
    observer.observe(hero);
    observer.observe(mast);
  }
  if (document.fonts) document.fonts.ready.then(scheduleSync);
  revealHash();
  syncChrome();
})();
