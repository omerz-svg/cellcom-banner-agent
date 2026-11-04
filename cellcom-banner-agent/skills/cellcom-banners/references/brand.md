# השפה העיצובית של סלקום

מקור: ספריית **Design System** (`CzmhbSKM1vha4Fq8ch1KDN`), מחוברת לקובץ Campaigns יחד עם הספרייה **Website Design 2026**. **תמיד להשתמש בסטיילים, וריאבלים ורכיבים מהספרייה (import by key), לא בערכים "ידניים"**, אלא כשאין טוקן מתאים (למשל גרדיאנט זהב עונתי).

## צבעים · `Colors | Cellcom`

| טוקן | ערך | שימוש |
|---|---|---|
| theme/Primary | `#810ea9` | צבע המותג. גלים, כפתורים, טקסט כפתור לבן |
| theme/Primary Grad | `#bc32ce` | קצה הגרדיאנט |
| theme/Bright | `#e3d2e9` | רקעים בהירים |
| theme/Light Grad | `#f2e7f6` | גרדיאנט בהיר |
| theme/Light | `#f9f3fb` | רקע בהיר מאוד |
| theme/Yellow Energy | `#f3fe7e` | **רק** לסלקום Energy |
| theme Dark/Background | `#13051a` | רקע כהה |
| theme Dark/Banner | `#4a0a61` | פאנל טקסט כהה בבאנרים |
| theme Dark/Package | `#290737` | |
| theme Dark/Salmon | `#ff82a6` | אליפסות זוהר (שקיפות 0.3–0.5) |
| System/Error | `#cf2429` | שגיאות בלבד |
| Gray/1..4 | `#f0f0f0` `#d9d9da` `#a09fa2` `#423f45` | |

Variable keys (לייבוא `figma.variables.importVariableByKeyAsync`):
Primary `a650730e65de6cc97b5af0530a543ac75ffa42f2` · Primary Grad `10c6b67d8a95da49c241daf2cfb0486d6a77b0c2` · Bright `16b8c5451c74313fc65dbfa863067ff40b722df8` · Light `e3a195cbf760646e625f2d9040415f0db6d3fdea` · Dark/Banner `11d5411b7422ccb90240ffc4601f35bdef9ee73c` · Dark/Background `2abeb9fd487898655c98cd7289efb59f9215c2fc` · Salmon `c48ddca68e4c50741720d8943cbf0643f9e4b83c` · White `409ba53dd62f22ab09d3d7e7533fca53fcda3c38` · Black `418357b2460fd2e7dedbb058c069230484ab1a95`.

