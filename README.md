# ערכת סלקום

- `cellcom-design-system/`: מערכת העיצוב כ-DESIGN.md לסוכנים, עם טוקנים, לוגו, גל ופונטים.
- `cellcom-banner-agent/`: סוכן הבאנרים כתוסף להתקנה ב-Claude. הוראות ב-README שבתיקייה.

## סנכרון לגיטהאב
הסוכן שעובדים איתו נמצא ב-`~/.claude` (סוכן: `agents/cellcom-banner-agent.md`, סקיל: `skills/cellcom-banners`). אחרי שינוי בסוכן מריצים:

```bash
zsh ~/Documents/cellcom-banner-agent/sync-to-github.sh "מה השתנה"
```

הסקריפט מעתיק את הסוכן והסקיל לריפו (בלי סביבות מקומיות ובלי פונטים), ממיר נתיבים ל-`<skill-dir>`, ועושה commit ו-push.
