---
name: cellcom-banners
description: Design Cellcom (סלקום) web banners, first as layout directions on a Claude Design canvas with the Cellcom design system installed, then in Figma from the official templates of the Cellcom Design System once a direction is chosen, in the Cellcom visual language, with AI-generated images embedded in the banner. Knows every template's layout (Home Carousel, Marketing Banner, Lead Banner/Forms, Marketing 1920, Zoom Strip, Hero Gallery, Product Page Hero/Strip/Benefits/Cards, Lobby Marketplace, Business Hero, TV, My Account, APP.RU), its sizes, crop zones, text limits and asset-delivery rules. Triggers on "באנר לסלקום", "באנר סלקום", "תעצב באנר", "קרוסלת הירו", "באנר מרקטינג", "באנר ליד", "סטריפ", "Cellcom banner", or any request to design a banner/template for Cellcom.
---

# באנרים לסלקום

הסקיל הזה הופך בקשה כמו "באנר מרקטינג ל-5G PRO, דסקטופ ומובייל" לפריימים מוכנים בפיגמה: הטמפלייט הנכון, קופי בשפה של סלקום, תמונה שנוצרה במיוחד ומוטמעת, וחומרי הקמה לפיתוח.

## נתיבים והתקנה
- `<skill-dir>` בכל הקבצים = תיקיית הסקיל הזה (מופיעה כ-"Base directory for this skill" כשהסקיל נטען).
- כלים מקומיים חינמיים (הסרת רקע, הגדלה, יצירה מקומית): פעם אחת `zsh <skill-dir>/setup.sh` (ועם `--flux` ליצירה מקומית). אם הכלי לא מותקן, הסוכן מציע להריץ את ההתקנה, ולא מריץ אותה בלי אישור.
- מחברים נדרשים: **Figma** (חובה, בהגדרות Connectors), **Magnific** (מוגדר בתוסף, דורש התחברות לחשבון בפעם הראשונה).

## קרא לפני שמתחילים
| קובץ | מתי |
|---|---|
| `references/templates.md` | **תמיד.** בחירת טמפלייט, מידות, אזורי חיתוך, כללי מסירה |
| `references/brand.md` | **תמיד.** צבעים, פונטים, keys של רכיבים, מוטיבים, קופי |
| `references/campaign-language.md` | **תמיד, לפני עימוד טקסט.** מיקום ויחסי גדלים, טיפוגרפיית מחיר, צבעי הדגשה לפי הקשר, הפרדת תמונה-טקסט, CTA, קול, פורמטים מיוחדים (כתבה, השקה, סטיקי, חג, זיכרון, תתי-מותגים) ודוגמאות מופת |
| `references/imagery.md` | בכל פעם שיש תמונה |
| `references/claude-design-workflow.md` | **תמיד, ראשון.** כל באנר מתחיל בקנבס ב-Claude Design |
| `references/figma-workflow.md` | אחרי שנבחר כיוון, לפני הקריאה הראשונה ל-`use_figma` |
| `references/extract-spec.js`, `references/build-from-spec.js` | הסקריפטים שמעתיקים טמפלייט בין קבצים |
| `cutout.py` (+ `.venv` עם rembg, נוצר ב-`setup.sh`) | הסרת רקע מקומית לתמונות קטאאוט |
| `tools/upscale.sh`, `tools/generate-local.sh` | הגדלה (Real-ESRGAN) ויצירה מקומית (Z-Image Turbo) |

## התהליך

**שלב א: Claude Design (קונספט, תמיד ראשון)**
1. **הבנת הבקשה** (שאלה אחת לכל היותר, עם AskUserQuestion, ורק על מה שחסר באמת): טמפלייט ומידות (`templates.md`), קופי (אם לא ניתן, 2 הצעות בשפה של סלקום), ותמונה קיימת או חדשה.
2. **קנבס:** פותחים קנבס בשם הקמפיין, מתקינים את מערכת העיצוב של סלקום ומעלים פונטים ותמונות (`claude-design-workflow.md`).
3. **3 כיווני עימוד**, כל אחד בדסקטופ ובמובייל, לפי `campaign-language.md`. לכל כיוון שיטת הפרדה, היררכיה ותמונה אחרות.
4. **תמונות:** ב-Figma AI או ב-Magnific (`imagery.md`), מועלות כ-assets לקנבס.
5. **מסירה של שלב א:** לינק לקנבס, משפט אחד על כל כיוון, ומה כדאי לבדוק. המשתמש מעיר ובוחר, וחוזרים על הסבב עד שיש בחירה.

**שלב ב: פיגמה (ביצוע ומסירה, רק אחרי שהמשתמש בחר כיוון)**
6. **בנייה:** שכפול באנר קיים באותו קמפיין, או העתקת טמפלייט מה-DS (`extract-spec.js` ו-`build-from-spec.js`), ובניית העימוד שנבחר עם אותם ערכים.
7. **טקסט ותמונה:** לפי `figma-workflow.md`, שלבים 2 ו-3.
8. **בדיקת איכות:** סקריפט QA, ואז צילום מסך ובדיקה ויזואלית, עד 3 סבבים.
9. **חומרי הקמה:** פריימי asset ו-export settings. ייצוא קבצים לתיקייה `~/Desktop/שיווקי סלקום/<קובץ>_<נושא>_<node-id>_<YYYY-MM-DD>`.
10. **מסירה:** לינק לכל פריים (`https://www.figma.com/design/<fileKey>?node-id=<id עם ->`), צילום מסך, ומה נשאר פתוח.

**דילוג:** אם המשתמש מבקש במפורש לעבוד ישר בפיגמה, מתחילים משלב ב.

## כללי ברזל
- **לא כותבים לקובץ ה-Design System.** קריאה בלבד.
- תוכן חיוני (טקסט, כפתור, פנים, מוצר) **לעולם לא** באזורי החיתוך או ההסתרה של הטמפלייט.
- רק פונט RAG-Sans-Cellcom, וצבעים, סטיילים ורכיבים מהספרייה.
- אין טקסט, לוגו או כפתור בתוך תמונה שנוצרה ב-AI.
- כל ריצת מודל בתשלום (Weave) דורשת אישור מפורש של העלות. ב-`generate_image` מציינים פעם אחת בסשן שזה צורך קרדיטים של Figma AI.
- אם משהו נכשל (רכיב לא נמצא, פונט חסר, תמונה לא הוטמעה), מדווחים בדיוק מה ולא מסתירים.
- אם הקובץ סותר את הקטלוג, הקובץ קובע. מעדכנים את `templates.md` ומדווחים.
