"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { useLang } from "@/lib/lang-context"
import { OPEN_CHATBOT_EVENT } from "@/lib/chat-bot-events"
import { LEADS_ENDPOINT, rememberSource, sendLead } from "@/lib/leads"

const WA_NUMBER = "972507770071"

type Lang = "he" | "en"
type Topic = { id: string; label: string; reply: string }
type Msg = { from: "bot" | "user"; text: string }
type Step = "topic" | "date" | "details" | "name" | "phone" | "done"

const copy: Record<Lang, {
  open: string
  teaser: string
  title: string
  subtitle: string
  hello: string
  askTopic: string
  topics: Topic[]
  askDate: string
  skip: string
  askDetails: string
  askName: string
  askPhone: (name: string) => string
  badPhone: string
  done: (name: string) => string
  doneSaved: (name: string) => string
  sendSaved: string
  send: string
  restart: string
  placeholder: string
  waIntro: string
  waTopic: string
  waDate: string
  waDetails: string
  waName: string
  waPhone: string
  none: string
}> = {
  he: {
    open: "לפנייה בצ'אט",
    teaser: "היי 👋 מתכננים כנס, הרצאה או אירוע? כתבו לי כאן ואעזור לכם להתחיל.",
    title: "רוני לוגסי כהן",
    subtitle: "בדרך כלל עונה תוך כמה שעות",
    hello: "היי, כאן העוזרת הדיגיטלית של רוני 👋",
    askTopic: "במה אפשר לעזור?",
    topics: [
      { id: "conference", label: "הנחיית כנס או אירוע", reply: "מעולה. רוני מנחה כנסים עסקיים, אירועי חברה, השקות, טקסים ואירועי נשים, ומתאימה את ההנחיה לקהל ולאופי האירוע." },
      { id: "panel", label: "הנחיית פאנל", reply: "רוני מנחה פאנלים בכנסים ובאירועי תרבות, ומכינה מראש את השאלות יחד עם המשתתפים כדי שהשיחה תהיה חיה ומעניינת." },
      { id: "podcast", label: "פודקאסט או ראיון", reply: "רוני מראיינת לפודקאסטים, לסדרות תוכן ולראיונות אישיים, לחברות, לארגונים ולאנשים פרטיים." },
      { id: "radio", label: "התארחות בתוכנית הרדיו", reply: "תוכנית הרדיו השבועית של רוני מארחת אנשי עסקים, יזמים, אנשי ציבור ויוצרים. נשמח לשמוע עליך." },
      { id: "content", label: "הפקת תוכן או שיתוף פעולה", reply: "רוני מפתחת ומובילה פורמטים של ראיונות וסדרות תוכן לחברות ולמותגים, ופתוחה לשיתופי פעולה." },
      { id: "other", label: "משהו אחר", reply: "בשמחה. ספרו לי במה מדובר ורוני תחזור אליכם." },
    ],
    askDate: "יש כבר תאריך או תקופה בערך?",
    skip: "עוד לא יודעים",
    askDetails: "ספרו לי בכמה מילים על האירוע או הפרויקט: מה הנושא, מי הקהל וכמה אנשים בערך.",
    askName: "ואיך קוראים לך? (ואם רלוונטי, שם החברה או הארגון)",
    askPhone: (name) => `נעים מאוד ${name}! ומה מספר הטלפון שלך, כדי שרוני תוכל לחזור אליך?`,
    badPhone: "נראה שחסרות ספרות. אפשר לכתוב שוב את מספר הטלפון?",
    doneSaved: (name) => `תודה ${name}! הפרטים הגיעו לרוני והיא תחזור אליכם בהקדם. רוצים לזרז? אפשר לשלוח לה את הפנייה גם בוואטסאפ.`,
    sendSaved: "לשלוח גם בוואטסאפ",
    done: (name) => `תודה ${name}! קיבלתי את כל הפרטים. לחצו על הכפתור למטה כדי לשלוח את הפנייה לרוני בוואטסאפ, והיא תחזור אליכם בהקדם.`,
    send: "שליחה לרוני בוואטסאפ",
    restart: "פנייה חדשה",
    placeholder: "כתבו כאן...",
    waIntro: "היי רוני, הגעתי מהאתר ואשמח לפרטים.",
    waTopic: "נושא",
    waDate: "תאריך",
    waDetails: "פרטים",
    waName: "שם",
    waPhone: "טלפון",
    none: "עוד לא נקבע",
  },
  en: {
    open: "Chat with me",
    teaser: "Hi 👋 Planning a conference, talk or event? Message me here and I'll help you get started.",
    title: "Roni Lugasi Cohen",
    subtitle: "Usually replies within a few hours",
    hello: "Hi, I'm Roni's digital assistant 👋",
    askTopic: "How can I help?",
    topics: [
      { id: "conference", label: "Conference or event moderation", reply: "Great. Roni moderates business conferences, corporate events, launches, ceremonies and women's events, and adapts each one to the audience." },
      { id: "panel", label: "Panel moderation", reply: "Roni moderates panels at conferences and cultural events, and prepares the questions with the speakers ahead of time so the discussion stays lively." },
      { id: "podcast", label: "Podcast or interview", reply: "Roni hosts podcasts, interview series and personal interviews for companies, organizations and individuals." },
      { id: "radio", label: "Guest on the radio show", reply: "Roni's weekly radio show features business leaders, entrepreneurs, public figures and creators. We'd love to hear about you." },
      { id: "content", label: "Content production or collaboration", reply: "Roni develops and hosts interview formats and series for companies and brands, and is open to collaborations." },
      { id: "other", label: "Something else", reply: "Sure. Tell me what you have in mind and Roni will get back to you." },
    ],
    askDate: "Do you have a date or rough time frame?",
    skip: "Not sure yet",
    askDetails: "Tell me a bit about the event or project: the topic, the audience and roughly how many people.",
    askName: "And what's your name? (plus your company or organization, if relevant)",
    askPhone: (name) => `Nice to meet you, ${name}! What's your phone number, so Roni can get back to you?`,
    badPhone: "Looks like some digits are missing. Could you type your phone number again?",
    doneSaved: (name) => `Thanks ${name}! Roni has your details and will get back to you soon. In a hurry? You can also send her your request on WhatsApp.`,
    sendSaved: "Also send on WhatsApp",
    done: (name) => `Thanks ${name}! I have everything I need. Tap the button below to send your request to Roni on WhatsApp and she'll get back to you soon.`,
    send: "Send to Roni on WhatsApp",
    restart: "New request",
    placeholder: "Type here...",
    waIntro: "Hi Roni, I found you through your website and would like more details.",
    waTopic: "Topic",
    waDate: "Date",
    waDetails: "Details",
    waName: "Name",
    waPhone: "Phone",
    none: "Not set yet",
  },
}

