# Reform the North — Art Direction (historical build sheet)

> Superseded by [DESIGN.md](DESIGN.md) for the September 17, 2026 no-photo redesign requested by Brian. This file retains the earlier photo-based direction for history; do not use its photo, stacked-lockup or narrow-page instructions for new edits.

**For:** Grok Build / frontend implementer  
**From:** surface (UX/UI)  
**Project path:** `~/Developer/Reform The North`  
**Scope:** visual + layout + component states. Copy strings live in `COPY.md` (stead). Do not invent softer messaging.

**Primary user action:** believe the case → tap **Stand with Canada** (X for now).

**Anti-slop (hard):** no Inter/Roboto as personality, no purple gradients, no glass cards, no soft mesh blobs, no centered SaaS icon rows. This is a winter gazette / civic broadsheet — cold, sharp, Canadian.

---

## 1. Brand spine (keep)

| Role | Token | Hex |
|------|--------|-----|
| Paper | `--paper` | `#f4efe6` |
| Ink | `--ink` | `#0b1c2c` |
| Raised | `--raised` | `#fbf8f2` |
| Metal | `--metal` | `#6b6459` |
| Pewter | `--pewter` | `#8a8378` |
| Maple | `--maple` | `#9b2335` |

- Body background: paper. Selection: ink on paper (invert).
- Maple is **accent only**: CTA fill, one chart peak bar, thin header rule. Nowhere else.
- No gradients. No blur. No rounded marketing cards. Corners: `0` on buttons and mark.

**Mark:** square + four-point star (existing SVG). Cream star on ink square in hero/footer; on scrolled header, ink fill + cream stroke/star as today.

---

## 2. Type pairing (required change)

**Now:** Playfair everywhere — too soft for body and UI.

| Role | Face | Weight | Notes |
|------|------|--------|-------|
| Display | Playfair Display | 400–500 | Hero name, lede title only |
| Body / UI | **IBM Plex Sans** (or Source Sans 3) | 400 / 500 / 600 | Paragraphs, kickers, facts, footer, button, chart labels |
| Italic | Playfair italic *or* Plex italic | — | French footer line only |

Load both from Google Fonts (or self-host). Drop Playfair from `body` and `.btn`.

### Type scale

| Element | Size | Line | Tracking | Face |
|---------|------|------|----------|------|
| Hero name | `clamp(1.75rem, 1rem + 4vw, 3.25rem)` | 1.05 | -0.02em | Playfair 400 |
| Lede title | `clamp(2.1rem, 1.1rem + 3.2vw, 3.4rem)` | 1.08 | -0.03em | Playfair 400 |
| Lede open | `1.125–1.2rem` | 1.5 | 0 | Plex 400 |
| Band h3 | `1.25rem` | 1.2 | -0.01em | Plex 600 |
| Body / band p | `1.0625–1.125rem` | 1.55 | 0 | Plex 400 |
| Data kicker | `0.8125rem` | 1.3 | `0.08em` uppercase | Plex 500 |
| Data dt | `1.35rem` | 1.1 | -0.02em | Plex 600 |
| Data dd / note | `0.9–0.95rem` | 1.45 | 0 | Plex 400 · metal |
| Spend out | `1.1rem` | 1.25 | -0.01em | Plex 600 |
| Spend in | `1rem` | 1.4 | 0 | Plex 400 · metal |
| Button | `1rem` | 1.2 | 0.02em | Plex 600 |
| Footer | `0.95rem` | 1.5 | 0 | Plex 400 |
| Header wordmark | `1.15rem` | 1 | -0.02em | Playfair 400 |

**Measure:** body/lede max-width `~36–38em`. Page wrap: **`min(56rem, 100%)`** (narrow from current 68rem).

---

## 3. Page structure (top → bottom)

### A. Skip link
Keep. Ink bg, raised text.

### B. Site header (scrolled only)
- Fixed; hidden until `.hero` photo (or lockup if still separate) clears viewport — keep `is-on` behavior.
- Ink bar, **2px maple** bottom border.
- Wordmark left only (mark 1.7rem + name). No nav yet.
- Focus-visible: raised outline on ink.

### C. Hero (rebuild)
**Kill** the separate cream `.hero-banner` lockup strip.

