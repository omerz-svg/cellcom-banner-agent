# עבודה ב-Claude Design (שלב ראשון, תמיד)

**סדר העבודה:**
1. כל באנר מתחיל **בקנבס ב-Claude Design**: כיווני עימוד ותמונה, איטרציות מהירות, ולינק לאישור.
2. רק אחרי שהמשתמש בחר כיוון, בונים אותו **בפיגמה** (קובץ Campaigns), לביצוע ולמסירה לפיתוח, לפי `figma-workflow.md`.
3. אם המשתמש ביקש במפורש לעבוד ישר בפיגמה ("ישר לפיגמה", "תשכפל את הבאנר בפיגמה"), מדלגים על הקנבס.

## נכסים קבועים
- **מערכת העיצוב של סלקום (Design System artifact):** `https://claude.ai/artifact/K8QVZD46ACE2BQEBZRFGzV`, namespace `cellcomds`. כוללת tokens, README בעברית (כולל פרק "שפת הקמפיינים"), Button ו-TextField. **אין** bundle global שצריך לטעון (ה-README לא מגדיר `window.CellcomDS` לצרכנים), ולכן בונים markup עם ערכי הטוקנים המדויקים.
- **קנבס לדוגמה:** `https://claude.ai/artifact/67TY3aviWzomsYtjdMtFcp` (Gett & Connect, 6 כיוונים C עד H). אפשר לפתוח אותו כרפרנס לסגנון ולמבנה הקבצים.

## פתיחת קנבס חדש
1. `Artifact` עם `action: "quickstart"`, `intent: "design"`. ואז publish עם `type_url` של סוג Design, `title` בשם הקמפיין (למשל "5G PRO · באנר הירו"), ו-`auto_open: "after_first_write"`.
2. קרא את `project/README.md` ואת `project/tokens.json` של מערכת העיצוב.
3. **התקנת מערכת העיצוב בקנבס:** בקריאת ה-publish הראשונה הוסף:
   - ב-`files`: `"project/ds/cellcomds/tokens.json": {"artifact": "https://claude.ai/artifact/K8QVZD46ACE2BQEBZRFGzV", "path": "project/tokens.json"}`.
   - ב-`canvas.json`, תחת `designSystems`: `{"title":"מערכת העיצוב של סלקום","namespace":"cellcomds","artifact":"https://claude.ai/artifact/K8QVZD46ACE2BQEBZRFGzV","version":null,"copiedAt":"<now>"}`.
4. **פונטים:** העלה את שלושת קובצי RAG-Sans-Cellcom (Regular 400, SemiBold 600, ExtraBold 800) כ-assets לקנבס (`publish` עם `asset:true` ו-`file_paths`), והשתמש בכתובות `/_blob/<id>` שחוזרות ב-`@font-face`. הקבצים נמצאים ב-`~/Library/Fonts/RAG-Sans-Cellcom-*.otf`. אם אינם שם, בקש מהמשתמש.
5. **תמונות:** כל תמונה מועלית כ-asset, ומשתמשים ב-`<img src="/_blob/<id>">` בדיוק כפי שחזר.

## פריסת הקנבס
- שורה לכל כיוון: דסקטופ 1920×500 ב-`x:0`, ומובייל 430×480 ב-`x:2000`, באותו `y`. בין שורות 620px (`y: 0, 620, 1240…`).
- שמות קבצים: `<Name>.dc.html` ו-`<Name>-mobile.dc.html`. הלוח הראשון הוא תמיד `Main.dc.html`.
- `title` לכל לוח: `<אות> · <שם הכיוון> · דסקטופ|מובייל`.
- note מסוג `title1` מעל הכל, ב-`y:-300` עם `maxW:2430`, ובו שם הקמפיין.

