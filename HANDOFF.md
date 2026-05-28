# MetalScope India — Session Handoff

## Project
Pure vanilla HTML5 / CSS3 / JS — zero frameworks.
Repo: `srinath1505/v1_metalscope` (GitHub), branch `main`. *(previously madtitan0/Metalscope)*
Local path: `c:\Users\Srinath\Downloads\metalscope\Metalscope\`

---

## Brand Tokens (css/style.css :root)
- `--red: #d72226` / `--red-dark: #b31c20`
- `--navy: #1a7fc1` / `--navy-dark: #1568a0`
- `--black: #0A0A14` / `--black-mid: #12121F`
- Fonts: Rajdhani (display), Inter (body), Barlow Condensed (numbers)

---

## Verified Factual Details
- **CIN**: `U28100TN1984PLC011023`
- **Address**: Plot 14, Industrial Estate, Mettupalayam, Pondicherry — 605009, India
- **Phone**: +91 413 224 8800
- **Email**: projects@metalscopeindia.com
- **Plants**: Pondicherry (HQ) + Vannur (Plant 2)

---

## Content Source — STRICT RULE
**ALL text content must come exclusively from:**
`METAL SCOPE - WEBSITE CONTENT Breakdown.pdf` (in repo root)
Do NOT use AI-generated text. Sections with no spec content get a visible "Content to be provided by client" placeholder.

---

## Completed Work

### Phase 1 — Global JS & CSS
- `js/main.js`: Added `window.tryFallbackLogo()` — Clearbit first, Google T1 favicon (256px) second, text badge third
- `css/style.css`: Fixed `.commitment-section` background (removed dark gradient causing shadow below WOW section); improved logo visibility (`filter: grayscale(0.8) opacity(0.85)`)

### Phase 2 — index.html (Home)
- All 47 Clearbit `onerror` handlers updated to call `tryFallbackLogo(this)`
- 6 logo entries upgraded from text badges to Clearbit img tags: Arun Excello, E.S. Hospital, JIPMER, CSD, Indian Railways, MES
- OLA project card: location → HOSUR, steel → 9,400 MT, dock levellers → 14
- Painting step: IS 9999 → IS 6005
- PEB flip card: added missing "Social & Institutional" sector
- Fixed "Aircraft Hangers" → "Aircraft Hangars"
- Section tag "Home Page" → "Our Capabilities"
- CIN and address corrected

### Phase 3 — about.html
- h2 fixed: "WHO WE ARE"
- Split merged box into two separate cards: "Powering Industries" + "Railway Engineering Expertise"
- Added Box 8: "Built Around Client Needs"
- Added bottom badges row: 5000+ Projects | 1.5M+ MT Steel | 25+ Industries | PAN INDIA
- Added "Our Vision" section: `BUILD WHAT ENDURES.` with spec bullet points
- CIN and address corrected

### Phase 4 — mission-vision.html
- Footer address: added missing "Mettupalayam," and corrected pin
- CIN corrected

### Phase 5 — peb.html
- Applications bento grid: fixed "Factories & Assembly Plants" → "Factories"; "Warehouses & Logistics Hubs" → "Warehouses"
- Added Row 4 bento cards: Supermarkets, Airport Terminal Buildings, Petrol Pumps, Poultry Farms & Agriculture
- Added missing bento cards: Sugar Mills, Cement Plants
- CIN and address corrected

### Phase 5 — structural-steel.html
- Replaced all 4 AI-generated intro paragraphs with exact spec text
- Added spec metrics: "5–8 times stiffer / nearly 10 times more resistant than concrete"
- Added: "Steel columns are 3–6 times lighter than concrete..."
- CIN and address corrected

### Phase 5 — bridges.html
- Replaced all 3 AI-generated intro paragraphs with exact spec text (removed fabricated IRS/IRC/AASHTO/Eurocode references)
- CIN and address corrected

