---
version: 1.0
name: Cellcom-digital-design-system
description: Cellcom (סלקום), Israel's telecom brand, in its digital marketing voice. Deep violet #810ea9 with a violet-to-orchid gradient (#810ea9 → #bc32ce), one Hebrew typeface (RAG-Sans-Cellcom) in three weights, right-to-left layouts, and a single signature shape, a large curved purple "wave" that separates copy from photography. Banners are photographic and warm with violet accents; offers are set as huge ExtraBold numerals; the only accent besides purple is a gold gradient. Pills for every button, no hard boxes around text, no emoji.

colors:
  primary: "#810ea9"
  primary-btn: "#810ea9"
  primary-grad: "#bc32ce"
  bright: "#e3d2e9"
  light-grad: "#f2e7f6"
  light: "#f9f3fb"
  white: "#ffffff"
  black: "#000000"
  gray-1: "#f0f0f0"
  gray-2: "#d9d9da"
  gray-3: "#a09fa2"
  gray-4: "#423f45"
  gray-disabled: "#716f73"
  field-stroke: "#cccccc"
  error: "#cf2429"
  yellow-alert: "#ffde31"
  yellow-energy: "#f3fe7e"
  dark-background: "#13051a"
  dark-card: "#27152f"
  dark-song: "#26192c"
  dark-package: "#290737"
  dark-banner: "#4a0a61"
  dark-gray-stroke: "#94839b"
  dark-gray-lines: "#e7e6e8"
  dark-salmon: "#ff82a6"
  gold-gradient: "linear-gradient(90deg, #a1632e 0%, #fbe79a 30%, #ecd287 55%, #e6b73c 80%, #a1632e 100%)"
  brand-gradient: "linear-gradient(90deg, #810ea9 16%, #bc32ce 100%)"
  light-gradient: "linear-gradient(90deg, #f2e7f6 0%, #f9f3fb 100%)"

typography:
  fontFamily: "'RAG-Sans-Cellcom', 'Arial Hebrew', Arial, sans-serif"
  weights: { regular: 400, semibold: 600, extrabold: 800, light: 300 }
  scale: [80, 72, 64, 56, 48, 44, 40, 36, 32, 28, 24, 22, 20, 18, 16, 14]
  lineHeight: "size + 4px (80/84 … 36/40); 32/34, 28/32, 24/28, 22/24, 20/22, 18/20, 16/18, 14/16"
  styleNames: "<size>-<extrabold|semibold|regular>, e.g. 64-extrabold"
  banner-headline-desktop: { size: 56-72, weight: 800 }
  banner-headline-mobile: { size: 32-36, weight: 800 }
  banner-eyebrow: { size: "0.31-0.54 × headline", weight: 400 }
  banner-sub: { size: "0.5-0.87 × headline", weight: 400 }
  price-numeral: { size: "≈3 × headline", weight: 800 }
  cta-label: { size: 20, weight: 400 }
  legal: { size: 14-16, weight: 400 }

rounded:
  pill: 33px
  field: 12px

spacing:
  btn-y: 12px
  btn-x: 32px
  field-x: 12px
  gap: 10px

elevation:
  shadow-mini: "0px 0px 4px 0px #d9d9da"
  shadow-small: "0px 2px 8px 0px #d9d9da"
  shadow-big: "0px 4px 12px 0px #d9d9da"
  shadow-selected: "0px 2px 8px 0px #a09fa2"
  shadow-pressed: "inset 0px 4px 4px 0px #a09fa2"
  shadow-sticky-bottom: "0px -2px 12px 0px #d9d9da"
  shadow-color-mini: "0px 0px 4px 0px #e3d2e9"
  shadow-color-small: "0px 2px 8px 0px #e3d2e9"
  shadow-color-big: "0px 4px 12px 0px #e3d2e9"
  shadow-package-card: "0px 0px 16px 0px #e3d2e9"

components:
  button-gradient: { height: 50px, minWidth: 240px, padding: "12px 32px", radius: "{rounded.pill}", background: "{colors.brand-gradient}", text: "#ffffff 20/22 Regular", use: "on white/light grounds" }
  button-white: { height: 50px, padding: "12px 32px", radius: "{rounded.pill}", background: "#ffffff", text: "#810ea9 20/22 Regular", use: "on purple, dark or photo grounds" }
  button-white-gradient-text: { background: "#ffffff", text: "brand-gradient clipped to text", use: "marketing banners" }
  button-black: { background: "#000000", text: "#ffffff", width: 290px, use: "lead-form submit (\"שלח\")" }
  button-mobile: { height: 40-44px, minWidth: 178px }
  text-field: { size: "362×54", radius: "{rounded.field}", border: "1px {colors.field-stroke}", padding: "0 12px", text: "22 Regular, right-aligned", error: "border {colors.error} + message 16 Regular" }
