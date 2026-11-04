# Cellcom campaign study — Group A (Figma "Campaigns", zyp67jdVgIYSgUoyJD8XzM)

Method: section screenshots (1400px) + read-only use_figma dumps of text nodes (font/size/fill/align/bounds), rounded "button" nodes and image layers. All coordinates are relative to the banner frame (x from left; Hebrew is right-aligned, so the **right edge** = x+w matters).
Font everywhere: **RAG-Sans-Cellcom** (Regular / SemiBold / ExtraBold / Light). Only exception: "Samsung Sharp Sans Bold" for the Galaxy lockup.
Technical note: many text nodes carry a stacked fill `[gold gradient #c4a341→#e7d084, then solid on top]` – the gold gradient is a hidden base layer; the visible color is the top solid (white/black). Treat "gold" as a latent template style, not what renders.

---

## 1. Per page

### 1.1 "HBO טריפל" (1:106) — HBO Max + Cellcom tv+ + fiber "summer deal" campaign

**a) Triple main banner (2:28)** — desktop 25:4552 1920x500, mobile 25:4609 430x480, plus English versions (72:4811, 72:4846).
Layout: dark bg #020106; left ~55% is a tilted 3D wall of HBO show posters (image 153..1381 x); a big purple curved swoosh (vector, gradient #810ea9→#b100ed→#5f1ba8) separates image from text; text block right side, right edge x≈1588 (≈332px margin), width ≈683. Cellcom star+wordmark lockup top-right above headline. Small pink/orange bokeh glows sprinkled in the purple. Mobile: text stacked top-center, image wall in the bottom ~45% (y≈160–480) under a purple wave edge.
Hierarchy (desktop → mobile):
- Logo lockup "סלקום" star (#810ea9 star 61x55) → same, smaller
- Headline "במבצע קיץ בלעדי" → ExtraBold 58 white → ExtraBold 32 white
- 3 columns "גם | אינטרנט סיבים" / "גם | סלקוםtv+" / "גם | HBO max logo" → "גם" Regular 39, item ExtraBold 40.8 (2 lines) white, columns divided by vertical gold-gradient lines (stroke #c99d3d→#fff1b7→#c99d3d, 3.4px, drop shadow) → Regular 18.8 / ExtraBold 19.6
- CTA "לפרטים והצטרפות" → Regular 20 #bc32ce on white pill → Regular 19 gradient text (#810ea9→#bc32ce)
- Legal "שירות HBO Max Standard ללא עלות נוספת בתוכניות נבחרות..." → Regular 13 #e3d2e9, 600px wide, y=435 (bottom) → Regular 12, 286px wide, centered, *above* the image area (y=226)

**b) Lead form (72:4373)** — desktop 72:4512 1920x670, mobile 72:4559 375x453 (+English).
Layout: purple-to-black gradient bg with glows; everything centered: Cellcom lockup, headline "במבצע קיץ בלעדי" ExtraBold 59 (mobile 46), 3 columns "גם" (Regular 39 / item ExtraBold 34; mobile 23/22), then a hero product image (TV with HBO Max screen + router + set-top box, 694x413) at bottom center, legal Regular 13 #e3d2e9 at the very bottom (y=630). Mobile same, legal 12 at y=411. (Leftover text "חבילות סלולר 5G PRO" EB56 + sub Regular 32 still exists in 72:4512, not visible in render.)

**c) HBO Cassandra section (9:248)** — desktop 9:249 1920x660, mobile 7:118 390x660.
Layout: near-black bg #161816 with central glow; left = tilted poster quilt + giant HBO Max logo (417x300); right text, right edge x=1665 (255 margin). Mobile: quilt+logo top, text centered below.
- Title "HBO Max" → ExtraBold 80 white (desktop AND mobile, not scaled)
- Sub "כל הסדרות שכולם מדברים עליהן⏎במקום אחד" → Regular 24 white, 2 lines (both)
- Offer ribbon "3 חודשים ללא עלות נוספת" → small text on a purple horizontal ribbon with faded ends (seen in render)
- CTA "לפרטים" → white pill 260x50 r25 (mobile full-width 339x50), purple label