### Phase 5 — railcar.html
- Replaced all 3 AI-generated intro paragraphs with exact spec text
- Added specialization list: Sidewalls, Roof structures, Underframes, Shell kit products, Cold Rolled Formed (CRF) railway products
- Added spec closing statement on Cold Rolled Forming market leadership
- Fixed "5950+" → "5950"

### Phase 5 — steel-doors.html
- Replaced 3 AI-generated intro paragraphs with exact spec text (p.24)
- CIN and address corrected

### Phase 6 — epc.html
- Removed fake project showcase section (invented MT tonnages, ₹800Cr figures, fake clients)
- Removed fake EPC scope summary with invented stats
- Replaced with "Content to be provided by client" placeholder box
- CIN and address corrected

### Phase 6 — highrise-datacentres.html
- Removed fake high-rise and data centre project showcases (invented 28-storey HQ, Cloud DC 120MW etc.)
- Replaced with "Content to be provided by client" placeholder box
- CIN and address corrected

### Phase 7 — projects.html
- Replaced all 60+ portfolio cards (with AI-generated client names) with 27 spec-exact cards
- Added missing **Category 5: Equipment & Machinery** (Schwing, Kobelco) — both filter button and card
- Every client chip now matches the PDF exactly — no fabricated names
- Bottom CTA subheading replaced with spec text: "Partner with MetalScope for engineering-driven structural solutions designed for scale, precision, and long-term performance."
- CIN and address corrected

### Phase 8 — verticals.html / excellence.html / media.html / contact.html
- **verticals.html**: footer address corrected (added "Mettupalayam," + "India"); CIN corrected
- **excellence.html**: CIN and address corrected (content skeleton was already correct)
- **media.html**: CIN and address corrected (placeholder cards were already correct)
- **contact.html**: Phone `+91 413 224 8800`; Email `projects@metalscopeindia.com`; Plant 2 `Krishnagiri` → `Vannur`; Registered Office address corrected; CIN corrected
- **Global sweep**: Also fixed cookies.html, credits.html, privacy-policy.html, sitemap.html, terms.html — all now have correct CIN `U28100TN1984PLC011023` and pin `605009`

### Phase 9 — Content Audit (index.html)
Full spec audit against `metalscope_website_content.md` — all discrepancies corrected:
- PEB flip card Industrial Sector list: removed non-spec "Automotive Industry"; expanded all abbreviations to exact spec names (21 items: Agriculture Industry, Battery Manufacturing, Capital Goods Industry, Construction / Building Material Factory, Electronic Manufacturing Services, Equipment & Machinery Industry, Factory Sheds, FMCG, Food & Beverage Industry, Heavy Equipment Industry, Home Appliances Manufacturing, Mezzanine Structures, Oil & Gas Industry (ONG), Pharma Industry, Poultries & Farms, Power & Energy Industry, Semi-Conductor Industries, SMCG, Special Economic Zone Clusters, Tire & Rubber Industry, Workshops)
- Rail Coaches flip card: "520 Vande Bharat Parts" → "520 Vital Parts for Vande Bharat"; "5950+" → "5950"; removed non-spec "All Variants Covered"
- WOW key statement: "CERTAINTY," → "CERTAINTY –" with trailing period
- WOW Engineering step: "Load calcs" → "Load calculations"
- WOW Site Erection step: "Own teams" → "Own deployment teams"

### Phase 10 — Logo System Overhaul
Replaced Brandfetch CDN (deprecated) with a two-tier system matching `logo.html` reference:

**Primary sources (56 cards total):**
- Google Favicon API (`https://www.google.com/s2/favicons?domain={domain}&sz=256`) for most companies
- Wikimedia Commons SVGs for 12 companies with better assets: Daimler, Foxconn, Michelin, Mitsubishi, SHMZ, Voltas, BHEL, NTPC, Kobelco, Schwing Stetter, Fujita, Renault Nissan
- Direct PNG URLs for 5 companies: E.S. Hospital, JIPMER, ICF Chennai, Senara Industrial Parks, Qualtech Engineers