## שלד לוח (חובה)
```html
<!doctype html>
<html lang="he" dir="rtl">
<head><meta charset="utf-8"><title>…</title><script src="./support.js"></script></head>
<body><x-dc>
<helmet><style>
@font-face{font-family:"RAG-Sans-Cellcom";src:url("/_blob/<regular>") format("opentype");font-weight:400}
@font-face{font-family:"RAG-Sans-Cellcom";src:url("/_blob/<semibold>") format("opentype");font-weight:600}
@font-face{font-family:"RAG-Sans-Cellcom";src:url("/_blob/<extrabold>") format("opentype");font-weight:800}
body{margin:0}
</style></helmet>
<div dir="rtl" style="position: relative; width: 1920px; height: 500px; overflow: hidden; background: …; font-family: 'RAG-Sans-Cellcom', 'Arial Hebrew', Arial, sans-serif;">
  <img …>                      <!-- image area: left 50–55% -->
  <div style="position: absolute; right: 320px; top: 0; height: 500px; width: 560–640px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; text-align: right;"> … </div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":1920,"height":500}}'>
class Component extends DCLogic { renderVals() { return {}; } }
</script></body></html>
```
- **אזור בטוח בדסקטופ:** כל הטקסט, הכפתור והפנים בטווח x 320–1600.
- **מובייל:** טקסט ממורכז ב-`left/right: 32px` למעלה, והתמונה בתחתית עם `mask-image: linear-gradient(180deg, transparent 0, #000 70px)`.
- **כפתורים:** `<button>` קפסולה (r33), Regular 20. גרדיאנט על רקע בהיר, לבן עם טקסט `#810ea9` על רקע כהה.
- **מחיר:** `50 <span style="font-size: 50%">₪</span>` בתוך span. על רקע כהה בזהב (`background-clip: text` עם גרדיאנט הזהב). על רקע בהיר בגרדיאנט הסגול.
- **תמונה ברוחב מלא:** חשב את טווח הנושא באחוזים מרוחב התמונה, ומקם את ה-img ביחס המקורי של התמונה כך שהנושא נכנס ל-x 330–980. הוסף דהייה ימנית `mask-image: linear-gradient(90deg, #000 78–85%, transparent 100%)`, כך שהדהייה תתחיל רק אחרי הנושא.

## היפוך מראה (Tweak)
- הוסף ל-`data-props`: `"mirror":{"editor":"boolean","default":false,"section":"תמונה"}`.
- **תמונה בתוך מסגרת:** הוסף ל-img את `transform: {{flip}};`, ובקוד: `flip: m ? 'scaleX(-1)' : 'none'`.
- **תמונה ברוחב מלא:** עטוף את ה-img ב-div שמחזיק את המיקום ואת ה-mask, עם `left: {{imgLeft}}` ו-`mask-image: {{imgMask}}`, והפוך רק את ה-img. כשהמתג דולק, הזז את העוטף כך שהנושא המהופך יישאר ב-x 330–980.

## כללי עדכון
- **לפני כל עריכה:** קרא מחדש (`read`) את הלוחות שאתה משנה. המשתמש עורך בקנבס, ופרסום מעל עריכה שלו נכשל. ערוך את העותק שה-read שמר, ופרסם מאותו `root`.
- **הוספת לוחות:** קרא את `canvas.json` מחדש, הוסף ל-`boards` ול-`order`, ושמור על שאר המפתחות.
- **בלי בדיקה עצמית:** לא מצלמים ולא פותחים את הקנבס, אלא אם המשתמש ביקש. בדיווח אומרים בגלוי שהמיקומים מחושבים ולא נבדקו בעין.
- **חיסכון בטוקנים:** לרכז שינויים בסבב אחד, ולקרוא רק את הלוחות שמשתנים.

## מעבר לפיגמה, אחרי שהמשתמש בחר כיוון
- אם יש באנר קיים בפיגמה באותו קמפיין, משכפלים אותו ומחליפים תמונה וטקסט לפי הכיוון (`figma-workflow.md`, שלב 0).
- אחרת, טמפלייט מה-DS (שלב 1), ואז בונים את העימוד מהקנבס עם אותם ערכים.
- את התמונה מעלים ב-`upload_assets` עם `currentPageId`.