**d) VAS HBO (30:4345)** — asset-delivery board "images to send": desktop and mobile crops of the poster quilt + HBO Max logo, no text.

**e) Packages marketing (1134:6887, 1143:7448)** — 1141:7168 2000x726 light mode, 1145:7449 1920x500 dark, mobiles 390x676 / 390x480.
Two cards (HBO Max Premium / Standard): show image top, black-gradient body, title SemiBold 36 white, 3 icon bullets Regular 20 white ("צפייה עד 4 מכשירים בו זמנית", "צפייה באיכות 4K Ultra HD עם Dolby Atmos", "עד 100 הורדות לצפייה במובייל"), footnote under cards Regular 20 #a09fa2, centered. Dark version bg gradient #000→#131212→#000. Mobile stacks cards vertically.

**f) Summer deal — chosen option (235:4835)** — desktop 243:6846 / 243:7020 1920x500, mobile 243:6917 / 243:6977 430x480. Two variants: purple-gradient CTA vs white CTA.
Layout: same as (a) (poster wall left, purple curved swoosh, carousel arrows 60x60 at both sides, carousel dots + pause at bottom-left of text area). Text right edge x=1584 (336 margin), width ≈553, everything right-aligned. Mobile: text top, image wall bottom (y≈236–480) behind a purple wave.
- Eyebrow "סלקום במבצע קיץ בלעדי" + star icon → Regular 28 white → Regular 17.8
- Headline "גם סלקוםtv+ וגם [HBO max logo]" → ExtraBold 50.6; "גם"/"וגם" in #b959ee (light purple), product names white/logo → ExtraBold 30.6
- Offer box "ל-3 חודשים ללא עלות נוספת!" → ExtraBold 36.8 white inside an outlined box 483x85, r13, gradient stroke 3.45px (#a213ff→#7a12be→#800ea8→#b959ee) → ExtraBold 22.2
- Sub "בהצטרפות לאינטרנט הסיבים של סלקום" → Regular 36.8 white → Regular 22.2
- CTA "לפרטים והצטרפות" → pill 258x50 r100, fill gradient #810ea9→#bc32ce + white label Regular 20 (variant 2: white pill, purple label) → Regular 18
- Legal "בהצטרפות לחבילה ייעודית הכוללת אינטרנט סיבים וסלקום tv+..." → Regular 13 #e3d2e9, 508–553 wide, 3 lines, bottom (y=436) → Regular 12, 369 wide, centered, above image (y=273)

**g) HBO Golan (212:4490)** — desktop 212:4532 1920x335, mobile 212:4491 375x390. Sub-audience (Golan customers).
Layout: left black with poster wall + HBO Max logo (200x144); right a white panel with a slanted left edge bordered by a **red #ed1b2f 10px** stroke. Black text, red price. No CTA. Mobile: white top, image bottom with red slanted divider.
- Headline "לקוחות גולן נהנים יותר" → ExtraBold 60 black → ExtraBold 33.6
- Sub "מצטרפים למבצע קיץ של סלקום ומקבלים" → Regular 33.5 black → Regular 18
- 3 columns "גם…" (Regular 35 / ExtraBold 36.6, black dividers 2.4px) → 19.6/20.5
- Price: "רק⏎ב-" SemiBold 31.8 stacked, "99" ExtraBold 113.5, "₪" ExtraBold 46.8, all red #ed1b2f → 20.7 / 72.7 / 30.5
- Price note "בחודש למשך 3 חודשים" → SemiBold 21.5 red → SemiBold 14

**h) Exit popup HBO (265:4566)** — desktop 265:4567 800x500, mobile 265:4614 280x430.
Desktop: right half purple image panel (glows + poster wall at bottom under a purple wave), text centered; left half white form. Mobile: purple panel top (y 0–170), form below.
- Kicker "חבל לפספס את זה!" → SemiBold 30 white → SemiBold 16
- Offer "3 חודשים⏎ללא עלות נוספת" → ExtraBold 47.3 white → ExtraBold 25.4
- Line "גם סלקוםtv+ וגם HBO max" → "גם/וגם" ExtraBold 30.6 #b959ee → 18
- Condition "*בכפוף לתנאי המבצע" → Light 14 #e3d2e9 → Light 12
- Form title "אני רוצה את ההטבה" → ExtraBold 24 black → ExtraBold 20
- Inputs 260x50 r8 stroke #c6c6c6, placeholder Regular 16 #757475, required "*" ExtraBold 18 #9631ff
- Consent text Regular 14 black, link "המשך" #9631ff underlined
- CTA "תחזרו אלי" → solid #810ea9 pill 260x50 r25 (mobile 240x36)

