# MetalScope India — Session Handoff

## Project
Pure vanilla HTML5 / CSS3 / JS — zero frameworks.
Repo: `madtitan0/Metalscope` (GitHub), branch `main`.
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
- CIN and address corrected

### Phase 5 — structural-steel.html
- Added spec metrics: "5–8 times stiffer / nearly 10 times more resistant than concrete"
- Added: "Steel columns are 3–6 times lighter than concrete..."
- CIN and address corrected

### Phase 5 — bridges.html / railcar.html
- CIN and address corrected on both
- railcar.html: fixed "5950+" → "5950"

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
- Key corrections: Automotive now shows Honda/Hyundai/Kia/Michelin/Daimler/Schwing/Kobelco/Terex/Ola Electric/TVS Eurogrip/Allison Transmission; Social Infrastructure shows JIPMER/EGS College/Venkateshwara College/Theivanai Ammal College/PSNA College Dindigul/Deccan/Chennai Maritime; Transport & Logistics → INS Rajali; Renewable Energy → Baetter; etc.
- CIN and address corrected

### Phase 8 — verticals.html / excellence.html / media.html / contact.html
- **verticals.html**: footer address corrected (added "Mettupalayam," + "India"); CIN corrected
- **excellence.html**: CIN and address corrected (content skeleton was already correct)
- **media.html**: CIN and address corrected (placeholder cards were already correct)
- **contact.html**: Phone `+91 413 224 8800`; Email `projects@metalscopeindia.com`; Plant 2 `Krishnagiri` → `Vannur`; Registered Office address corrected; CIN corrected
- **Global sweep**: Also fixed cookies.html, credits.html, privacy-policy.html, sitemap.html, terms.html — all now have correct CIN `U28100TN1984PLC011023` and pin `605009`

---

## Remaining Task — Logo Quality Improvement

### Background
Clearbit Logo API (`logo.clearbit.com/{domain}`) was shut down after HubSpot acquired Clearbit in 2024. The current fallback chain in `tryFallbackLogo()` in `js/main.js` is:
1. Clearbit (likely fails for most domains)
2. Google T1 favicon service at 256px (`t1.gstatic.com/faviconV2`) — works but returns small favicons, not proper logos
3. Styled text badge as final fallback

### What Needs To Be Done
Replace the logo source with a working logo API. Two leading options:

**Option A — logo.dev** (recommended)
- API: `https://img.logo.dev/{domain}?token=YOUR_TOKEN&size=200`
- Free tier available; good coverage of Indian corporate brands
- Returns proper rectangular logos, not favicons
- Update `tryFallbackLogo()` in `js/main.js` to use logo.dev as primary, Google T1 as secondary

**Option B — Brandfetch**
- API: `https://cdn.brandfetch.io/{domain}/w/400/h/400`
- Broader coverage; some domains require API key
- Returns high-quality brand assets

### Files to Change
- `js/main.js` — update `tryFallbackLogo()` function
- `index.html` — update all `<img src="https://logo.clearbit.com/...">` `src` attributes to use new API

---

## Known Remaining Items (Not Yet Actioned)
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
- Logo cards: `filter: grayscale(0.8) opacity(0.85)` at rest, full color on hover

---

## Git History (pre-session)
```
24fe66d Fix WOW hover line, blue hero tag, blue play buttons, logo domains
6dc4fa4 UI polish: blue accents, blur fix, logo hover scale, year visibility
9ffe98a Client revisions: brand colors, logos, clientele grid, 20-Years badge, portfolio gaps, mobile nav, about page
```