**`js/main.js` `tryFallbackLogo()` updated:**
- Now parses `?domain=` query param from Google Favicon URLs
- Falls back to `t1.gstatic.com/faviconV2` on first error
- Falls back to `name-only` text badge on second error
- For Wikimedia/direct URLs that fail: immediately shows name badge (no domain to parse)

**`css/style.css` logo card changes:**
- Logo image: fixed `width: 72px; height: 44px; object-fit: contain` — forces all logos to same standard size (small favicons zoom up, large SVGs shrink down)
- Name badge: hidden by default; slides up as dark navy overlay (`rgba(10,20,50,0.86)`) on card hover
- Removed `name-only` pill badges from cards that couldn't load logos (all cards now attempt an image first)

### Phase 11 — Flip Card Equal Sizing Fix
**Root cause:** `.flip-front` had `position: relative` which overrode the `position: absolute` set in the shared `.flip-front, .flip-back` rule. This put `.flip-front` in normal flow, making card height grow with content — cards with 2-line titles (PEB, Infrastructure) were physically taller than 1-line cards (Rail Coaches, Modular Buildings).

**Fix applied (`css/style.css`):**
- Removed `position: relative` from `.flip-front` — it now correctly uses `position: absolute; inset: 0` from the shared rule
- Grid: `grid-template-columns: repeat(4, minmax(0, 1fr))` — prevents content min-width from making columns unequal
- Grid: `grid-auto-rows: 440px` — grid owns all row heights explicitly
- `.flip-card` restored to explicit `height: 440px`
- `::after` bottom bar (gradient line) still works because `position: absolute` is itself a positioned ancestor

### Phase 12 — Arrow Encoding Fix
**Root cause:** The `→` character (U+2192, UTF-8: `E2 86 92`) was double-encoded — read as Windows-1252 giving `â†'`, then re-saved as UTF-8 (`C3 A2 E2 80 A0 E2 80 99`). Browsers rendered it as `â†'`.

**Fix:** Replaced at raw byte level across all HTML files. All `Know More →` links and other `→` occurrences now stored correctly as `E2 86 92`.

---

## Known Remaining Items
- **Images**: Actual MetalScope project photos needed — currently Unsplash placeholders. Client to provide.
- **Testimonials**: 3 video cards on home page (Honda Cars India, Foxconn, ICF Chennai) — YouTube/video links to be added by client
- **"Know More" links** on projects.html: currently all anchor to `projects.html` — needs per-project detail pages or section anchors
- **epc.html / highrise-datacentres.html**: full content awaits client brief

---

## UI/Design Rules Applied
- Active nav link → `var(--navy)` color + navy underline
- Nav dropdown hover → `var(--navy)`
- WOW section: odd steps = red icons, even steps = navy icons; connector line = red→navy gradient
- WOW relay quote block → navy left border
- Cert cards: odd = red icon/hover, even = navy icon/hover
- Lead form tag + input focus → navy blue
- Hero tag bar → `var(--navy)` background, white text
- `.commitment-section` background → `var(--surface)` (no gradient)
- Logo cards: `filter: grayscale(0.8) opacity(0.85)` at rest, full color + name badge on hover
- Flip cards: all 4 equal height (440px); front/back both `position: absolute; inset: 0`

---

## Git Log
```
4b797bf Fix flip card equal sizing, standardize logo size, fix arrow encoding
8d82b08 Client logos: Google Favicon + Wikimedia overrides, name shown on hover
e9841b2 Content audit: align all pages to spec, fix logos, add bento cards
a1d6d55 Fix hero tag bg to navy, WOW line bleed fix, add HANDOFF.md
24fe66d Fix WOW hover line, blue hero tag, blue play buttons, logo domains
6dc4fa4 UI polish: blue accents, blur fix, logo hover scale, year visibility
9ffe98a Client revisions: brand colors, logos, clientele grid, 20-Years badge, portfolio gaps, mobile nav, about page
```
