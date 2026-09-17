# Reform the North — brand system

In-repo brand guide (mirrors the Reform the North brand skill). Load that skill before UI changes.

**Media pack:** [`/assets/brand/`](assets/brand/) — `mark.svg`, avatars, banner, favicon, og, wordmark.

Canonical site: `reformthenorth.com` · X: `@ReformTheNorth` · repo: `bpaiement/reformthenorth-com` (public)

Winter gazette / civic broadsheet. Cold, sharp, Canadian. Not SaaS purple, not soft blob marketing, not party campaign chrome.

**Master mark reference:** the X avatar — cream four-point **north star** (concave arms, N–S points longer than E–W) centered on an ink (`#0B1C2C`) square. Recreate that geometry; do not use a flat equal-arm sparkle or a star-only glyph as the primary logo.

## Tokens (do not invent new ones)

| Role | Token | Value |
|------|--------|--------|
| Paper | `--paper` | `#f4efe6` |
| Ink | `--ink` | `#0b1c2c` |
| Raised | `--raised` | `#fbf8f2` |
| Metal | `--metal` | `#6b6459` |
| Maple | `--maple` | `#9b2335` |
| Pewter | `--pewter` | `#8a8378` |

- Body background: paper. Maple is accent only (CTA, peak chart bar, sticky rule, guarantee ticks).
- No decorative gradients, glass, or rounded marketing cards. Corners `0` on buttons and tiles.

## Type

| Role | Face | Notes |
|------|------|--------|
| Display | Playfair Display | Wordmark, lede title, FR italic footer |
| Body / UI | IBM Plex Sans | Body, kickers, buttons, facts, chart labels |

## Mark & lockups

1. **Primary app mark (matches X):** ink square + cream north star (elongated N–S). Export SVG + PNG @ 1x/2x/3x.
2. **Mast / sticky lockup:** mark **left of** “Reform the North” always (`flex-direction: row` every breakpoint). Mast mark size **64–72px** on mobile, ~80px desktop (much larger than the old 40px). Name may wrap; mark stays left of the first line.
3. Never a full-width blown-up tile. Never mark stacked above the name.
4. Sticky ink bar: same north-star tile (cream on ink) + Playfair name in raised.

## Media package (ship together)

- `mark.svg` / `mark-ink.svg` (primary)
- Avatar: 400, 800, 1024 PNG (X-ready)
- Banner: 1500×500 (wordmark on paper or photo crop — match X banner style)
- Favicon 32 / 180 apple-touch
- OG image 1200×630: mark + wordmark on paper
- Wordmark-only SVG (ink on transparent)

## Chrome / hero

1. Cream brand mast **above** the typographic mission hero (not overlaid). The current design has no hero photo or oversized field mark.
2. Mast fades on scroll; ink sticky bar only after the entire mission hero clears. Never both during ordinary scrolling. Keep focused navigation visible until focus leaves.
3. Respect `prefers-reduced-motion`.

## Copy voice (stead / anyone writing site strings)

Civic website, not rant-blog. Keep Brian’s values; tighten the diction.

1. **Thesis:** both Liberals and Conservatives failed the country — foreign interests and foreign wars ahead of Canadians who built it. Prefer “hollowed out” over blog-yell; do not soften the charge.
2. **At home:** frame as flooding the labour market, housing market, and welfare rolls — not “Canadians already here are being replaced.” Temporary work as entitlement; governments answering foreign constituencies first.
3. **Abroad / Ukraine:** distinguish money committed from loan **guarantees** (contingent liability — taxpayers pay if Ukraine defaults). Never imply Carney personally co-signed private debt. Flag unsigned talks (e.g. EU €90B share) as not signed.
4. **Spend lists:** two weights — COMMITTED vs IF UKRAINE DEFAULTS. 100-year partnership is a closer line, not another row. Keep the ~37k-homes punch under the cumulative ~$26B only.
5. **Cost strip:** publish only citable IRCC/CBSA/provincial figures. If Ottawa has no clean “keep vs remove” total, say so in one metal line — do not invent one. Removals cost-recovery fees are not full enforcement cost.
6. **Facts:** no invented quotes, polls, or dollar totals. Cite sources in one small metal line under each data band.
7. **CTA / footer:** “Stand with Canada”; “A civic project, not a registered party.”; FR « Le Canada n’est pas un hôtel. »
8. Copy owner: stead drafts and revises site strings; UI bots do not freestyle thesis language.

## Hard anti-patterns

- Star-only ink sparkle as the “logo” when X shows star-in-square
- Tiny 40px mark when Brian asked for larger
- On-photo brand lockup; stacked mark above name; dark-on-dark type
- All-Playfair body; purple gradients; inventing stats
- Softening sovereignty / flood / guarantee language into both-sides mush

## Before shipping UI or copy

1. Phone check: mark left of name, large enough, cream bar readable, geometry matches X.
2. Scroll chrome correct; CSS cache-busted.
3. Media pack files in `/assets/brand/`.
4. New body copy reviewed against Copy voice above; figures have a published source.
