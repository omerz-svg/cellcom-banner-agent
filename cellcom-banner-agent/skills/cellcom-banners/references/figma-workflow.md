# תהליך העבודה בפיגמה

## קבצים
| | fileKey |
|---|---|
| Design System (מקור הטמפלייטים, **קריאה בלבד**) | `CzmhbSKM1vha4Fq8ch1KDN` |
| Campaigns (קובץ העבודה, ברירת מחדל) | `zyp67jdVgIYSgUoyJD8XzM` |

**לעולם לא לכתוב לקובץ ה-Design System.** כל קריאות `use_figma` אליו הן קריאה בלבד.
אם המשתמש נתן קובץ עבודה אחר, עבוד בו. ודא שספריות `Design System` ו-`Website Design 2026` מחוברות אליו (`get_libraries`). בלעדיהן הכפתורים לא ייובאו, ואז אמור למשתמש לחבר אותן (Assets > Libraries).

## שלב 0: "עוד אופציה" לבאנר קיים
כשהמשתמש נותן לינק לבאנר קיים בקובץ העבודה ומבקש "אופציה נוספת", **לא מעתיקים מה-DS**:
1. `clone()` של פריימי האופציה האחרונה (דסקטופ + מובייל) **באותו קובץ**, בשורה חדשה מתחת. מרווח השורות זהה למרווח הקיים בין האופציות. שם: `... - אופציה <n>`. הגדל את ה-Section.
2. החלף רק את שכבת התמונה (וטקסט, אם התבקש). שאר העימוד, הפאנל והטקסטים נשארים זהים.
3. בדוק אם **אותה תמונה משמשת בשני המדיומים** (אותו יחס שכבה). אם כן, תמונה אחת לשניהם וחוסכים ריצה.
4. כתמונות ייחוס סגנון: `download_assets` על שכבות התמונה של האופציות הקיימות, ואת ה-`export.url` (ללא טקסט) מעבירים ל-`images` של Nano Banana Pro.

## שלב 1: העתקת הטמפלייט לקובץ העבודה (cross-file clone)

טמפלייטים הם frames ולא קומפוננטות, ולכן אי אפשר לייבא אותם. במקום זה:

1. **חילוץ** (בקובץ ה-DS): קרא את `extract-spec.js`, החלף `__NODE_ID__` ב-node של הגרסה (מ-`templates.md`) ואת `__OFFSET__` ב-0, והרץ ב-`use_figma`. אם `total > 19000`, הרץ שוב עם OFFSET=19000, 38000... ושרשר את ה-chunks.
   - הסקריפט ממיר צורות דקורטיביות (גלים, אליפסות זוהר, Mask groups) ל-SVG, שומר טקסט עם כל ה-segments (פונט/משקל/גודל/צבע), ושומר רכיבים כ-component key.
   - שכבות `instructions` מושמטות. אזורי החיתוך מתועדים ב-`templates.md`.
   - `aboveDecor: true` על שכבת תמונה = הטמפלייט מצפה ל**קטאאוט** (PNG שקוף, נושא בלי רקע) שיושב מעל הגל. `false` = צילום מלא.
2. **בנייה** (בקובץ העבודה): קרא את `build-from-spec.js`, החלף `__SPEC__` ב-JSON, `__SECTION__` בשם הקמפיין, `__FRAME_NAME__` בשם הפריים, ו-`__X__`/`__Y__` במיקום בתוך הסקשן, והרץ ב-`use_figma`.
   - מחזיר `frameId`, `imageSlots` (שכבות תמונה, עם placeholder שקוף), `texts` (ids של טקסטים), `warnings`.
   - **כל warning מטופל**: "component not found" = ספרייה לא מחוברת. "font missing" = פונט לא זמין, ואז עצור ודווח.
3. אם מגבלת אורך הקוד (50,000 תווים) חורגת בגלל SVG גדול: בנה בשתי ריצות. בראשונה בלי SVG, ובשנייה הוסף כל SVG עם `figma.createNodeFromSvg` לתוך ה-frame המתאים לפי שם.

**טיפ:** דסקטופ ומובייל של אותו קמפיין = שתי ריצות, באותו Section, אחד ליד השני (מובייל ב-X = רוחב דסקטופ + 80).

## שלב 2: החלפת טקסטים