**Do this instead:**
1. Full-bleed `.hero-ground` photo first (and only hero chrome).
2. Overlay lockup **on the image**: mark + “Reform the North” once.
   - Position: bottom-left inside padding (`1.25–2rem`), or low-center if that frames Spirit Island better — prefer **bottom-left** so the island stays readable.
3. Text/mark: raised/cream on a soft scrim only if contrast fails — prefer no scrim; if needed, `linear-gradient(transparent, rgba(11,28,44,0.55))` on the lower 35% only (not a global dark wash).
4. Image: `height: min(72vh, 42rem)`; `object-position: center 45%`; keep alt.
5. Allow hero name to wrap on narrow screens — **remove** `white-space: nowrap` (or only nowrap from `min-width: 600px` up).

### D. Lede / case
Padding: `3.25rem 0 4rem` mobile; `5rem 0 5.5rem` desktop.

**Lede head (desktop ≥800px):** two columns — title | open. Gap `3–4rem`.

**Add under title (new small line):** civic frame from footer — e.g. “A civic project, not a registered party.”  
Style: Plex 500, `0.9rem`, metal. Do not bury this only in the footer.

Then two `.band` blocks (Domestic, Abroad) as now.

### E. Domestic band
- Left: h3 + copy (from `COPY.md`).
- Right: chart + facts + note.
- Top border: 1px pewter.
- Desktop: `grid 0.92fr / 1.08fr`, gap `3rem`.
- Chart: keep SVG bars; maple on peak year bar; axis labels in **Plex**, metal.
- Label peak year in kicker or a tiny caption under chart (“2024 peak” next to maple bar conceptually — optional text under chart).
- `.data-kicker`: uppercase tracked Plex (see scale).

### F. Abroad band
- Left: copy. Right: `.spend` list.
- Spend rows: top/bottom pewter rules; `.spend-out` ink/semibold; `.spend-in` metal.
- Keep contrast pairs; strings from `COPY.md`.

### G. CTA
- Directly under second band, not after a huge void.
- Primary: `.btn` → maple background, raised text, 1px maple border, padding `0.95rem 1.5rem`, min-height `2.85rem`, square.
  - Hover: ink fill, raised text (or paper text on ink).
  - Focus-visible: 2px ink outline, offset 3px.
- Optional secondary (text link under button): “Follow on X” in metal, underline on hover — only if primary stays “Stand with Canada”.

### H. Footer
- Pewter top rule. Brand row (mark + name ink). Domain · Canada. Civic note (can stay even if also in lede). FR italic line.
- Links: inherit metal/ink; underline on hover with offset.

---

## 4. Spacing rhythm

Base unit **4px**. Common steps: 8 / 12 / 16 / 20 / 24 / 32 / 40 / 56 / 80.

- Section vertical: ~52–88px.
- Band internal gap: 28–40px.
- Wrap horizontal padding: 20px → 32px from 600px up.

---

## 5. Motion

- Header slide: keep `0.35s ease`; respect `prefers-reduced-motion`.
- No parallax, no hero ken burns, no scroll-jacking.

---

## 6. Breakpoints

| Width | Behavior |
|-------|----------|
| &lt;520px | Hero lockup stacks if needed; name wraps; CTA full width |
| &lt;800px | Bands stack (copy then data); lede head stacks |
| ≥800px | Lede head 2-col; bands 2-col; data-facts 3-col |

---

## 7. Cleanup while you touch CSS

- Remove unused `.dek` rule (or wire it — currently orphan).
- Chart `font-family` → Plex, not Georgia.
- Print styles: keep header/skip hidden; button outline OK.

---

## 8. Implementation order (for Grok Build)

1. Font pairing + body/UI face swap.  
2. Hero: photo overlay lockup; delete cream banner strip.  
3. Wrap max-width 56rem; type scale pass.  
4. Maple CTA + civic line under lede title.  
5. Data kicker / spend weight polish.  
6. Drop in `COPY.md` strings when stead finishes (do not rewrite copy yourself).  
7. Mobile pass + focus states.

**Done when:** first screen is photo + one brand lockup; thesis readable with civic frame; bands clear; CTA maple and obvious; no all-Playfair body.

---

## 9. Out of scope (this pass)

- New pages, email capture, CMS, i18n beyond the one FR line.
- Changing facts/numbers without Brian.
- Softening Domestic/Abroad thesis.

---

*surface — Sep 16, 2026*