---

## Overview

Cellcom's digital surfaces (website banners, carousels, lead forms, article banners, popups) speak one visual language: **deep violet, a curved wave, one typeface, Hebrew right-to-left.** Photography is warm, natural and Israeli, with violet accents (a purple suitcase, a lavender sweater, a violet rim light). Copy sits on the right in desktop and on top in mobile. The offer is the hero: big numerals, short plural-imperative headlines, a pill CTA.

Assets in this folder: `assets/cellcom-logo-white.svg` (original mark), `assets/cellcom-logo-purple.svg` (recolor of the same path in `primary`, pending brand-team approval), `assets/cellcom-wave.svg` (the signature wave, from the Home Carousel template), `fonts/` (RAG-Sans-Cellcom Light/Regular/SemiBold/ExtraBold, licensed for Cellcom work only), `tokens.json` (full token set with Hebrew usage notes).

## Colors

### Brand
- `primary` #810ea9 is Cellcom. Backgrounds, the wave, button text on white, links. White on it: 8.2:1.
- **Brand gradient** `primary` 16% → `primary-grad` 100%: buttons, waves, gradient headline words.
- `bright`, `light-grad`, `light`: light lavender grounds. Text on them in `primary` or `black` (primary on light 7.5:1).

### Dark
- `dark-banner` #4a0a61 → black: dark text panel. `dark-background` #13051a: night/tech scenes, images fade into it.
- `dark-card`, `dark-package`: cards on dark. `dark-gray-lines`: secondary text on dark.

### Accent rules (strict)
| Color | When |
|---|---|
| **Gold gradient** | The main accent besides purple: eyebrows, price numerals, holiday titles, pill outlines on dark purple |
| `yellow-energy` #f3fe7e | Cellcom Energy only, and %-discount highlights on dark purple |
| Red #ed1b2f / #d51124 | Golan Telecom customers only |
| `dark-salmon` #ff82a6 | Blurred glows (30–50% opacity, blur 60–100px) behind the wave seam. Never text |
| `error` | Form errors only, always with a message |
| `#9631ff`, `old-*` | Legacy. Do not use |
| Orange | Not part of the system (appeared once, in a partner campaign) |

## Typography

- One family: **RAG-Sans-Cellcom** (Regular 400, SemiBold 600, ExtraBold 800; Light 300 exists, rarely used). Fallback: Arial Hebrew, Arial.
- Fixed scale 80→14 (see front matter). Use whole sizes from the scale.
- **Hierarchy in a banner:** eyebrow Regular (0.31–0.54 × headline) → headline ExtraBold → sub Regular (0.5–0.87 ×) → offer → CTA Regular 20 → legal Regular 14–16.
- Headlines may **mix weights in one line** ("הצטרפו" Regular + "לסלקום Energy" ExtraBold) or run two lines ExtraBold + Regular.
- Line height ≈ 1.0 in banners. Balanced manual line breaks at phrase boundaries; a number gets its own line.
- Desktop right-aligned; mobile centered.

## The offer (price typesetting)

- Numeral ExtraBold, ≈3× the headline (e.g. 161 vs 52).
- `₪` to the LEFT of the number at ~0.5×. "רק ב-" / "החל מ-" to the right in SemiBold 0.2–0.4×. Agorot (".90") small SemiBold, superscript.
- "לחודש למשך חודשיים" in Regular below, often inside a gold-outlined pill.
- Price color: gold gradient or white with a violet glow. Not purple on dark. On light grounds, the brand gradient is fine.
- Free months are written in words ("ל-3 חודשים ללא עלות נוספת!") inside a box/ribbon, not enlarged.

## Layout

### Banner text block
- **Desktop (1920 wide, 500/480/440/335 tall):** right-aligned block, right edge at x≈1600 (320px inset), width 460–620px. Image in the left 50–55%, subject at x≈360–1110.
- **1280 crop:** the outer 320px on each side are cut on 1280 screens. Nothing essential there.
- **Mobile (430×480 / 375×466 / 390×390):** centered text in the top 40–55%; image in the bottom 45–55% behind a curve; legal above the image; 28px side crop on 375.
- Mobile type ≈ 0.54–0.66 of desktop; prices shrink less.

