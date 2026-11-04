# תמונות לבאנרים של סלקום: סגנון, מתכון וכלים

## דוגמאות מאושרות (קובץ Campaigns `zyp67jdVgIYSgUoyJD8XzM`)

| node | קמפיין | מה ללמוד ממנו |
|---|---|---|
| `686:1022` | Galaxy Z Fold8 Buy&Try | מוצר "הירו" על **פודסט עגול עם טבעת ניאון סגולה**, חדר בטון כהה עם **קווי ניאון סגולים/מג'נטה אלכסוניים**. גרסה 2: פאנל גרדיאנט סגול מעוקל מימין לטקסט |
| `1756:436` | טריפל סלקום, סתיו | **לייפסטייל חם**: סלון ביתי, תאורת שעת זהב, נרות, POV של ספל תה ביד, עלי סתיו בפוקוס קדמי, טלוויזיה עם תוכן. פאנל טקסט כהה-סגול מימין, eyebrow ומחיר בזהב |
| `1826:204` | עוברים דירה | **דירה ישראלית בהירה ושמשית**, קרטונים, זוג צעיר ומגוון, בגדים/כריות **בגווני סגול-לבנדר** כאקססורי מותג, נתב סלקום לבן עם כוכב. גרסאות: רקע לבנדר בהיר עם טקסט סגול / גל סגול כהה |
| `1719-101` | 4 שדרוגים לחבילת הסלולר | אישה בסוודר לבנדר עם טלפון בבית קפה בתל אביב עם **אובך סגול**; **הולוגרמות אייקונים זוהרות** (5G, מגן, SIM, וי) במסלולי אור; טלפון תלת-ממדי מבריק עם גלובוס הולוגרפי |

לפני כל ייצור תמונה אפשר להוריד את הדוגמאות (`get_screenshot`) כדי לכייל את הסגנון. בכלים שמקבלים reference image, צרף אותן.

## ה-DNA החזותי

- **פלטה:** סגול שולט (`#810ea9`, `#bc32ce`), זוהר מג'נטה-ורוד (`#ff82a6`), לבנדר בהיר (`#e3d2e9`). בסצנות לייפסטייל: אור טבעי חם (שעת זהב) **בתוספת** נגיעות סגולות (תאורת rim סגולה, אובך, אקססוריז).
- **צילום:** פוטוריאליסטי, איכות פרסומת, עומק שדה רדוד, בוקה רך. לא איור ולא קרטון (אלא אם התבקש).
- **אנשים:** ישראלים אותנטיים 25–45, מגוונים, חיוך טבעי, לא פוזה של סטוק. לבוש יומיומי עם פריט בגוון סגול/לבנדר.
- **מוצרים:** מכשירים מבריקים, נקיים, זווית 3/4, השתקפות. פודסט ניאון למבצעי מכשירים.
- **אלמנטים טכנולוגיים:** הולוגרמות זוהרות, מסלולי אור, אייקונים צפים (5G, מגן, גלובוס) בסגנון glass/neon סגול.
- **תלת-ממד מבריק** (כמו בכריכת ה-DS: סולם וקונוסים שקופים סגולים): לנושאי שירות/תמיכה/מופשט.

## חוק הקומפוזיציה, הכי חשוב

הטקסט בעברית יושב **בצד ימין** בדסקטופ ו**למעלה במרכז** במובייל. לכן:
- **דסקטופ:** הנושא בשליש השמאלי-מרכזי. הצד הימני (≈45%) רגוע, כהה או אחיד, בלי פרטים חשובים. אחרי זה הגל הסגול/הפאנל יכסה אותו בכל מקרה.
- **מובייל:** הנושא בחצי התחתון. החלק העליון (≈40%) רגוע.
- **אזורי חיתוך** (ראה `templates.md`): שום פרט חשוב (פנים, מוצר, לוגו) באזורים האדומים.
- **אף פעם** לא לבקש מהמודל טקסט, לוגו או כפתור בתוך התמונה. הטקסט נבנה בפיגמה.

## קטאאוט מול צילום מלא
`extract-spec.js` מסמן כל שכבת תמונה ב-`aboveDecor`:
- **`aboveDecor: true` (למשל Home Carousel):** התמונה יושבת **מעל** הגל הסגול. צריך **נושא מבודד** (אדם/מוצר) בלי רקע, כדי שהגל והזוהר ייראו מאחוריו. בפרומפט: `isolated subject, studio shot on a plain solid light-gray background, violet rim light` ואז הסרת רקע מקומית עם `cutout.py` (rembg), לפי `figma-workflow.md` שלב 3. (רקע אפור-בהיר אחיד נותן חיתוך נקי יותר משחור.)
- **`aboveDecor: false` (למשל Marketing Banner):** צילום מלא. הגל מונח מעליו ומכסה את צד הטקסט.

