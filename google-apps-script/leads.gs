/**
 * פניות מהבוט באתר של רוני לוגסי כהן → Google Sheet + מייל התראה
 *
 * התקנה (פעם אחת):
 * 1. בגיליון: תוספים (Extensions) → Apps Script
 * 2. למחוק את מה שכתוב שם ולהדביק את כל הקובץ הזה, ולשמור
 * 3. פריסה (Deploy) → פריסה חדשה (New deployment) → סוג: אפליקציית אינטרנט (Web app)
 *    - הפעלה בתור (Execute as): אני (Me)
 *    - למי יש גישה (Who has access): כל אחד (Anyone)
 * 4. לאשר את ההרשאות שגוגל מבקשת
 * 5. להעתיק את כתובת ה-Web app (מסתיימת ב-/exec) ולשלוח אותה
 */

// לאן לשלוח התראה על כל פנייה חדשה (אפשר כמה כתובות, מופרדות בפסיק)
const NOTIFY_EMAIL = "roni@orencohengroup.com"
const SHEET_NAME = "פניות מהאתר"

const COLUMNS = [
  ["timestamp", "תאריך ושעה"],
  ["name", "שם"],
  ["phone", "טלפון"],
  ["topic", "נושא הפנייה"],
  ["date", "מועד האירוע"],
  ["details", "פרטים"],
  ["lang", "שפת האתר"],
  ["utm_source", "מקור (utm_source)"],
  ["utm_medium", "סוג (utm_medium)"],
  ["utm_campaign", "קמפיין (utm_campaign)"],
  ["utm_content", "מודעה (utm_content)"],
  ["referrer", "הגיע מאתר"],
  ["landing", "כתובת כניסה"],
  ["status", "סטטוס טיפול"],
]

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.waitLock(10000)
  try {
    const data = JSON.parse(e.postData.contents || "{}")

    // honeypot: real visitors never fill this field
    if (data.website) return json({ ok: true })
    if (!data.name || !data.phone) return json({ ok: false, error: "missing fields" })

    const sheet = getSheet()
    const values = COLUMNS.map(([key]) => {
      if (key === "timestamp") return new Date()
      if (key === "status") return "חדש"
      return clean(data[key])
    })
    sheet.appendRow(values)

    notify(data)
    return json({ ok: true })
  } catch (err) {
    console.error(err)
    return json({ ok: false })
  } finally {
    lock.releaseLock()
  }
}

// Lets you open the web-app URL in a browser to check it is live
function doGet() {
  return json({ ok: true, message: "Leads endpoint is running" })
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME, 0)
    sheet.appendRow(COLUMNS.map(([, label]) => label))
    sheet.setFrozenRows(1)
    sheet.setRightToLeft(true)
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold").setBackground("#1B4D3E").setFontColor("#FFFFFF")
    sheet.setColumnWidth(6, 360)
    const statusCol = COLUMNS.findIndex(([key]) => key === "status") + 1
    const rule = SpreadsheetApp.newDataValidation().requireValueInList(["חדש", "בטיפול", "נסגר", "לא רלוונטי"], true).build()
    sheet.getRange(2, statusCol, 1000, 1).setDataValidation(rule)
  }
  return sheet
}

function notify(data) {
  if (!NOTIFY_EMAIL) return
  const source = data.utm_source ? `${data.utm_source}${data.utm_campaign ? " / " + data.utm_campaign : ""}` : "כניסה ישירה"
  const phoneDigits = String(data.phone || "").replace(/\D/g, "")
  const waNumber = phoneDigits.startsWith("0") ? "972" + phoneDigits.slice(1) : phoneDigits
  const body = [
    "פנייה חדשה מהאתר:",
    "",
    `שם: ${data.name}`,
    `טלפון: ${data.phone}`,
    `נושא: ${data.topic || "-"}`,
    `מועד: ${data.date || "-"}`,
    `פרטים: ${data.details || "-"}`,
    `מקור: ${source}`,
    "",
    `לחזור בוואטסאפ: https://wa.me/${waNumber}`,
    `לגיליון: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}`,
  ].join("\n")
  MailApp.sendEmail({ to: NOTIFY_EMAIL, subject: `פנייה חדשה מהאתר: ${data.name} (${data.topic || "ללא נושא"})`, body })
}

// Plain text only; blocks spreadsheet formulas sneaking in through the form
function clean(value) {
  const s = String(value == null ? "" : value).slice(0, 2000)
  return /^[=+\-@]/.test(s) ? "'" + s : s
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