export function ChatBot() {
  const { lang } = useLang()
  const c = copy[lang]

  const [open, setOpenState] = useState(false)
  const [teaser, setTeaser] = useState(false)
  const [seen, setSeen] = useState(false) // opened or dismissed at least once
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [step, setStep] = useState<Step>("topic")
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState("")
  const [data, setData] = useState({ topic: "", date: "", details: "", name: "", phone: "" })
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const reset = () => {
    setMsgs([{ from: "bot", text: c.hello }, { from: "bot", text: c.askTopic }])
    setStep("topic")
    setData({ topic: "", date: "", details: "", name: "", phone: "" })
    setInput("")
  }

  const setOpen = (v: boolean | ((o: boolean) => boolean)) => {
    setOpenState(v)
    setTeaser(false)
    setSeen(true)
    try { sessionStorage.setItem("chatbot-seen", "1") } catch {}
  }

  useEffect(() => { rememberSource() }, [])

  // Any "contact" button on the page opens the bot
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener(OPEN_CHATBOT_EVENT, handler)
    return () => window.removeEventListener(OPEN_CHATBOT_EVENT, handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Pop up a greeting a few seconds after the visitor arrives (once per visit)
  useEffect(() => {
    let already = false
    try { already = sessionStorage.getItem("chatbot-seen") === "1" } catch {}
    if (already) { setSeen(true); return }
    const timer = setTimeout(() => setTeaser(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  // Start (or restart) the conversation when opened or when the language changes
  useEffect(() => {
    reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [msgs, typing, open])

  useEffect(() => {
    if (open && step !== "topic" && step !== "done") inputRef.current?.focus()
  }, [open, step, typing])

  const botSay = (texts: string[], next: Step) => {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs((m) => [...m, ...texts.map((text) => ({ from: "bot" as const, text }))])
      setStep(next)
    }, 700)
  }

  const pickTopic = (t: Topic) => {
    setMsgs((m) => [...m, { from: "user", text: t.label }])
    setData((d) => ({ ...d, topic: t.label }))
    botSay([t.reply, c.askDate], "date")
  }

  const firstName = (full: string) => full.trim().split(/[ ,]/)[0]

  const submit = (raw?: string) => {
    const text = (raw ?? input).trim()
    if (!text || typing) return
    setInput("")
    setMsgs((m) => [...m, { from: "user", text }])
    if (step === "date") {
      setData((d) => ({ ...d, date: text }))
      botSay([c.askDetails], "details")
    } else if (step === "details") {
      setData((d) => ({ ...d, details: text }))
      botSay([c.askName], "name")
    } else if (step === "name") {
      setData((d) => ({ ...d, name: text }))
      botSay([c.askPhone(firstName(text))], "phone")
    } else if (step === "phone") {
      const digits = text.replace(/\D/g, "")
      if (digits.length < 9 || digits.length > 15) {
        botSay([c.badPhone], "phone")
        return
      }
      const lead = { ...data, phone: text, lang }
      setData(lead)
      const first = firstName(data.name)
      botSay([LEADS_ENDPOINT ? c.doneSaved(first) : c.done(first)], "done")
      void sendLead(lead)
    }
  }

  const waText = [
    c.waIntro,
    "",
    `${c.waTopic}: ${data.topic}`,
    `${c.waDate}: ${data.date || c.none}`,
    `${c.waDetails}: ${data.details}`,
    `${c.waName}: ${data.name}`,
    `${c.waPhone}: ${data.phone}`,
  ].join("\n")
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`

  const showInput = step === "date" || step === "details" || step === "name" || step === "phone"

  return (
    <>
      {/* Launcher (desktop; on mobile the bottom bar opens the bot) */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={c.open}
        className="fixed bottom-8 right-8 z-40 hidden h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 lg:flex"
        style={{ backgroundColor: "#1B4D3E", color: "#F5F0E8", boxShadow: "0 8px 32px rgba(27,77,62,0.45)", border: "2px solid #D4521A" }}
      >
        {!open && !seen && (
          <span className="absolute inset-0 animate-ping rounded-full" style={{ backgroundColor: "rgba(212,82,26,0.35)" }} />
        )}
        {open ? <X className="relative h-6 w-6" /> : <MessageCircle className="relative h-7 w-7" />}
        {!open && !seen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ backgroundColor: "#C2461A" }}>1</span>
        )}
      </button>

      {/* Greeting popup */}
      {teaser && !open && (
        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className="fixed bottom-20 right-4 z-40 w-[min(19rem,calc(100vw-6.5rem))] lg:bottom-28 lg:right-8 lg:w-72"
          style={{ animation: "fade-up 0.5s ease both" }}
        >
          <div className="relative">
            <button
              onClick={() => setOpen(true)}
              className="block w-full rounded-2xl p-4 text-start shadow-2xl transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2D6", boxShadow: "0 16px 48px rgba(27,77,62,0.28)" }}
            >
              <span className="flex items-start gap-3">
                <img src="/media/roni-about.jpg" alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" style={{ border: "2px solid #D4521A" }} />
                <span className="block pe-4">
                  <span className="block text-xs font-semibold" style={{ color: "#1B4D3E" }}>{c.title}</span>
                  <span className="mt-1 block text-sm leading-snug" style={{ color: "#2A2620" }}>{c.teaser}</span>
                </span>
              </span>
            </button>
            <button
              onClick={() => { setTeaser(false); setSeen(true); try { sessionStorage.setItem("chatbot-seen", "1") } catch {} }}
              aria-label={lang === "he" ? "סגירה" : "Close"}
              className="absolute top-2 end-2 rounded-full p-1 opacity-60 hover:opacity-100"
              style={{ color: "#2A2620" }}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Panel */}
      {open && (
        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className="fixed inset-x-3 bottom-20 z-50 flex max-h-[75vh] flex-col overflow-hidden rounded-2xl shadow-2xl sm:inset-x-auto sm:right-4 sm:w-[380px] lg:bottom-28 lg:right-8"
          style={{ backgroundColor: "#F5F0E8", border: "1px solid #DDD8CE", boxShadow: "0 24px 80px rgba(27,77,62,0.3)", animation: "fade-up 0.35s ease both" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: "#1B4D3E", color: "#F5F0E8" }}>
            <img src="/media/roni-about.jpg" alt="" className="h-10 w-10 rounded-full object-cover" style={{ border: "2px solid #D4521A" }} />
            <div className="flex-1 leading-tight">
              <p className="text-sm font-semibold">{c.title}</p>
              <p className="text-[11px] opacity-70">{c.subtitle}</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="close" className="rounded-full p-1 hover:bg-white/10">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-2.5 overflow-y-auto px-4 py-4">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2 text-sm leading-relaxed"
                  style={
                    m.from === "user"
                      ? { backgroundColor: "#C2461A", color: "#FFFFFF" }
                      : { backgroundColor: "#FFFFFF", color: "#2A2620", border: "1px solid #E8E2D6" }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl px-4 py-3" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2D6" }}>
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full" style={{ backgroundColor: "#6B6355", animationDelay: `${d * 150}ms` }} />
                  ))}
                </div>
              </div>
            )}

            {!typing && step === "topic" && (
              <div className="flex flex-wrap gap-2 pt-1">
                {c.topics.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => pickTopic(t)}
                    className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:bg-[#D4521A] hover:text-white"
                    style={{ border: "1px solid #D4521A", color: "#BF4417", backgroundColor: "transparent" }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            )}

            {!typing && step === "date" && (
              <div className="pt-1">
                <button
                  onClick={() => submit(c.skip)}
                  className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:bg-[#D4521A] hover:text-white"
                  style={{ border: "1px solid #D4521A", color: "#BF4417" }}
                >
                  {c.skip}
                </button>
              </div>
            )}

            {!typing && step === "done" && (
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold text-white"
                  style={{ backgroundColor: "#0F7A3F" }}
                >
                  {LEADS_ENDPOINT ? c.sendSaved : c.send}
                </a>
                <button onClick={reset} className="text-xs underline opacity-80 hover:opacity-100" style={{ color: "#1B4D3E" }}>
                  {c.restart}
                </button>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          {showInput && (
            <form
              onSubmit={(e) => { e.preventDefault(); submit() }}
              className="flex items-center gap-2 px-3 py-2.5"
              style={{ borderTop: "1px solid #DDD8CE", backgroundColor: "#FFFFFF" }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={step === "phone" ? "050-0000000" : c.placeholder}
                aria-label={c.placeholder}
                inputMode={step === "phone" ? "tel" : "text"}
                type={step === "phone" ? "tel" : "text"}
                dir={step === "phone" ? "ltr" : undefined}
                className="flex-1 bg-transparent px-2 py-1.5 text-sm outline-none"
                style={{ color: "#2A2620" }}
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="send"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-40"
                style={{ backgroundColor: "#C2461A" }}
              >
                <Send className={`h-4 w-4 ${lang === "he" ? "rotate-180" : ""}`} />
              </button>
            </form>
          )}
        </div>
      )}
    </>
  )
}