## מתכון פרומפט (באנגלית, למודל)

```
[SUBJECT & ACTION], [SETTING in Israel], [LIGHTING: warm natural light with soft purple and magenta accent glow / dark scene with purple neon light lines],
Cellcom brand palette: deep violet #810ea9, orchid #bc32ce, soft pink glow #ff82a6, lavender accents,
photorealistic advertising photography, shallow depth of field, soft bokeh, high-end commercial look, clean and premium,
composition: main subject placed in the LEFT third of the frame, RIGHT half kept calm, dark and uncluttered as negative space for text,
no text, no letters, no logos, no watermark, no UI
```
במובייל החלף את שורת הקומפוזיציה ב:
`composition: main subject in the LOWER half, centered, UPPER 40% calm and uncluttered as negative space for text`

### פרומפטים לפי סוג קמפיין
- **מבצע מכשיר:** `[device] standing on a round glossy black podium with a glowing violet neon ring, dark concrete room with diagonal violet and magenta neon light strips, reflections on the floor`
- **לייפסטייל/בית (טריפל, TV, סיבים):** `cozy Israeli living room, [season/time] , person relaxing [with tea/remote/phone], TV glowing in the background, warm golden-hour light, subtle purple accent lights, foreground [seasonal element] softly out of focus`
- **סלולר/5G:** `young Israeli woman in a lavender sweater smiling at her smartphone, [Tel Aviv café / home], floating glowing holographic icons (5G, shield, globe, SIM) orbiting around the phone in violet neon light trails`
- **טכנולוגיה מופשטת:** `glossy 3D smartphone floating at an angle, holographic globe hovering above the screen, violet and magenta energy rings, dark purple gradient background, premium tech render`
- **מעבר דירה/התקנה:** `bright sunny Israeli apartment with cardboard moving boxes, young couple unpacking, one sitting on the sofa with a phone, purple cushions and clothing accents, white home router on a box`

## כלים: הפייפליין

> **הפייפליין המאושר (2026-10-14), בלי Weave ובלי עלות נוספת:**
> 1. **יצירה עיקרית: Figma AI** `generate_image`. `gemini-3.1-flash-image` ללייפסטייל, `gpt-image-2.5-sunburst` למוצרים וקומפוזיציה מדויקת. כלול במנוי Figma של הצוות.
> 2. **סקיצות וכיוונים, וגיבוי: Z-Image Turbo מקומי**: `<skill-dir>/tools/generate-local.sh "<prompt>" out.png 1536 640 [seed]`. חינם ואופליין, בערך 30–60 שניות לתמונה. מתאים ל-3 הכיוונים, ואז הכיוון שנבחר עובר ל-Figma AI.
> 3. **הגדלה: Real-ESRGAN מקומי**: `tools/upscale.sh in.jpg out.png 2`. **פי 2 כשיש פנים בתמונה** (פי 4 מעוות פנים קטנות), פי 4 רק למוצרים ולנופים. במקום Magnific.
> 4. **הסרת רקע: rembg מקומי**: `cutout.py`.
> 5. **Magnific (מחובר מ-2026-10-19, שרת MCP `magnific`, מנוי Business עם מאגר קרדיטים משותף):**
>    - **יצירה:** `images_generate`, ‏`mode: "seedream-5-pro"` (100 קרדיטים לתמונת 2K 21:9, מעולה ללייפסטייל עם `references` מסוג `style`). חלופות: Nano Banana Pro ‏`imagen-nano-banana-2`, ו-GPT 2.5 ‏`gpt-2-mini` עם `transparentBackground`.
>    - **הגדלה:** `images_upscale`, ‏`mode: "ultra-photo"` + `precisionPreset: "portraits"`. העלות לפי גודל המקור: 90 עד 1,080 קרדיטים, ולכן לא מגדילים תמונה שכבר בגודל 3000px.
>    - **הסרת רקע:** `images_remove_background`. **עריכה של אזור:** `images_retouch`. **הרחבת קנבס:** `images_expand` (למשל להוסיף מרווח מעל הראש).
>    - **זרימה:** `simulate_cost` לפני כל ריצה, ואז `creations_upload_image` (URL ציבורי) או `creations_request_upload` (קובץ מקומי), יצירה, `creations_wait`, הורדה ב-curl, ולבסוף `upload_assets` לפיגמה או `publish asset:true` לקנבס.
>    - Weave רק אם המשתמש ביקש במפורש.
> - תמונה מקומית נכנסת לפיגמה דרך `upload_assets` עם `nodeIds` ו-`currentPageId` (ראה `figma-workflow.md`).


