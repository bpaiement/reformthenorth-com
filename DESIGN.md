# Reform the North — spare winter gazette

Implemented October 1, 2026, from Brian’s locked simpler-redesign brief. BRAND.md supplies the six colour tokens, typography and north-star geometry; COPY.md and the existing index.html supply the approved language and figures. The current brief supersedes earlier CTA and navigation directions.

## Composition

One cream mast, one hero and three beats. The mast pairs the canonical ink-square north star with the Playfair wordmark, always horizontally, with the quiet X text link. The hero reads “Canada first. Always.” with one locked mission paragraph.

The three copy-locked beats are Heritage before slogan, Assimilation is the line, and Remigration where needed. Each pairs its maple number and Playfair heading with a lede and supporting paragraph. No charts, ledgers, data bands, navigation menus or CTA buttons.

The minimal footer contains the canonical mark, civic-project line and French line. All wording remains exactly as supplied in index.html.

## Visual system

- Paper `#f4efe6`, ink `#0b1c2c`, raised `#fbf8f2`, metal `#6b6459`, pewter `#8a8378`, maple `#9b2335`.
- Playfair Display for headline, section titles, wordmark and French footer. IBM Plex Sans for body, labels and figures. Google Fonts with local serif/sans fallbacks; no build step.
- Content width up to 1120px; fluid gutters, 20px on phones and 16px below 360px. Desktop beat content has a 100px inset, reduced on tablets and removed on phones.
- Mast mark 80px desktop / 64px phone, always left of the wordmark. The name may wrap on phones. Compact bar mark 32px; footer mark 40px.
- Hero headline up to 132px, section titles up to 64px. Generous paper space, fine pewter rules and small maple beat numbers. No gradients, glass, shadows, rounded cards or imagery.
- Beat text uses two columns on desktop and stacks below 641px.

## Motion and progressive enhancement
- Fresh top-of-page entrance: north star settles (650ms), wordmark follows (+120ms), clipped headline lines rise (+300/+460ms), lede follows (+760ms), maple hero rule draws (+1000ms). Complete at 1.65s; ease-out, once, no loops.
- Mast fades on scroll; inert ink bar enters only after hero clears (300ms slide / 180ms fade). Immediate exit on return; never competing mastheads.
- Offscreen beats reveal once as a group: maple number ticks down (760ms), heading follows (+90ms / 800ms), lede and supporting text follow (+170/+220ms / 780ms). Entire beat settles within 1s.
- Pewter section rule draws left to right (900ms), led by a maple tip that returns to the static left accent (950ms).
- Reduced motion is instant/static on load and on live preference changes, including mast opacity. No-JS content is visible. Print releases pending reveals. Restored scroll/deep links preserve earlier content; no replay when motion is re-enabled.

Motion uses CSS transforms, opacity and clipped headline spans, with no library. A passive scroll listener batches chrome geometry through requestAnimationFrame; resize, font settlement, pageshow and hash changes keep the boundary accurate. IntersectionObserver arms only offscreen sections. All animation and pending-state styles are gated by `prefers-reduced-motion: no-preference`; disabling motion disconnects the observer and releases pending content. Copy remains in the document, with the original headline line break preserved.

## Provenance and verification

This is a presentation change to the locked copy pack. No new wording, statistics or sections are introduced. CSS/JS cache keys are `gazette-20261001-motion1`.

Check direct file opening and static HTTP serving, 320/390/640/768/1024/1440px layouts, horizontal overflow, horizontal mark lockups, the exact hero/sticky boundary, once-only scroll reveals, preference changes, reduced motion, printing and JavaScript-disabled reading. Keep CNAME, favicon and assets/brand intact. Version both stylesheet and script query parameters in index.html.

Verified in headless Chrome on October 1, 2026: all six listed widths fit without horizontal overflow and preserve the horizontal mast lockup; the sticky bar switches at the hero boundary in both directions; scroll reveals animate once and finish; reduced motion works on load and after a live preference change; print reveals pending content; direct file opening works with JavaScript disabled. Desktop and phone screenshots were visually reviewed. JavaScript syntax, unique IDs, local asset paths, versioned CSS/JS URLs, zero CTA/navigation markup and `git diff --check` also pass. CNAME, favicon and brand assets are unchanged.

Motion pass verification: HTML text nodes compared against the pre-motion working copy with exact equality. Chrome checks passed at 320/390/640/768/1024/1440px, including sticky boundary in both directions, staggered once-only reveals, hero animation hooks, reduced motion on load and live cancellation (zero active animations), print and no-JS direct-file reading. Desktop and phone screenshots reviewed. JavaScript syntax and whitespace checks passed.
