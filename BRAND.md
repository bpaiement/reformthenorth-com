# Reform the North — brand system

Canonical site: [reformthenorth.com](https://reformthenorth.com)  
Skill: `reform-the-north-brand` (load before any UI change)

Winter gazette / civic broadsheet. Cold, sharp, Canadian. Not SaaS purple, not soft blob marketing, not party campaign chrome.

## Tokens (do not invent new ones)

| Role | Token | Value |
|------|--------|--------|
| Paper | `--paper` | `#f4efe6` |
| Ink | `--ink` | `#0b1c2c` |
| Raised | `--raised` | `#fbf8f2` |
| Metal | `--metal` | `#6b6459` |
| Maple | `--maple` | `#9b2335` |
| Pewter | `--pewter` | `#8a8378` |

- Body background: paper. Selection: ink on paper (invert).
- Maple is accent only: CTA fill, peak chart bar, thin sticky-header rule, guarantee-list ticks. Nowhere else.
- No gradients as decoration. No glass. No rounded marketing cards. Corners `0` on buttons and tiles.

## Type

| Role | Face | Notes |
|------|------|--------|
| Display | Playfair Display (`--display`) | Hero/mast name, lede title, FR italic footer only |
| Body / UI | IBM Plex Sans (`--sans`) | Everything else: body, kickers, buttons, facts, chart labels |

- Kickers: plex, ~0.75–0.8125rem, weight 500–600, uppercase, tracked (~0.08–0.12em), metal.
- Never body in Playfair. Never Inter/Roboto as personality.

## Mark

- Four-point star in a square.
- **On cream mast / paper:** ink star only (no full-bleed navy rect that can blow up). Fixed **40×40px** with SVG `width`/`height` attributes + CSS max. Mark **always left of the name** — `flex-direction: row` at every breakpoint. Name may wrap; mark stays left of first line.
- **On ink sticky bar:** small mark (cream star / ink tile as needed for contrast) + Playfair name in raised. Same left-of-name rule.
- Never a giant navy tile. Never mark stacked above the name on mobile.

## Chrome / hero

1. **Cream brand mast above the photo** (not overlaid on the image). Centered pair: mark left + “Reform the North”.
2. Mast **fades out** on scroll (~0.3s). Respect `prefers-reduced-motion` (instant).
3. **Ink sticky bar** only after the photo clears the viewport. Never show mast + sticky bar together.
4. Photo full-bleed under the mast; crop/object-position so it reads without on-photo logo.

## Page rhythm

- Wrap max ~`56rem`.
- Lede: one column, centered — title → civic frame (tracked uppercase metal) → open graf (~36ch).
- Hard pewter rule into data bands.
- At-home: copy + intake chart + fact strip; optional **Cost to keep them here** strip (dt/dd), removals as one metal note + source — not a fake keep-vs-remove total.
- Abroad: committed vs if-default spend lists (maple tick / maple figures on guarantees only); 100-year frame as closer; one source line.

## Components

- **Primary CTA:** maple fill, raised type, square, plex 600. Hover → ink fill. Focus-visible 2px ink offset.
- **Facts:** ink on the number, metal on the gloss.
- **Charts:** years **below** bars (viewBox padding under baseline), never labels inside fills. Maple only on the peak callout bar.

## Copy ownership

- Voice/strings: **stead** + `COPY.md`. Do not soften claims or invent stats.
- Layout/art direction: **surface**. Implementation: coding agent / Grok Bot.
- Optional: stead may add a copy-voice block to the brand skill; keep `COPY.md` as the string source of truth.

## Hard anti-patterns

- On-photo brand lockup / scrim for logo
- Stacked mark above wordmark on mobile
- Oversized navy SVG rect as a hero tile
- Dark-on-dark or cream-on-cream text
- All-Playfair body, purple gradients, glass cards, soft blobs
- Mixing maple into random chrome
- Shipping without cache-bust on `styles.css` after visual fixes

## Before shipping UI

1. Phone-width check: mast mark ≤40px, left of name, cream bar readable.
2. Scroll: mast fades; sticky ink only after photo gone.
3. Chart labels clear of bars.
4. Maple only where specified.
5. Hard-refresh / cache-bust CSS.
