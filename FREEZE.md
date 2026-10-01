# RTN freeze — 2026-10-01 (Copy pack)

**Status:** UX freeze for Frontend Dev.

## Structure
- Cream mast: north-star mark left of Playfair wordmark + quiet X link (`https://x.com/ReformTheNorth`) — text link only, no CTA button
- Hero: “Canada first. / Always.” + one lede paragraph (Copy)
- Three beats only (no charts, no cost/abroad data bands, no sticky Stand with Canada):
  1. Heritage before slogan
  2. Assimilation is the line
  3. Remigration where needed
- Footer: civic line + FR « Le Canada n’est pas un hôtel. »

## Motion
- Fresh top-of-page entrance: huge CANADA drops from above (0–840ms); FIRST bounces in from the left (900–1800ms), squeezing CANADA smaller; ALWAYS rises from below and pushes both upward (1950–2850ms). Final all-caps Playfair stack has the accessible phrase “Canada first. Always.” North star/wordmark entrance retained; lede and maple rule settle by 3s. Once per fresh load at scrollY=0, no loops; static stack without JS or with reduced motion.
- Mast fades on scroll; inert ink bar enters only after hero clears (300ms slide / 180ms fade). Immediate exit on return; never competing mastheads.
- Offscreen beats reveal once as a group: maple number ticks down (760ms), heading follows (+90ms / 800ms), lede and supporting text follow (+170/+220ms / 780ms). Entire beat settles within 1s.
- Pewter section rule draws left to right (900ms), led by a maple tip that returns to the static left accent (950ms).
- Reduced motion is instant/static on load and on live preference changes, including mast opacity. No-JS content is visible. Print releases pending reveals. Restored scroll/deep links preserve earlier content; no replay when motion is re-enabled.

## Tokens
Paper / ink / raised / metal / maple / pewter — unchanged. Playfair + IBM Plex Sans.

## Files
`index.html`, `styles.css` (`?v=gazette-20261001-kinetic1`), `site.js` — local box path `/workspace/rtn/reformthenorth-com/`. Chart/ledger CSS left unused; Front may strip.

## Out of this pass
Data bands, charts, dual sticky CTA nav, “Stand with Canada” buttons.