`theme OLD/*` (`#9631ff` וכו'): ישן, לא להשתמש.

**Golan Telecom** (מותג אח, collection `Colors | Golan`): Primary `#d51124`, כפתור `#3e4850`. רק אם המשתמש ביקש במפורש "גולן".

### Paint styles (keys לייבוא `importStyleByKeyAsync`)
- Primary Gradient (סלקום) `#810ea9 16% → #bc32ce 100%`: key `480a7b09a20b57aaf8edd5c23fdafa43577154b6`
- Primary Gradient btn (סלקום): key `78214a0f00629a46a460b08c051fd84b1d594bf9`
- Light Gradient (סלקום) `#f2e7f6 → #f9f3fb`: key `f90b38aa794209c5af4213da3946cabce410306f`
- VAS icon gradient `#3a2bbb → #8c2af5`: key `f2efe9710dbe9fa1c3d365ba3186fd03124f2959`
- (Golan: Primary Gradient `911b91858aa3d4cc66dc8072430107901d9c8036`, Light `119168fe98398d92f916b22fecaefe8650087712`, btn `c54183d3962a7d128fdb275cb39439f2e557d216`)

### Effects
Shadow Cellcom/Small Color `ee64ec7ad5a1b7913f48924c4efcc62db6130e0c` · Big Color `f8ba6e13ea7abf2908c938ec9f762b83269de3bb` · Package Card `0e4d5f4e57ca1f3c1df25e462c14bb04dc9bf770` · Small Black `17336eae607336f25beafc7c2d8bb95873a5e158`.

## טיפוגרפיה

פונט יחיד: **RAG-Sans-Cellcom**: Regular (400), SemiBold (600), ExtraBold (800). Light (300) קיים בוריאבלים, כמעט לא בשימוש.
שמות סטיילים: `<size>/<Extrabold|Semibold|Regular>`, גדלים 80, 72, 64, 56, 48, 44, 40, 36, 32, 28, 24, 22, 20, 18, 16, 14. line-height ≈ size+4 (מ-32 ומטה: +2/+4).

Text style keys עיקריים:
| style | key |
|---|---|
| 72/Extrabold | `a8ca8690c039a3eb28182ae1c966e5ef5097ee2c` |
| 64/Extrabold | `5e81e9d9a3afede1281eaa0b065e9fc3a8e8c957` |
| 56/Extrabold | `6fdf42d61556e7aa62666945a76daa579d899eaa` |
| 56/Semibold | `352de55fdda25f67992416abadd20b55b24b79af` |
| 48/Extrabold | `48f506dcee9f8909cc15d0b8d20fffa692e223b8` |
| 44/Extrabold | `66e458216201ba3273fbd0fe4c49e5ba8977ca7e` |
| 40/Extrabold | `e22974f20fc0e1faafc205c67a0e74fdb86f16c1` |
| 36/Extrabold | `5955de2c8d33b8ad18595b30922ae312592c5f86` |
| 36/Regular | `069322ce68d26c170d27ea067ee06fd1cb844d62` |
| 32/Extrabold | `88839585351e90cc98b69c960787c44edac3a076` |
| 28/Regular | `c7adba452feff3a1ca5d0056b6d8ad083d0446b4` |
| 24/Regular | `ad10a6e06051f0de56eac183d278f18cc9a6698f` |
| 22/Regular | `70850399abf910a020134fe7f93ffd0d2cc50e0e` |
| 20/Regular | `1a31abd78a550afb50787922e3ceac919be41024` |
| 20/Semibold | `f70519670c4503d4efc361f6ca44894350ccad0f` |
| 18/Regular | `ca988353f9c43ccd5e6fcf51be2592bd46ead58d` |
| 16/Regular | `ea6ab363628de93f58483364472c51a301644914` |
| 14/Regular | `e4084077cc2ff3b934506bf8af99f69958d9d802` |

הרשימה המלאה: הרץ `figma.getLocalTextStylesAsync()` בקובץ ה-DS.

**כללי טיפוגרפיה בבאנרים (מהטמפלייטים ומהקמפיינים):**
- כותרת: ExtraBold או SemiBold, לבן על רקע כהה/סגול. דסקטופ 52–70, מובייל 33–36.
- תת-כותרת: Regular, ~55% מגודל הכותרת (38 מול 70, 22 מול 60, 20 מול 36).
- Eyebrow (שורה מעל הכותרת, למשל "חדש בסלקום", "הערב מתקרר, הבינג' מתחמם"): Regular 25–40.
- מחיר: הספרה ענקית ExtraBold (פי 2.5–3 מהכותרת), "רק ב-" SemiBold, "₪ לחודש" ExtraBold קטן, "למשך חודשיים" Regular.
- הערה משפטית: Regular 14–16, "*בכפוף לתקנון".
- יישור: ימין בדסקטופ (טקסט בצד ימין של הבאנר), מרכז במובייל.
- **גרדיאנט זהב** `#a1632e → #fbe79a → #ecd287 → #e6b73c → #a1632e`: צבע ההדגשה העיקרי מלבד הסגול. משמש לשורות פתיחה, לספרות מחיר, לכותרות חג ולמסגרות כמוסה על סגול כהה. כתום הופיע רק בקמפיין Gett ואינו ברירת מחדל. כל כללי ההדגשה ב-`campaign-language.md` סעיף 4.

## רכיבים (component keys, import דרך `importComponentByKeyAsync` / `importComponentSetByKeyAsync`)

| רכיב | key | הערה |
|---|---|---|
| btn - purple gradient white bg (set) | `fbbfc3b5abde84c38ee6c2c855366821e36d3459` (variant `e4cb31d9aa886c8907bbaa753af2413f10012e99`) | 240×50, הירו דסקטופ |
| huge button (set) | `438ebd762098ab2c186248b0332378edccfd15e3` (Default `704dcee0541017910206337e26a2cb2b62aaaee0`) | כפתור לבן 240×50, טקסט סגול |
| glow button (set) | `51c289bc2295af6493a9aa3a2cbc5dde8174b7a3` (`6ba09eda4d2c175a60b7f149635b1bfdcbfca885`) | מובייל הירו |
| Button/h50/primary (set) | `7c4e45d5db37bd397a841096747dbc0c44fec259` (large `c0d680b52359100c237ea2d75717297fd7966450`) | 339×50 |
| Button/h50/primary Mobile (set) | `a01c903763185c40395b682bb7aff610093d4cbe` (`3ed3345fac451c43cacad00e8f68937003b7841f`) | |
| h50/primary min white | `6cc27d36b557355e15d35d54290d543b180e9a00` | 111×50 |
| primary buttons (set) | `727bfe77c621b7e9c295d9525385fae5af87c7ad` (`cfe538f94ee61cd1952936632592d61bfdb71b89`) | 290×50, טפסים |
| secondary buttons (set) | `b00588c89480c9f0e0c3e2b38513407a7bfd851c` | |
| Mini-Primary | `e6720df4e5a258349b1917858d1358763fed6d8d` | 70×32 |
| Field - name (set) | `221214c1735098944335b067753481c44438166b` | 362×54 |
| Field - phone | `1c0641104e54c4adc75e15019c8ded2371b4f986` | |
| אני מאשר (משפטית, set) | `b15888c356c847dffea411a444949c3067b3a47d` | light `c5d5c9f7280bb3f424e7a48500c1b966fa1b3fb0`, dark `7181d6ba41ac28cb68975f0f5ba2e6217e5c6a2b` |
| pager - pause - second banner | `dd9b6f17aa4aa3ba16ef85d0314232a0f5dc2a93` | 124×32, שכבת Dev |
| right arrow - desktop (set) | `426acefc78c3ac7a129b9f0f3965282cdd790030` | Dev |
| left arrow (set) | `e789fabbd699fec20b73d1887812a134721ce780` | Dev |
| plus (set) | `58ebd36c482c00673f01b364bc8198cd4cd95a91` | 44×44 |
| icon/120/* (5g streaming `12f725d1a4fdf187ab032b2bc74e5c205d9defec`, Gaming `d721efac6359934fec7876f138b74e04f47fa4a1`, concurrent browsing `0806ac0fd82982aa857739f0da696dcedf10ab47`, upload downlaod rate `0c333b8c2d7331f7d312d070b7c37ebd73cc4e2a`) | | benefits |
| icon/44/* (fiber `71b942adda944ef4256a5e134bae7b42f70d9351`, mobile 5G b `eced706bd0e49a5f0138c2ba27172e1f8870897a`, world `7bb183a0912f411545c556cada4086046a5d063c`, cloud b `8393098eefa3875c18260f90adca30497291ec9f`) | | |

לחיפוש רכיבים נוספים: `search_design_system` עם fileKey של Campaigns (`zyp67jdVgIYSgUoyJD8XzM`).

## מוטיבים חזותיים חוזרים (זה מה שהופך באנר ל"סלקום")

1. **הגל/סוויש הסגול** (`Mask group` בטמפלייטים): צורה גדולה מעוקלת בגרדיאנט `#810ea9→#bc32ce` שמפרידה בין אזור הטקסט לאזור התמונה. בדסקטופ היא חוצה מימין (טקסט) לשמאל (תמונה) בקו מעוגל; במובייל עולה מלמטה או יורדת מלמעלה.
2. **אליפסת זוהר ורודה** `#ff82a6` / `#f6b7bd` בשקיפות 0.3–0.5 עם blur מאחורי הגל: עומק ו"אור".
3. **פאנל טקסט כהה** (`#4a0a61` → `#13051a`) עם זוהר סגול רך, כשהתמונה בהירה/חמה.
4. **רקע לבנדר בהיר** (Light Gradient) לקמפיינים רכים/לייפסטייל, עם טקסט סגול כהה במקום לבן.
5. **לוגו סלקום** (כוכב + "סלקום"): לבן על כהה. לא חובה בבאנרים באתר (האתר עצמו ממותג); כן בבאנרים חיצוניים/באזור אישי.
6. **כפתור לבן עם טקסט סגול** על רקע כהה/סגול; כפתור גרדיאנט סגול על רקע בהיר.

## קופי (עברית)

- פנייה ברבים לא ממוגדרת: "מצטרפים", "נהנים", "השאירו פרטים", "רוצים לשמוע עוד?".
- CTA קצר, שם פעולה עם ל-: "להצטרפות", "לפרטים", "לרכישה", "להזמנה", "לחבילות הסלולר שלנו". "לחצו כאן" רק בבאנר כללי.
- כותרת עד ~6 מילים, עד 2 שורות. תת-כותרת עד ~10 מילים.
- מספרים ומחירים: ספרות, "₪" אחרי המספר בתצוגה ("79 ₪ לחודש").
- שמות מוצרים באנגלית נשארים באנגלית: 5G PRO, FiberTV, Galaxy Z Fold8, eSIM, WiFi 7.
- אם המשתמש לא נתן קופי, הצע 2 גרסאות בסגנון למעלה וסמן אותן כהצעה.
