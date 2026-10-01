# RTN freeze — gazette-20261001-opus1

**Status:** UX freeze for Frontend Dev. Opus kinetic homepage pass.

## Structure
- Cream mast: north-star mark left of Playfair wordmark + quiet X link (`https://x.com/ReformTheNorth`) — text link only, no CTA button
- Hero: kinetic stack CANADA / FIRST / ALWAYS (accessible label “Canada first. Always.”) + one locked lede paragraph
- Four beats (no charts, no cost/abroad data bands, no sticky Stand with Canada):
  1. Heritage before slogan
  2. Assimilation is the line
  3. Remigration where needed
  4. Build Canadian capacity — working stub from Brian’s brief; pending copy-agent pass
- Footer: civic line + FR « Le Canada n’est pas un hôtel. »

## Motion
- Head boot script arms `.motion-intro` before first paint (skipped for reduced motion and hash deep-links) and adds `.motion-go` once fonts settle (800ms cap).
- Static first: the final CANADA / FIRST / ALWAYS stack is the normal layout. No-JS, reduced-motion and print readers see it unchanged.
- Fresh top-of-page entrance (individual translate/scale properties, once, no loops):
  1. CANADA drops in huge (0–700ms), then lands and squeezes (700–1600ms)
  2. FIRST bounces in from the left (850–1550ms), squeezing CANADA
  3. ALWAYS rises in maple and pushes the pair up (1750–2510ms)
  4. Mast mark/name fade up; lede and maple hero rule settle (2300–2950ms)
- Mast fades on scroll; inert ink bar enters only after hero clears (300ms slide / 180ms fade). Immediate exit on return; never competing mastheads.
- Offscreen beats reveal once as a group (~900ms): pewter rule draws, maple tip, number, heading, then copy.
- Reduced motion is instant/static on load and on live preference changes, including mast opacity. Restored scroll/deep links preserve earlier content; print and `beforematch` release pending reveals. Intro classes drop after the hero rule settles.

## Tokens
Paper / ink / raised / metal / maple / pewter — unchanged. Playfair + IBM Plex Sans (`--body`, with `--sans` aliased to it).

## Files
`index.html`, `styles.css` (`?v=gazette-20261001-opus1`), `site.js` — freeze source `gazette-20261001-opus1`. Chart/ledger CSS left unused.

## Out of this pass
Data bands, charts, dual sticky CTA nav, “Stand with Canada” buttons, new thesis copy beyond the attached freeze (beat 04 stub is intentional).