```js
// use_figma on the work file. EDITS: { "<text node id>": "new text", ... }
const EDITS = __EDITS__;
for (const [id, txt] of Object.entries(EDITS)) {
  const n = await figma.getNodeByIdAsync(id);
  if (n.type === 'TEXT') {
    const segs = n.getStyledTextSegments(['fontName']);
    for (const s of segs) await figma.loadFontAsync(s.fontName);
    const base = segs[0].fontName; n.fontName = base; // collapse to first segment style
    n.characters = txt;
  } else if (n.type === 'INSTANCE') { // button label
    const t = n.findOne(c => c.type === 'TEXT'); await figma.loadFontAsync(t.fontName); t.characters = txt;
  }
}
return 'ok';
```
- כותרת עם הדגשה (למשל "5G PRO" ב-ExtraBold והשאר SemiBold): אחרי ההחלפה, `n.setRangeFontName(start, end, {family:'RAG-Sans-Cellcom', style:'ExtraBold'})` על המילים המודגשות.
- **שבירת שורות ידנית** עם `\n` כמו בטמפלייט: איזון שורות, בלי מילה יתומה.
- אם הטקסט ארוך מהמקום: קודם קצר את הקופי (הצע למשתמש), ורק אם לא אפשר, הורד גודל פונט במדרגה אחת (לפי סולם הסטיילים). לעולם לא מתחת ל-Regular 16 בדסקטופ / 14 במובייל.

## שלב 3: תמונה

ראה `imagery.md` לסגנון ולפרומפט.
- **הפייפליין המלא** (סקיצה, Nano Banana Pro, Magnific, הטמעה) מתואר ב-`imagery.md`, בסעיף "כלים: הפייפליין".
- **צילום מלא (`aboveDecor:false`):** הגרסה הסופית מ-Weave (Nano Banana Pro), אפסקייל ב-Magnific אם צריך, ואז `upload_assets` עם `nodeIds:[slot]`, `scaleMode:'FILL'`. גיבוי בלי Weave: `generate_image({ fileKey, nodeId: <slot>, model: 'gemini-3.1-flash-image', prompt, width, height })`.
- **קטאאוט (`aboveDecor:true`): הסרת רקע מקומית עם rembg** (מותקן, אופליין, חינם):
  1. ייצר את הנושא (Weave Nano Banana Pro, או `generate_image` כגיבוי), עם אפסקייל ב-Magnific לפני החיתוך, בפרומפט `isolated subject on a plain solid light-gray background, soft studio light, violet rim light`. רקע אחיד = חיתוך נקי.
  2. הורד את התמונה לתיקיית ה-scratchpad (`in.jpg`): פלט Weave עם curl, או מ-`generate_image` דרך `download_assets({fileKey, nodeId: <slot>})` ו-`rawImages[0]`.
  3. הסרת רקע:
     ```bash
     <skill-dir>/.venv/bin/python -I <skill-dir>/cutout.py <scratch>/in.jpg <scratch>/cut.png --trim
     ```
     (מודל `isnet-general-use` שמור ב-`~/.u2net`. לשיער ופרטים עדינים אפשר `--model birefnet-general`, שמוריד כ-900MB בפעם הראשונה ודורש אישור מהמשתמש.)
  4. `upload_assets({fileKey, nodeIds:[<slot>], scaleMode:'FIT'})`, ואז `curl -X POST -H "Content-Type: image/png" --data-binary @cut.png <uploadUrl>`.
  5. ב-`use_figma`: וודא שה-slot ממוקם כך שהנושא יושב באזור התמונה של הטמפלייט (שמאל-מרכז בדסקטופ, תחתית במובייל). אם יש `--trim`, התאם את גודל ה-slot ליחס של ה-PNG.
  - אם Weave מחובר, אפשר במקום זה מודל remove-background של Weave.
- **אחרי הצבת תמונה:** בדוק fill: `slot.fills[0].type === 'IMAGE'`. כוונן `imageTransform` / `scaleMode` כדי שהנושא לא ייפול באזורי החיתוך.

### הטמעה: מלכודות ידועות
- **`upload_assets` חייב `currentPageId` של הדף שבו נמצאים ה-nodes** (הדף של ה-Section, `section.parent.id`). בלי זה ההעלאה מחזירה success, אבל התמונה **לא** מוצבת על השכבה. סימן הצלחה: בתגובת ה-POST מופיע `placedOnNodeId`. בלי השדה הזה, לא הוצב.
- **מיקום הנושא אחרי הטמעה:** אל תסמוך על FILL. חשב את טווח הנושא בתמונה (באחוזים מהרוחב) והגדר את גודל השכבה ביחס המקורי של התמונה (בלי חיתוך FILL), עם `x`/`y` כך שהנושא נכנס לאזור הבטוח (בירו 1920: x 320 עד תחילת פאנל הטקסט). השאר מרווח מעל הראשים.

