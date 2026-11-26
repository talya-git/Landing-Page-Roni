"use client"

import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLang } from "@/lib/lang-context"

// טיוטה: רוני צריכה לעבור על התשובות ולאשר אותן לפני קמפיין
const data = {
  he: {
    tag: "שאלות נפוצות",
    title: "מה חשוב לדעת לפני שפונים",
    items: [
      {
        q: "כמה זמן מראש כדאי לפנות?",
        a: "כמה שיותר מוקדם. תאריכים בעונת הכנסים נתפסים מהר, ולכן כדאי לפנות ברגע שיש תאריך, גם אם עוד לא כל הפרטים סגורים.",
      },
      {
        q: "איך נקבע המחיר?",
        a: "המחיר תלוי בסוג האירוע, באורך שלו, במיקום ובהיקף ההכנה. אחרי שיחת היכרות קצרה תקבלו הצעה מסודרת שמותאמת לאירוע שלכם.",
      },
      {
        q: "מה כוללת ההכנה לאירוע?",
        a: "שיחת תיאום, היכרות עם הארגון ועם הדוברים, הכנת שאלות ובניית מהלך האירוע יחד איתכם. ככה ביום עצמו הכול כבר מתוכנן.",
      },
      {
        q: "אפשר להזמין אותך רק לפאנל או לריאיון במה?",
        a: "בהחלט. אפשר להזמין אותי להנחיית האירוע כולו, להנחיית פאנל, לריאיון במה או לחלק מסוים בתוכנית.",
      },
      {
        q: "איך אפשר להתארח בתוכנית הרדיו?",
        a: "כתבו לי בצ׳אט באתר ובחרו ״התארחות בתוכנית הרדיו״. ספרו בכמה מילים מי אתם ומה הסיפור שלכם, ואחזור אליכם.",
      },
      {
        q: "מה הדרך הכי מהירה לפנות?",
        a: "הצ׳אט באתר: עונים על כמה שאלות קצרות והפרטים מגיעים אליי מיד. אפשר גם להתקשר, לשלוח הודעה בוואטסאפ או לכתוב לי במייל.",
      },
    ],
  },
  en: {
    tag: "FAQ",
    title: "Good to know before you reach out",
    items: [
      {
        q: "How far in advance should I get in touch?",
        a: "As early as you can. Dates in conference season fill up fast, so it's best to reach out as soon as you have a date, even if not every detail is final.",
      },
      {
        q: "How is the fee set?",
        a: "It depends on the type of event, its length, the location and how much preparation is involved. After a short intro call you'll get a clear quote for your event.",
      },
      {
        q: "What does the preparation include?",
        a: "A planning call, getting to know your organization and speakers, preparing questions and building the flow of the event with you, so everything is planned by the day itself.",
      },
      {
        q: "Can I book you just for a panel or a stage interview?",
        a: "Of course. You can book me to host the whole event, moderate a panel, run a stage interview or lead a specific part of the program.",
      },
      {
        q: "How can I be a guest on the radio show?",
        a: "Message me in the chat on this site and choose \"Guest on the radio show\". Tell me briefly who you are and what your story is, and I'll get back to you.",
      },
      {
        q: "What's the fastest way to reach you?",
        a: "The chat on this site: answer a few short questions and your details reach me right away. You can also call, send a WhatsApp message or email me.",
      },
    ],
  },
}

export function Faq() {
  const { lang } = useLang()
  const d = data[lang]

  return (
    <section id="faq" className="relative py-14 md:py-24" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E8E2D6" }}>
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "#BF4417" }}>{d.tag}</span>
            <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] md:text-4xl" style={{ color: "#1B4D3E" }}>{d.title}</h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {d.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="group rounded-xl" style={{ backgroundColor: "#F5F0E8", border: "1px solid #E8E2D6" }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold md:text-lg [&::-webkit-details-marker]:hidden" style={{ color: "#1B4D3E" }}>
                  {item.q}
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ color: "#BF4417" }} aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed md:text-base" style={{ color: "#4A443A" }}>{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