| שלב | כלי | מתי | עלות משוערת |
|---|---|---|---|
| סקיצות/כיוונים | Figma `generate_image` · `gemini-3.1-flash-lite-image` | 3 הכיוונים הראשונים | Figma AI credits, זול |
| **גרסה סופית** | **Weave · Nano Banana Pro** + תמונות ייחוס | אחרי שהמשתמש בחר כיוון. צילום לייפסטייל, סצנות | ~11 Weave credits |
| **גרסה סופית, חלופה** | **Weave · GPT Image 2.5** (Sunburst) | מוצרים ומכשירים, קומפוזיציה מדויקת, **קטאאוט עם רקע שקוף** | ~8 |
| **אפסקייל** | **Weave · Magnific** | כל תמונה סופית שרוחב היעד שלה (×סקייל ייצוא) גדול מרזולוציית המקור | ~18 |
| הסרת רקע | `cutout.py` מקומי (rembg) · או Weave Bria | קטאאוטים (`aboveDecor:true`) | חינם / ~0.6 |
| הטמעה | `upload_assets` עם `nodeIds:[slot]` | תמיד בסוף | — |

### Weave: כללי עבודה (מחובר, נבדק 2026-10-14)
- **כל ריצה בתשלום:** `weave_run_model` בלי `acknowledgedCost` מחזיר הצעת מחיר → **AskUserQuestion עם Approve/Cancel לכל ריצה** (אפשר לרכז כמה ריצות מצוטטות בשאלה אחת, כל אחת עם המחיר שלה) → הרצה עם `acknowledgedCost`. לא מריצים בלי אישור.
- פולינג: `weave_get_model_run_output` עם ה-predictionIds. הורדה ב-curl לתיקיית ה-scratchpad.
- אם Weave מחזיר "not linked": חזרה ל-Figma `generate_image` (`gemini-3.1-flash-image`) לגרסה הסופית, ודיווח למשתמש.

### Nano Banana Pro (גרסה סופית)
- id `af5a6789-c7af-4c46-9a42-70222654e55b` (`fal-ai/nano-banana-pro/edit`)
- inputs: `prompt`, `images` (עד 14 תמונות ייחוס, https URL או asset object)
- params: `aspect_ratio` (`21:9` לדסקטופ רחב, `16:9`, `4:5`/`3:4` למובייל, `1:1`), `resolution` (`2K` ברירת מחדל, `4K` לדסקטופ 1920 בייצוא 2x)
- **תמונות ייחוס לנעילת סגנון:** הרץ `get_screenshot` על 1–2 הדוגמאות המאושרות הרלוונטיות (טבלת הדוגמאות למעלה, `fileKey: zyp67jdVgIYSgUoyJD8XzM`) והעבר את `image_url` שחוזר כ-https ישירות ל-`images`. בפרומפט: `Match the lighting, color grading and photographic style of the reference images. Do not copy their text, layout or people.` + הסקיצה שנבחרה כייחוס הקומפוזיציה.
- דסקטופ ומובייל: שתי ריצות עם אותן תמונות ייחוס ואותה סקיצה, ופרומפט קומפוזיציה שונה. התמונה הסופית של הדסקטופ נכנסת כייחוס נוסף למובייל, כדי לשמור על אותה דמות וסצנה.

### GPT Image 2.5 (Weave)
- id `2db90e64-51dd-45b2-870a-66d19a81118e` (`gpt-image-2.5`). inputs: `prompt`, `images` (עד 16 ייחוס/עריכה), `mask` (לעריכה מקומית).
- params: `model` `"Sunburst"` (איטי ומדויק, לקמפיין) / `"Flare"` (מהיר); `quality` `"high"`/`"xhigh"`; `background` **`"transparent"` לקטאאוט** (חוסך הסרת רקע); `image_size` `landscape_16_9` / `portrait_4_3` / `square_hd`, או מותאם: כפולות 16, עד 3840 לצד, **יחס עד 3:1**, ולכן לבאנר 1920×500 מייצרים 1920×640 ושכבת התמונה חותכת; `output_format` `"png"` לשקוף, `"jpeg"` לצילום.
- מתי לבחור בו על פני Nano Banana Pro: מכשיר או מוצר מבודד, צריך PNG שקוף, או עריכה מקומית עם mask (למשל להחליף מסך בטלפון).
- **ChatGPT Images 2.0** (id `zeSQQxxjcaVdWWunD60J1`, `model: "GPT Image 2"`) ו-**Edit** (`gVM2rcm5yygP8EEtR1os1`): חלופה, בלי תמונות ייחוס בגרסה הרגילה.
- חשבון ChatGPT של המשרד לא נותן גישת API. שימוש ישיר ב-OpenAI רק עם `OPENAI_API_KEY` שהמשתמש הגדיר בעצמו בסביבה. הסוכן לא מבקש, לא מקליד ולא שומר מפתחות.

