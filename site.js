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

(() => {
  "use strict";
  const root = document.querySelector("[data-intake-chart]");
  if (!root) return;

  // Permanent bar lengths preserve the published on-site series (relative to ~500k).
  // Only 2010 and 2024 headline counts are labelled in Permanent mode.
  const permanent = [
    { year: 2010, bar: 56.2069, label: "281,000", peak: false },
    { year: 2011, bar: 49.7931 },
    { year: 2012, bar: 51.6552 },
    { year: 2013, bar: 51.8621 },
    { year: 2014, bar: 52.1379 },
    { year: 2015, bar: 54.4138 },
    { year: 2016, bar: 59.3793 },
    { year: 2017, bar: 57.3793 },
    { year: 2018, bar: 64.2759 },
    { year: 2019, bar: 68.3448 },
    { year: 2020, bar: 36.8966 },
    { year: 2021, bar: 81.1724 },
    { year: 2022, bar: 87.5172 },
    { year: 2023, bar: 94.4828 },
    { year: 2024, bar: 96.8966, label: "484,000", peak: true },
    { year: 2025, bar: 78.8276 },
  ];

  // StatsCan 17-10-0158-01, non-permanent residents, July 1 stock.
  const temporary = [
    { year: 2021, value: 1361855 },
    { year: 2022, value: 1586570 },
    { year: 2023, value: 2258095 },
    { year: 2024, value: 3039170, peak: true },
    { year: 2025, value: 3024216 },
  ];
  const tempMax = Math.max(...temporary.map((d) => d.value));

  const buttons = [...root.querySelectorAll("[data-series]")];
  const canvas = root.querySelector("[data-chart-canvas]");
  const yearsEl = root.querySelector("[data-chart-years]");
  const scaleEl = root.querySelector("[data-chart-scale]");
  const unitEl = root.querySelector("[data-chart-unit]");
  const periodEl = root.querySelector("[data-chart-period]");
  const legendEl = root.querySelector("[data-chart-legend]");
  if (!canvas || !yearsEl || !buttons.length) return;

  function fmt(n) {
    return n.toLocaleString("en-CA");
  }

  function setActive(series) {
    buttons.forEach((btn) => {
      const on = btn.dataset.series === series;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-checked", String(on));
      btn.tabIndex = on ? 0 : -1;
    });
  }

  function renderPermanent() {
    canvas.dataset.mode = "permanent";
    periodEl.textContent = "2010–2025";
    unitEl.textContent = "New permanent residents admitted each year";
    legendEl.hidden = true;
    scaleEl.innerHTML = "<span>500,000</span><span>250,000</span><span>0</span>";
    yearsEl.innerHTML = permanent
      .map((d) => {
        const peak = d.peak ? " chart-year--peak" : "";
        const number = d.label
          ? `<span class="chart-number">${d.label}${
              d.peak ? ' <span class="chart-peak-word">peak</span>' : ""
            }</span>`
          : "";
        return `<li class="chart-year${peak}" style="--bar: ${d.bar}%"><span class="chart-label">${d.year}</span><span class="chart-bar chart-bar--pr" aria-hidden="true"></span>${number}</li>`;
      })
      .join("");
    canvas.setAttribute(
      "aria-label",
      "Annual permanent resident admissions, 2010 to 2025. Approximately 281,000 in 2010, rising to the series peak of approximately 484,000 in 2024, then declining in 2025.",
    );
  }

  function renderTemporary() {
    canvas.dataset.mode = "temporary";
    periodEl.textContent = "2021–2025";
    unitEl.textContent = "Temporary residents in Canada (July 1)";
    legendEl.hidden = true;
    scaleEl.innerHTML = "<span>3.0M</span><span>1.5M</span><span>0</span>";
    yearsEl.innerHTML = temporary
      .map((d) => {
        const bar = (d.value / tempMax) * 100;
        const peak = d.peak ? " chart-year--peak" : "";
        const number = d.peak
          ? `<span class="chart-number">${fmt(d.value)} <span class="chart-peak-word">July peak</span></span>`
          : d.year === 2021
            ? `<span class="chart-number">${fmt(d.value)}</span>`
            : "";
        return `<li class="chart-year${peak}" style="--bar: ${bar.toFixed(4)}%"><span class="chart-label">${d.year}</span><span class="chart-bar chart-bar--tr" aria-hidden="true"></span>${number}</li>`;
      })
      .join("");
    canvas.setAttribute(
      "aria-label",
      "Temporary residents in Canada on July 1, Statistics Canada, 2021 to 2025. About 1.36 million in 2021, rising to about 3.04 million on July 1 2024. The separate 3.15 million figure is the October 2024 quarterly peak.",
    );
  }

  function renderBoth() {
    canvas.dataset.mode = "both";
    periodEl.textContent = "2021–2025";
    unitEl.textContent =
      "Two series — not a combined total. Each bar is scaled to its own series.";
    legendEl.hidden = false;
    scaleEl.innerHTML = "<span>own scale</span><span></span><span>0</span>";
    const prByYear = Object.fromEntries(permanent.map((d) => [d.year, d]));
    yearsEl.innerHTML = temporary
      .map((t) => {
        const p = prByYear[t.year];
        const trBar = (t.value / tempMax) * 100;
        const prBar = p.bar;
        const peak = t.year === 2024 ? " chart-year--peak" : "";
        const number =
          t.year === 2024
            ? `<span class="chart-number">484k / ${fmt(t.value)}</span>`
            : t.year === 2021
              ? `<span class="chart-number">PR / ${fmt(t.value)}</span>`
              : "";
        return `<li class="chart-year${peak}" style="--bar: ${Math.max(prBar, trBar).toFixed(4)}%; --bar-pr: ${prBar}%; --bar-tr: ${trBar.toFixed(4)}%"><span class="chart-label">${t.year}</span><span class="chart-year-bars"><span class="chart-bar chart-bar--pr" style="--bar: ${prBar}%" aria-hidden="true"></span><span class="chart-bar chart-bar--tr" style="--bar: ${trBar.toFixed(4)}%" aria-hidden="true"></span></span>${number}</li>`;
      })
      .join("");
    canvas.setAttribute(
      "aria-label",
      "Permanent admissions and temporary resident July 1 stock for 2021 to 2025. The two series use different metrics and are not added together. Each bar is scaled to its own series.",
    );
  }

  function show(series) {
    setActive(series);
    if (series === "temporary") renderTemporary();
    else if (series === "both") renderBoth();
    else renderPermanent();
  }

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => show(btn.dataset.series));
    btn.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      const next = (index + delta + buttons.length) % buttons.length;
      buttons[next].focus();
      show(buttons[next].dataset.series);
    });
  });

  show("permanent");
})();
