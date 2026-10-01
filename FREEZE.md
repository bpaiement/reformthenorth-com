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

## Motion (keep)
- Mast fades on scroll; ink sticky bar only after hero clears (never both)
- Beat rules draw; headings/ledes fade-rise once (700ms / 850ms rule)
- Respect `prefers-reduced-motion`; content visible without JS

## Tokens
Paper / ink / raised / metal / maple / pewter — unchanged. Playfair + IBM Plex Sans.

## Files
`index.html`, `styles.css` (`?v=gazette-20261001c`), `site.js`. Chart/ledger CSS stripped as unused on the lean page.

## Out of this pass
Data bands, charts, dual sticky CTA nav, “Stand with Canada” buttons.