## שלב 4: בדיקת איכות (חובה לפני מסירה)

```js
// use_figma on the work file. FRAME_ID, SAFE: {x0,x1,y0,y1} content-safe box from templates.md
const f = await figma.getNodeByIdAsync('__FRAME_ID__'); const SAFE = __SAFE__;
const fx = f.absoluteTransform[0][2], fy = f.absoluteTransform[1][2]; const issues = [];
for (const t of f.findAll(n => n.type === 'TEXT' && n.visible)) {
  const b = t.absoluteBoundingBox; const x0 = b.x - fx, y0 = b.y - fy, x1 = x0 + b.width, y1 = y0 + b.height;
  if (x0 < SAFE.x0 || x1 > SAFE.x1 || y0 < SAFE.y0 || y1 > SAFE.y1) issues.push(`text outside safe zone: "${t.characters.slice(0,30)}" ${Math.round(x0)},${Math.round(y0)}-${Math.round(x1)},${Math.round(y1)}`);
  if (t.parent.type === 'FRAME' && t.parent.clipsContent && (y1 > t.parent.height + 1)) issues.push('text clipped: ' + t.characters.slice(0,30));
}
for (const s of f.findAll(n => /bg image|image/i.test(n.name) && 'fills' in n)) if (!s.fills.some(p => p.type === 'IMAGE')) issues.push('image slot empty: ' + s.name);
if (f.findAll(n => n.name === 'instructions' && n.visible).length) issues.push('instructions layer visible');
return issues.length ? issues : 'QA ok';
```
ואז **בדיקה ויזואלית**: `get_screenshot` של הפריים (maxDimension 1600) ובדיקה בעיניים:
1. הכותרת קריאה (ניגודיות טקסט מול רקע, לבן על תמונה בהירה = בעיה, צריך גל או overlay כהה).
2. הנושא בתמונה לא נחתך באזורים האדומים (חיתוך 1280 / 375).
3. יישור ימין עקבי, רווחים לפי הטמפלייט.
4. כפתור במקום, בגודל זהה לשאר הבאנרים בקרוסלה.
5. אין טקסט, לוגו או "ג'יבריש" שהמודל הכניס לתמונה.
עד 3 סבבי תיקון. אחרי זה הצג למשתמש מה נשאר פתוח.

## שלב 5: חומרים להקמה (Assets to send)

לכל באנר צור, ליד פריים העיצוב, פריים **asset** לפי כללי המסירה של הטמפלייט (`templates.md`):
1. `clone()` של פריים העיצוב, ושם: `<קמפיין> - <טמפלייט> - <desktop|mobile> - asset - v<n>`.
2. אם הכלל הוא "רקע נקי בלי טקסט וכפתורים" (Marketing, Lead, Lead Forms, Hero Gallery, Product Hero): מחק את `text&btn` / `txt & btn` ואת `Dev`.
3. אם "כולל טקסט וכפתור" (My Account New Client) או "טקסט כחלק מהתמונה" (Hero Gallery / Strip לפי הנחייה): השאר טקסט, מחק רק `Dev`.
4. הוסף `exportSettings` לפי הכלל: למשל Marketing דסקטופ `[{format:'JPG', constraint:{type:'SCALE', value:2}}]`, מובייל SCALE 4; Hero Gallery / Product Hero: JPG SCALE 1; קופונים, ציוד: PNG.
5. אם המשתמש מבקש קבצים: `download_assets` על פריים ה-asset, `curl` לתיקייה שהמשתמש בחר, ואז בדיקת משקל (`ls -l`). מעל 200KB: `sips -s format jpeg -s formatOptions 70 in.jpg --out out.jpg` והורדה הדרגתית של האיכות עד שהקובץ מתחת ל-200KB.

## מוסכמות שמות
- Section: `<שם קמפיין> - <תאריך YYYY-MM-DD>`
- פריים עיצוב: `<קמפיין> - <טמפלייט> - desktop - v1`
- פריים asset: `... - asset - v1`
- כיווני תמונה: Section נפרד `<קמפיין> - כיווני תמונה`

## מיקום על הקנבס
לפני יצירה: `get_metadata` על הדף, כדי למצוא מקום פנוי **מתחת** לתוכן הקיים (הסקריפט עושה זאת אוטומטית ל-Section חדש). לא לדרוס ולא לחפוף תוכן קיים. אחרי יצירה: צילום מסך לאימות.
