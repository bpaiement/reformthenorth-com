# Reform the North — current design

Implemented September 17, 2026, at Brian's request. This replaces the photo-era layout in ART-DIRECTION.md. BRAND.md remains the colour, typography, mark and voice reference; COPY.md remains the approved editorial copy.

## Composition

A paper civic broadsheet with a left-aligned typographic mission. The canonical north-star tile appears in the mast, compact sticky lockup and footer; there is no redundant hero-field mark.

Sequence: mast → mission and reading index → political thesis → intake → domestic programme costs → overseas commitments and guarantees → sources and definitions → Stand with Canada → footer.

The original mission, political thesis, flood framing, primary CTA and French footer are retained. No new policy platform or signup system has been invented. The final callout uses the approved borders, housing and national-chequebook language.

## Tokens and dimensions

- Exact six colours in BRAND.md. Paper throughout, raised for the cost ledger, ink for the compact header and concluding action. Maple only for actions, the chart peak, the sticky rule and guarantee ticks.
- Playfair Display for titles and wordmark; IBM Plex Sans for body, UI and numbers.
- Maximum content width: 1200px. Gutters: 48px desktop, 32px tablet, 20px mobile, 16px below 360px.
- Mast mark: 72px desktop, 64px mobile. Compact header mark: 32px desktop, 28px mobile. The wordmark may wrap in the main mobile mast; the mark always stays at its left, vertically centred.
- Desktop hero headline: up to 104px. Phone headline: 47–72px. The two approved headline phrases remain on separate lines.
- Main section rhythm: 88px desktop / 56px mobile. Rules and spacing organise content; no card chrome or decorative gradients.
- Responsive bands: under 768px, 768–1023px, and 1024px upward. Cost ledger is four columns on wide desktop, two on tablet, one on phone.

## Interaction

The sticky header becomes visible only when `.hero.getBoundingClientRect().bottom <= 0`. It is otherwise inert and aria-hidden. Focus inside the header or an open header menu keeps it visible until that interaction finishes. No scroll-direction heuristic is used.

Scroll updates are coalesced with requestAnimationFrame. ResizeObserver, font settlement, pageshow and hash navigation keep the geometry correct. Reduced motion disables animated transitions and smooth scrolling.

Native mobile disclosures work without JavaScript. With JavaScript, opening one menu closes its sibling; Escape closes it and restores trigger focus; clicking a navigation link closes the menu and moves focus to its target. Internal source links open the correct source disclosure. Every primary action points to the existing X account.

## Evidence presentation and provenance

This is a layout and clarity change, not a new data release. Existing figures and attributions were retained from the main-branch index.html and COPY.md at commit 3efa8c77a8473a59c71887494cb4d34f8c204199. The site does not claim a new figure-verification date.

The original sixteen annual chart bar lengths are retained proportionally, from the original SVG heights. They are rendered as desktop columns or chronological phone rows. The existing 2010 and 2024 headline values are the only numeric bar labels; no precise annual counts were inferred from pixels. The axis remains zero-based and labels stay outside the marks. An exact machine-readable series and fully linked primary-source audit should precede any future numerical update.

All four existing domestic cost entries remain. Each now identifies its programme and reporting period. The planned settlement appropriation is labelled planned, and settlement funding is explicitly distinguished from asylum-only funding. The programmes are not summed. Removal recovery fees are not presented as the full cost of enforcement.

Committed assistance and contingent guarantees have separate ledgers. Selected commitments are not added to the cumulative assistance headline. The unsigned EU proposal has a separate notice and is not classified as an executed Canadian guarantee. The housing comparison is explicitly illustrative arithmetic. The 100-year statement is a closing line, not another ledger item.

Existing source attributions are collected in visible, accessible disclosures. The IRCC annual-report link is a reporting reference, not a claim that a 2024 report substantiates every later figure. Exact publication URLs for the newer cost and Ukraine figures were not supplied in the repo; the preserved attributions do not imply they have been independently reverified during this design pass.

## Five rules

1. One dominant subject per screen. The hero states the mission, not the logo a second time.
2. Keep measure, unit, period and financial status with each figure. Never sum commitments and contingent exposure indiscriminately.
3. The canonical mark always sits left of the wordmark, never above it.
4. Use type, spacing and rules for hierarchy. Reserve maple; never add SaaS cards, glass or decorative gradients.
5. Reflow for phones. Chart labels remain outside bars; financial categories stay visible; navigation never produces two competing mastheads.

## Release checks

Check markup, local assets, anchors, JavaScript syntax, header boundary/focus/resize behaviour, reduced motion, and menu/source-link behaviour. Inspect 320, 390, 768, 1024 and 1440px layouts when a browser preview is available. Run a final diff and use a non-forced fast-forward push to main, preserving concurrent changes.

There is no framework or build dependency. Cloudflare Pages continues to serve the static root. Domain files, middleware and brand assets are unchanged. CSS and JavaScript URLs are versioned in index.html.
