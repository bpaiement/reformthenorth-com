# Reform the North — spare winter gazette

Implemented October 1, 2026, from Brian’s locked simpler-redesign brief, then the gazette-20261001-opus1 kinetic hero pass. BRAND.md supplies the six colour tokens, typography and north-star geometry. The current brief supersedes earlier CTA, navigation, and clipped-headline motion directions.

## Composition

One cream mast, one kinetic hero and four beats. The mast pairs the canonical ink-square north star with the Playfair wordmark, always horizontally, with the quiet X text link. The hero reads CANADA / FIRST / ALWAYS (accessible label “Canada first. Always.”) with one locked mission paragraph.

The copy-locked beats are Heritage before slogan, Assimilation is the line, and Remigration where needed. Beat 04, Build Canadian capacity, is working stub copy from Brian’s brief pending a copy-agent pass. Each pairs its maple number and Playfair heading with a lede and supporting paragraph. No charts, ledgers, data bands, navigation menus or CTA buttons.

The minimal footer contains the canonical mark, civic-project line and French line. All wording remains exactly as supplied in the opus1 freeze `index.html`.

## Visual system

- Paper `#f4efe6`, ink `#0b1c2c`, raised `#fbf8f2`, metal `#6b6459`, pewter `#8a8378`, maple `#9b2335`.
- Playfair Display for headline, section titles, wordmark and French footer. IBM Plex Sans for body, labels and figures. Google Fonts with local serif/sans fallbacks; no build step.
- Content width up to 1120px; fluid gutters, 20px on phones and 16px below 360px. Desktop beat content has a 100px inset, reduced on tablets and removed on phones.
- Mast mark 80px desktop / 64px phone, always left of the wordmark. The name may wrap on phones. Compact bar mark 32px; footer mark 40px.
- Kinetic headline up to 156px, section titles up to 64px. ALWAYS is maple. Generous paper space, fine pewter rules and small maple beat numbers. No gradients, glass, shadows, rounded cards or imagery.
- Beat text uses two columns on desktop and stacks below 641px.

## Motion and progressive enhancement
- Head boot script arms `.motion-intro` before first paint and starts `.motion-go` once fonts settle (800ms cap).
- Static first: the final CANADA / FIRST / ALWAYS stack is the normal layout. Motion uses individual translate/scale properties so each phase owns one property.
- Fresh top-of-page entrance: CANADA drops huge then lands and squeezes; FIRST bounces in from the left; ALWAYS rises and pushes the pair up; lede and maple hero rule settle by ~3s. Ease-out, once, no loops.
- Mast fades on scroll; inert ink bar enters only after hero clears (300ms slide / 180ms fade). Immediate exit on return; never competing mastheads.
- Offscreen beats reveal once as a group inside ~900ms: pewter rule draws, maple tip, number, heading, then copy.
- Reduced motion is instant/static on load and on live preference changes, including mast opacity. No-JS content is visible. Print releases pending reveals. Restored scroll/deep links preserve earlier content; no replay when motion is re-enabled.

Motion uses CSS transforms, scale and opacity, with no library. A passive scroll listener batches chrome geometry through requestAnimationFrame; resize, font settlement, pageshow and hash changes keep the boundary accurate. IntersectionObserver arms only offscreen sections. All animation and pending-state styles are gated by `prefers-reduced-motion: no-preference`; disabling motion disconnects the observer and releases pending content. Copy remains in the document; the accessible headline is “Canada first. Always.”

## Provenance and verification

This is a presentation change to the locked copy pack plus the beat 04 stub. No new thesis wording is invented beyond the freeze. CSS/JS cache keys are `gazette-20261001-opus1`.

Check direct file opening and static HTTP serving, 320/390/640/768/1024/1440px layouts, horizontal overflow, horizontal mark lockups, the exact hero/sticky boundary, once-only scroll reveals, preference changes, reduced motion, printing and JavaScript-disabled reading. Keep CNAME, favicon and assets/brand intact. Version both stylesheet and script query parameters in index.html.
