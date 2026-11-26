// Sends chat-bot inquiries to the Google Sheet (through a Google Apps Script web app).
// Paste the web-app URL from Apps Script here. While it is empty, inquiries go to WhatsApp only.
export const LEADS_ENDPOINT = ""

export type Lead = {
  topic: string
  date: string
  details: string
  name: string
  phone: string
  lang: "he" | "en"
}

const SOURCE_KEY = "lead-source"

// Remember where the visitor came from (UTM tags / referrer) on their first page view
export function rememberSource() {
  try {
    if (sessionStorage.getItem(SOURCE_KEY)) return
    const params = new URLSearchParams(window.location.search)
    const source = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      referrer: document.referrer || "",
      landing: window.location.href,
    }
    sessionStorage.setItem(SOURCE_KEY, JSON.stringify(source))
  } catch {}
}

function getSource(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(SOURCE_KEY) || "{}")
  } catch {
    return {}
  }
}

export async function sendLead(lead: Lead): Promise<boolean> {
  if (!LEADS_ENDPOINT) return false
  try {
    // text/plain + no-cors avoids the CORS preflight that Apps Script can't answer
    await fetch(LEADS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...lead, ...getSource() }),
    })
    return true
  } catch {
    return false
  }
}