**i) Mockup page 16:7214** (low-res view only): full HBO landing pages desktop+mobile, light lavender footers; hero banners reuse the summer-deal style.

### 1.2 "באנר הטבות חו״ל" (178:4484) — abroad benefits
Frames: 322:5911 / 358:6269 1920x335; 358:6289 / 358:6312 375x390.
Layout: very dark plum bg #180017 with a large magenta radial glow; center-left a glossy purple/neon montage of world landmarks (Sydney Opera House, Harbour Bridge, Burj al Arab, pagoda, Christ the Redeemer) with a white airplane flying above; text right of center, a big Cellcom star (135x119, gradient #810ea9→#bc32ce) placed at the right of the headline (desktop) / above it (mobile). Headline only — no CTA, no legal.
- Headline "בחרו את ההטבה⏎שהכי מתאימה לכם" (variant: "ההטבה שלכם⏎מחכה כאן") → ExtraBold 64 white, 2 lines, white outer glow → ExtraBold 40.4, 3 lines, right-aligned, top-right; image bottom half.

### 1.3 "רכיבי עמוד חו״ל" (1949:6797) — abroad lobby, autumn 2026 (1949:6798)
7 hero image options 1866x968 (Paris, Eiffel, autumn leaves, Kyoto pagoda + Fuji, Santorini…). Light, pastel sky photos that fade to white at the bottom; overlaid page UI: centered headline "אורזים חבילה של סלקום חו"ל" (black ExtraBold) + "ונשארים עם המספר בכל מקום בעולם!" (black Regular), tabs (חיפוש חבילה / אזור אישי / מנוי עסקי), search card with "לאן טסים?" / "באיזה תאריכים?" and a purple pill CTA "תמצאו לי חבילה »". Image decoration lives in the corners (leaves, lanterns, pagoda) so the center stays clear for text.