### Magnific (אפסקייל ושיפור)
| מודל | id | שימוש | הגדרות מומלצות |
|---|---|---|---|
| **Precision Upscale V2** | `kMI4HnqWscrhz5Haxpd7` | **ברירת מחדל**: נאמן למקור, בלי "המצאות" | `flavor: "photo"` (צילום) / `"sublime"` (רנדר 3D), `scale_factor: 2`, `sharpen: 40`, `smart_grain: 5`, `ultra_detail: 25` |
| Magnific Upscale (creative) | `iKH4HnqWscrhz5Haxob5` | כשהמקור רך מדי וצריך להוסיף פרטים | `engine: "magnific_sharpy"`, `optimized_for: "films_n_photography"` (או `"3d_renders"`), `creativity: 0`, `resemblance: 3`, `hdr: 1`, `scale_factor: "2x"`, ו-`prompt` = הפרומפט המקורי |
| Skin Enhancer | `kLM4HnqWscrhz5Haxpd7` | פורטרטים וקלוז-אפ של אנשים (עור "פלסטיקי" מ-AI) | `method: "faithful"`, `skin_detail: 70`, `smart_grain: 2` |

- **מתי לעשות אפסקייל:** חשב `רוחב יעד × סקייל ייצוא` (למשל Marketing דסקטופ 1280×2 = 2560px, Home Carousel 1280px) והשווה לרוחב התמונה שיצאה. אם המקור קטן מהיעד, אפסקייל. אם התמונה כבר גדולה מספיק, מדלגים וחוסכים קרדיטים.
- **סדר:** ייצור → (Skin Enhancer אם יש פנים בקלוז-אפ) → Precision Upscale → הסרת רקע (אם קטאאוט) → הטמעה. הסרת רקע תמיד **אחרי** האפסקייל, כדי שהקצוות יהיו חדים.
- תוצאת Magnific כבדה (PNG גדול). לפני `upload_assets` המר ל-JPG באיכות 90 (`sips -s format jpeg -s formatOptions 90`), חוץ מקטאאוט שנשאר PNG.

### Figma `generate_image` (סקיצות, וגיבוי)
מייצר ומטמיע **ישירות** בשכבה: `fileKey` = קובץ העבודה, `nodeId` = ה-slot (מחליף fill בלי לשנות גודל). בלי nodeId נוצר frame חדש (מתאים לכיווני תמונה).
- מודלים: `gemini-3.1-flash-lite-image` (סקיצות), `gemini-3.1-flash-image` (גיבוי לגרסה סופית), `gpt-image-2.5-sunburst` (קומפוזיציה מורכבת/מוצרים).
- width/height עד 2048. קובעים יחס, לא פיקסלים מדויקים. ליחסים רחבים מאוד בקש את הרחב ביותר, והשכבה תחתוך ב-FILL.
- צורך Figma AI credits. לציין פעם אחת בסשן.

### הטמעה סופית
`upload_assets({fileKey, nodeIds:[slot], scaleMode:"FILL"})` (קטאאוט: `"FIT"`), ואז `curl -X POST -H "Content-Type: image/jpeg" --data-binary @final.jpg <uploadUrl>`. אחרי זה `get_screenshot` לאימות.

### תמונה שהמשתמש סיפק
`upload_assets` עם `nodeIds` של שכבת התמונה. אם צריך: Magnific להגדלה, `cutout.py` להסרת רקע.

## פרוטוקול קונספט (לא מדלגים)

1. לפני תמונה סופית: הצע **3 כיוונים** בטקסט, כל אחד במשפט שמצטט את הכותרת של הבאנר. למשל: "לכותרת 'מצטרפים לטריפל של סלקום': (א) סלון סתווי חם... (ב)... (ג)...".
2. ייצר את 3 הכיוונים בסקיצה עם **Z-Image Turbo מקומי** (`tools/generate-local.sh`, חינם), והעלה אותם כ-frames חדשים ליד הבאנר בתוך Section בשם `<קמפיין> - כיווני תמונה`. בגיבוי: Figma `flash-lite`.
3. המשתמש בוחר, ורק אז גרסה סופית (**Figma AI**: `gemini-3.1-flash-image` או `gpt-image-2.5-sunburst`, ואז הגדלה ב-Real-ESRGAN אם צריך) מוטמעת ב-`bg image` של כל המדיומים (דסקטופ + מובייל, **פרומפט קומפוזיציה נפרד לכל אחד**, אותו "style lock": אותה סצנה, תאורה ודמות).
4. אם המשתמש אמר "תעשה ישר" או "בלי כיוונים", דלג לשלב 3.