### Separating image and copy (never a hard box)
1. The **wave**: a big curved panel in `primary`/gradient with a salmon glow behind its seam (most common).
2. Image **fade to dark** (`dark-background` and family), for night, tech, Energy.
3. **Top fade to lavender** (#e9def5 100%→70%→0%) with dark text.
4. Product centered, copy on both sides (device launches).

### Recurring decoration
Neon-ring podiums, violet light bars and ribbons, glowing orbit rings around a hero object, the Cellcom star as a graphic element, soft bokeh. Shapes only; no emoji, no clip-art.

## Elevation
`shadow-color-*` (based on `bright`) for branded cards on light grounds; the gray `shadow-*` for neutral UI; `shadow-package-card` for package cards. Hover `shadow-color-hover`, press `shadow-pressed`.

## Components

### Buttons
Always a pill (`rounded.pill`), label Regular 20, 1–3 words, an action noun with ל-: "לרכישה", "להצטרפות", "לפרטים", "לפרטים והצטרפות", "לרכישה באתר". Gradient on light, white on dark/purple. Same size for every banner in a carousel. Focus: double ring, 2px white then 2px `primary`. Disabled: `gray-1` fill, `gray-disabled` text.

### Lead forms
Fields "שם מלא *" and "מספר טלפון *", black submit "שלח", consent line. Success: "נהיה בקשר! / קיבלנו את הפרטים שלכם, כבר נחזור אליכם". Failure: "משהו השתבש ולא הצלחנו לשלוח את הפנייה / ניתן לפנות לנציג ב-*3123". Fields, buttons and legal are always live, never baked into an image.

## Copy voice (Hebrew)
- Plural, second person, gender-neutral: "מצטרפים", "נהנים", "השאירו פרטים".
- Rhythmic pairs/triples: "הכי משתלם. הכי מהיר. הכי 5G", "הערבים מתקררים, הבינג' מתחמם".
- Structure: exclusivity eyebrow ("רק בסלקום…", "חדש בסלקום") → benefit headline → reassurance ("בלי לחכות לנציג", "בראש שקט").
- Product names stay Latin: 5G PRO, FiberTV, Energy, Gett & Connect, Galaxy Z Fold8.
- "!" for milestones ("המכירה החלה!"). No emoji.
- Legal: one line "*בכפוף לתקנון…" under the CTA, or a paragraph at the bottom.

## Special formats
- **Article banner set:** 1500×1560, 1920×335, 314×160, 273×160, usually image-only with large empty sky/side for site text. Title = question + promise ("טסים עם הילדים?" + "המדריך המלא ל…").
- **Device launch:** flat #f5f5f7 Apple-style canvas, no decoration, 3 phases (pre-order with date + countdown, pre-order live, "המכירה החלה! משלוח חינם עד הבית"); sticky 1300×80 (logo right, SemiBold 30 message, CTA left) and 375×86.
- **Memorial (יום הזיכרון):** pure black, one white ExtraBold sentence, one flag-and-candle photo. No purple, gold, CTA, logo or offer.
- **Holiday:** purple mood, gold title, one object, greeting only.
- **Sub-brands:** Golan (red, white slanted panel), Energy (yellow on dark), Elbit (navy, co-brand lockup, Elbit gold #c99d3d→#fff1b7→#c99d3d), AppRU Russian (left-aligned text inside the right slot, caps subs).

## Imagery
Photorealistic advertising photography; authentic Israelis 25–45, natural smiles; warm golden light plus violet accents. Devices glossy on a neon-ring podium. Subject in the left/center-left on desktop, lower half on mobile; the text side stays calm. Never text, logos or buttons inside a generated image.

## Do / Don't
- Do: one family, tokens only, wave or fade to separate, pill CTAs, offer as hero, RTL.
- Don't: hard boxes behind copy, more than one accent besides purple, purple prices on dark, emoji, orange, legacy `#9631ff`, essential content in crop zones, baked-in form fields.

## Known gaps
No spacing scale in the source file (values above come from components). No dark-mode mapping (dark tokens are colors, not a theme). Icon library (`icon/24|44|120|144/*`) lives in the Figma library "Website Design 2026" and is not exported here. Source: Figma "Design System" (templates section 7237:3272) and 45 pages of the "Campaigns" file, studied 2026-10.