### 1.4 "באנר 5g - עמוד הבית" (278:4927)
Frames: 511:28, 984:8, 985:1771, 1012:6330 1920x440; mobile 622:62, 1026:6379 430x480.
Layout: right ~55% saturated purple gradient (#bc32ce→#810ea9 + radial #810ea9 glows); left image (Tel Aviv beach skyline at sunset + giant phone with neon "5G", light streaks) cropped with a convex curved edge. Text right-aligned, right edge x≈1601 (≈316 margin), block ≈926–1604 (≈680 wide). Mobile: text centered top half, image strip at bottom (y 236–480) with a curved top edge.
- Lead + headline on one row: "הכי משתלם, הכי מהיר," Regular 44.8 + "הכי 5G" ExtraBold 110 → mobile: lead Regular 18 on its own line, "הכי 5G" ExtraBold 59
- Price row: "החל מ-" SemiBold 44.8, "39" ExtraBold 110, "90" SemiBold 40.7 superscript, "₪" ExtraBold 72.9 (left of number) → 24.8 / 83.6 / 24.8 / 40
- Price note "לחודש למנוי למשך חודשיים" Regular 24 inside a gold-outlined pill 292x43 r10 (stroke #e3bb5f→#fcdc85→#e3bb5f, 2.6px) → Regular 12.4
- CTA "לרכישה" → white pill 240x50 r33, label Regular 20 #810ea9 → mobile "להצטרפות" 178x40
- Legal "*בכפוף לתנאי התכנית" → Regular 16 white, directly under CTA → Regular 16 (not scaled)
Variants (978:1765, 1012:6376): comma vs period ("הכי משתלם. הכי מהיר." SemiBold 46), "הכי 5G" placed left vs right of the lead, the price note without pill but with thin glowing lines (#ebb2f9 0.2px, layer blur 7) above/below; mobile variant puts the note as 2 lines left of the price.

### 1.5 "תמונות לובי חו״ל נבחרות" (284:5159)
284:5160 Thailand (desktop 284:5172 1866x968, mobile 284:5161 390x676) and 284:5188 Santorini (text-free plate).
Pastel pink/lilac sunset photos, bottom ~40% fades to white for the page UI. Desktop text is baked into the image; mobile has live text: "טסים עם סלקום חו"ל" ExtraBold 24 black + "ונשארים עם המספר שלכם בכל מקום" Regular 24 black (right-aligned, top). Note the mobile shortens the desktop copy.

### 1.6 "דינמיקה" (315:5481) — co-brand for Dynamica club members
Frames: 402:4860 / 421:5032 1920x500; 402:4778 / 421:4951 375x480.
Layout identical to Golan (black poster-wall left, white slanted panel right) but the edge stroke is **yellow #f7d856 10px**, "dynamica" partner logo top-left of the white panel, accents orange/yellow.
- Headline "החברים של דינמיקה נהנים יותר!" → ExtraBold 55.2 black → 28
- Sub "מצטרפים למבצע קיץ של סלקום ומקבלים" → Regular 42.2 → 22
- Columns: "גם" SemiBold 33.7 **#e19c25** (orange), items black, black 2.9px dividers → 24.3
- Price "ב- 99₪" → "99" ExtraBold 120 black, "₪" 59.8, "ב-" SemiBold 40.6; note "בחודש למשך 3 חודשים" SemiBold 27.4 → mobile 109 / 45.7 / 31 / 21
- "+" ExtraBold 145 joins price to the gift
- Gift: yellow rounded badge (v1) "הטבה שווה במיוחד" ExtraBold 20 / "₪150" ExtraBold 120 (₪ 60) / "לרכישת" SemiBold 24 / "SAMSUNG Galaxy S26 | S26+" Samsung Sharp Sans Bold 21.6; v2 yellow circle bleeding over the image/panel edge, "ומקבלים / 150₪ / לרכישת מכשיר מסדרת SAMSUNG Galaxy S26" (mobile 75.1 / 17.5 / 12)
No CTA, no legal.

### 1.7 "לינק למדריכי HBO" (471:4576)
471:4595 1920x360: lavender-white gradient rounded panel, centered "לעמוד מדריכי הצטרפות ל-HBO Max" SemiBold 60 black, gradient pill CTA 240x50 r33 (#810ea9→#bc32ce) "כניסה". Plus a VAS carousel card 358x318 (image top, title bold 2 lines, purple chevron), a gradient pill "למדריכי הצטרפות ל-HBO Max", a white service button "סינון תכנים ללא עלות".

### 1.8 "עמוד נחיתה ל APPRU" (560:4567) — Russian-language VOD app
577:5369 desktop 1920x2394 page, 577:5444 mobile 390x2675.
Hero 577:5370 1920x335: purple gradient bg #810ea9→#bc32ce on the right; 4 portrait stills of series characters on the left separated by thin slanted cuts. Russian copy is **left-aligned (LTR)** starting x=1017:
- Headline "Онлайн-кинотеатр APP.RU всего за 9.9 шекелей в месяц" → ExtraBold 40 white, 2 lines → ExtraBold 22 centered
- Sub "для абонентов пакета русскоязычных каналов Cellcom tv+" → Regular 24 → 18
- Legal "*Доступно только для клиентов с приставкой Master Box ⓘ" → Regular 16 (Master Box underlined) → 14
- CTA "Подключиться" → white pill 194x40 r33, purple label
Then a feature panel (rounded purple card, image left, 4 icon+text features), a Hebrew content strip "צפו בכל אלו ועוד הרבה יותר בדיגיטל" on black, purple pill CTA "Приобрести APP.RU", light-lavender footer.

---

## 2. Cross-page patterns

**Text block position & width**
- Desktop 1920 banners: text is right-aligned in the right half; right edge x≈1563–1604 (margin ≈316–357px; HBO section 1665 → 255). Block width ≈520–690px. Image occupies the left 50–55%.
- Mobile 375–430: text stacked in the top ~50% (y≈20–270), centered horizontally (most nodes are centered or the right-aligned nodes are visually centered), image in the bottom 45–50% behind a curved/slanted divider. Legal moves *above* the image on mobile (desktop: bottom of text column).
- Mobile/desktop size ratio ≈ 0.54–0.63 for headlines (58→32, 50.6→30.6, 110→59, 60→33.6, 64→40.4, 40→22); prices shrink less (110→83.6 = 0.76, 113.5→72.7 = 0.64, 120→109 = 0.9 in Dynamica). Legal barely changes (13→12, 16→16). Exception: HBO section keeps 80/24 on both.

**Size ratios (relative to headline = 1)**
- Summer deal: eyebrow 0.55 / headline 1 (50.6) / offer 0.73 / sub 0.73 / CTA 0.40 / legal 0.26.
- 5G: lead 0.41 / "הכי 5G" 1 (110) / price 1.0 / "החל מ-" 0.41 / ₪ 0.66 / agorot ".90" 0.37 / note 0.22 / CTA 0.18 / legal 0.15.
- Golan/Dynamica: headline 1 (55–60) / sub 0.56–0.76 / price ≈1.9–2.2× headline (113–120).
- CTA label is almost always Regular 20 desktop, 18–19 mobile.

**Price & gift typesetting**
- Big number ExtraBold (110–120 desktop); ₪ ExtraBold ≈0.4–0.66 of the number, set to the left of the number (RTL end); prefix ("החל מ-", "רק⏎ב-", "ב-") SemiBold ≈0.3–0.4, sometimes stacked on 2 lines right of the number; agorot "90" SemiBold superscript ≈0.37, top-aligned; duration note ("לחודש למנוי למשך חודשיים", "בחודש למשך 3 חודשים") under the price, SemiBold/Regular ≈0.2.
- Price color = the accent of that banner (red #ed1b2f for Golan, black on white for Dynamica, white on purple for 5G).
- "Free months" offers are written as words, not prices: "ל-3 חודשים ללא עלות נוספת!", "3 חודשים ללא עלות נוספת", framed (outlined gradient box, ribbon) rather than enlarged.
- Gift "₪150" sits in a yellow badge/circle, connected by a big "+".

**Accent colors besides purple**
- Brand purples: #810ea9 (primary, CTA fill, star), #bc32ce (gradient end), #b100ed/#5f1ba8 (swoosh), #9631ff (form asterisks, links, mobile bg), #b959ee (light purple for "גם/וגם" connective words), #e3d2e9 (legal on dark).
- Gold gradient: vertical column dividers (#c99d3d→#fff1b7), the 5G price-note pill outline (#e3bb5f→#fcdc85), and as hidden base fill on many texts — used as a "premium" touch on dark purple.
- Red #ed1b2f: Golan (regional sub-brand) panel edge + price.
- Yellow #f7d856 / orange #e19c25: Dynamica co-brand (edge, badge, "גם").
- Pink/orange bokeh dots on purple backgrounds (HBO summer, popup).

**Decorative devices**
- Big curved purple swoosh/wave separating image and text (summer deal, triple, popup mobile wave); 5G uses a convex curved image mask.
- Slanted white panel with a 10px colored edge (Golan red, Dynamica yellow) on black.
- Radial glows (#810ea9 at 0.8 → transparent), white outer glow on headlines (abroad), glowing hairlines (5G variant).
- Outlined gradient-stroke box for the offer (summer deal), ribbon with faded ends (HBO section), gold pill (5G).
- Cellcom star used as a graphic element (abroad: 135px gradient star next to the headline; eyebrow star icon in summer deal).
- Carousel UI baked into desktop home-carousel mocks (arrows 60x60 at x=24 and x=1896, dots + pause).

**Image vs text separation**: curve/wave (purple), slanted edge with colored stroke, dark gradient fade (HBO section: image melts into #161816), or white fade at bottom (lobby heroes). Images are glossy 3D/neon (poster walls tilted in perspective, neon 5G phone, neon landmark montage).

**CTA**: pill shape (r25–r100, height 50 desktop / 36–40 mobile, width 240–260 desktop). On dark/purple banners: white pill with purple label (#810ea9 / #bc32ce) or purple gradient pill (#810ea9→#bc32ce) with white label. On white: solid #810ea9 or gradient pill. Labels: "לפרטים והצטרפות", "לפרטים", "לרכישה", "להצטרפות" (mobile 5G), "תחזרו אלי", "כניסה", "תמצאו לי חבילה »". Partner/price-only banners (Golan, Dynamica, abroad) have no CTA.

**Copy patterns (Hebrew)**
- Plural imperative / 2nd person plural: "בחרו את ההטבה שהכי מתאימה לכם", "תמצאו לי חבילה", "מצטרפים… ומקבלים".
- Repetition structures: "הכי משתלם, הכי מהיר, הכי 5G"; "גם X | גם Y | גם Z"; "גם סלקוםtv+ וגם HBO max".
- Audience-led headlines: "לקוחות גולן נהנים יותר", "החברים של דינמיקה נהנים יותר!".
- Offer phrasing: "ללא עלות נוספת", "החל מ-", "רק ב-", "בחודש למשך 3 חודשים", "חבל לפספס את זה!", "הטבה שווה במיוחד".
- Exclamation marks frequent on offers/kickers.
- Legal starts with "*בכפוף לתנאי…" (short) or a full paragraph "בהצטרפות לחבילה… / שירות HBO Max Standard ללא עלות נוספת בתוכניות נבחרות…".

**Line breaks**: headlines 1 line desktop, 2–3 lines mobile; two-line headlines break at the natural phrase ("בחרו את ההטבה / שהכי מתאימה לכם", "3 חודשים / ללא עלות נוספת"). Column items break product names ("אינטרנט / סיבים"). Prefix "רק / ב-" stacked.

**Legal placement**: desktop: last element of the text column (y≈435 of 500), Regular 13 #e3d2e9 on dark, or a short "*בכפוף…" Regular 16 white directly under the CTA. Mobile: Regular 12, centered, above the image strip.

---

## 3. Best example frames
1. **243:6846** (summer deal desktop, purple CTA) + **243:6917** (mobile) — the most complete hierarchy (eyebrow → headline with colored connective words → outlined offer box → sub → gradient pill CTA → legal), clear image/swoosh/text split, good desktop↔mobile adaptation.
2. **511:28** (5G desktop) + **622:62** (mobile) — reference for price typesetting (prefix / big number / superscript agorot / ₪ / note in gold pill) and purple-gradient-vs-photo split with curved mask.
3. **212:4532** (HBO Golan desktop) — clean light-panel variant with slanted red edge; shows the "גם/גם/גם" columns and a stacked "רק ב- 99₪" price.
4. **402:4860** (Dynamica desktop) — price + "+" + gift badge composition, co-brand accent swap (yellow/orange) on the same template.
5. **265:4567** (exit popup desktop) — compact offer typography plus form styling (inputs r8 #c6c6c6, #9631ff asterisks, #810ea9 pill).

## 4. Inconsistencies / surprises
- Hidden gold gradient base fills under white/black text on almost all HBO/Golan/Dynamica text nodes (template residue).
- 72:4512 (lead form) still contains "חבילות סלולר 5G PRO" + sub text from another campaign; 622:62/1026:6379 contain an "ע"פ סקר nPerf… 2025" text node in black on dark bg (not visible).
- CTA corner radius varies (25, 33, 100) and button text color varies (#bc32ce vs #810ea9) for the same white-pill style.
- HBO section mobile keeps desktop font sizes (80/24), unlike every other set.
- Legal sizes vary 12–16 and color #e3d2e9 vs white without clear rule; 5G mobile legal (16) is larger than its price note (12.4).
- Textual inconsistency in 5G: comma vs period between "הכי משתלם / הכי מהיר", and mobile CTA "להצטרפות" vs desktop "לרכישה".
- Abroad and partner banners (Golan, Dynamica) have no CTA at all.
- APP.RU hero copy is left-aligned LTR Russian on a Hebrew site; the feature card and CTAs follow, but some Hebrew strips sit in between.
- Lobby desktop heroes have text baked into the image, while mobile has live text with shorter copy ("טסים עם סלקום חו"ל").
- Some API screenshots render Hebrew glyph order oddly (e.g. 1012:6376, 471:4647, APP.RU footer); the stored characters are in correct logical order, so this is a render artifact.
