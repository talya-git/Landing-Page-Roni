"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { useLang } from "@/lib/lang-context"

const WA_NUMBER = "972507770071"

type Lang = "he" | "en"
type Topic = { id: string; label: string; reply: string }
type Msg = { from: "bot" | "user"; text: string }
type Step = "topic" | "date" | "details" | "name" | "done"

const copy: Record<Lang, {
  open: string
  title: string
  subtitle: string
  hello: string
  askTopic: string
  topics: Topic[]
  askDate: string
  skip: string
  askDetails: string
  askName: string
  done: (name: string) => string
  send: string
  restart: string
  placeholder: string
  waIntro: string
  waTopic: string
  waDate: string
  waDetails: string
  waName: string
  none: string
}> = {
  he: {
    open: "יש לך שאלה? כתבו לי",
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
    done: (name) => `תודה ${name}! קיבלתי את כל הפרטים. לחצו על הכפתור למטה כדי לשלוח את הפנייה לרוני בוואטסאפ, והיא תחזור אליכם בהקדם.`,
    send: "שליחה לרוני בוואטסאפ",
    restart: "פנייה חדשה",
    placeholder: "כתבו כאן...",
    waIntro: "היי רוני, הגעתי מהאתר ואשמח לפרטים.",
    waTopic: "נושא",
    waDate: "תאריך",
    waDetails: "פרטים",
    waName: "שם",
    none: "עוד לא נקבע",
  },
  en: {
    open: "Questions? Message me",
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
    done: (name) => `Thanks ${name}! I have everything I need. Tap the button below to send your request to Roni on WhatsApp and she'll get back to you soon.`,
    send: "Send to Roni on WhatsApp",
    restart: "New request",
    placeholder: "Type here...",
    waIntro: "Hi Roni, I found you through your website and would like more details.",
    waTopic: "Topic",
    waDate: "Date",
    waDetails: "Details",
    waName: "Name",
    none: "Not set yet",
  },
}

export function ChatBot() {
  const { lang } = useLang()
  const c = copy[lang]

  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [step, setStep] = useState<Step>("topic")
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState("")
  const [data, setData] = useState({ topic: "", date: "", details: "", name: "" })
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const reset = () => {
    setMsgs([{ from: "bot", text: c.hello }, { from: "bot", text: c.askTopic }])
    setStep("topic")
    setData({ topic: "", date: "", details: "", name: "" })
    setInput("")
  }

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
      botSay([c.done(text.split(/[ ,]/)[0])], "done")
    }
  }

  const waText = [
    c.waIntro,
    "",
    `${c.waTopic}: ${data.topic}`,
    `${c.waDate}: ${data.date || c.none}`,
    `${c.waDetails}: ${data.details}`,
    `${c.waName}: ${data.name}`,
  ].join("\n")
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`

  const showInput = step === "date" || step === "details" || step === "name"

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={c.open}
        className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 lg:bottom-8 lg:right-8"
        style={{ backgroundColor: "#1B4D3E", color: "#F5F0E8", boxShadow: "0 8px 32px rgba(27,77,62,0.45)", border: "2px solid #D4521A" }}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {!open && (
        <div
          className="fixed bottom-[8.6rem] right-4 z-40 hidden rounded-full px-4 py-2 text-xs font-medium shadow-lg sm:block lg:bottom-[5.6rem] lg:right-8"
          style={{ backgroundColor: "#F5F0E8", color: "#1B4D3E", border: "1px solid #DDD8CE", animation: "fade-up 0.6s ease 1.5s both" }}
        >
          {c.open}
        </div>
      )}

      {/* Panel */}
      {open && (
        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className="fixed inset-x-3 bottom-36 z-50 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl shadow-2xl sm:inset-x-auto sm:right-4 sm:w-[380px] lg:bottom-28 lg:right-8"
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
                      ? { backgroundColor: "#D4521A", color: "#FFFFFF" }
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
                    style={{ border: "1px solid #D4521A", color: "#D4521A", backgroundColor: "transparent" }}
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
                  style={{ border: "1px solid #D4521A", color: "#D4521A" }}
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
                  style={{ backgroundColor: "#25D366" }}
                >
                  {c.send}
                </a>
                <button onClick={reset} className="text-xs underline opacity-60 hover:opacity-100" style={{ color: "#1B4D3E" }}>
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
                placeholder={c.placeholder}
                className="flex-1 bg-transparent px-2 py-1.5 text-sm outline-none"
                style={{ color: "#2A2620" }}
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="send"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-40"
                style={{ backgroundColor: "#D4521A" }}
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
