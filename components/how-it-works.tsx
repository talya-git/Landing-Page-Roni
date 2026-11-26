"use client"

import { MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLang } from "@/lib/lang-context"
import { openChatBot } from "@/lib/chat-bot-events"

// טיוטה: רוני צריכה לאשר שהשלבים מתארים נכון את דרך העבודה שלה
const data = {
  he: {
    tag: "איך זה עובד",
    title: "משיחה ראשונה ועד הבמה",
    steps: [
      { title: "שיחת היכרות", body: "ספרו לי על האירוע: מי הקהל, מה המטרה ומה חשוב לכם שיקרה בו. שיחה קצרה וללא התחייבות." },
      { title: "הכנה ותחקיר", body: "אני לומדת את הארגון, את הדוברים ואת המסרים, ובונה איתכם את מהלך האירוע, את השאלות ואת הקצב." },
      { title: "היום עצמו", body: "אני מגיעה מוכנה ומובילה את הבמה מההתחלה ועד הסוף, כדי שאתם תוכלו להתפנות לאורחים." },
    ],
    cta: "בואו נתחיל בשיחת היכרות",
  },
  en: {
    tag: "How it works",
    title: "From the first call to the stage",
    steps: [
      { title: "Intro call", body: "Tell me about the event: who the audience is, what you want to achieve and what matters most. A short call, no commitment." },
      { title: "Preparation", body: "I get to know your organization, speakers and key messages, and plan the flow, the questions and the pace with you." },
      { title: "The day itself", body: "I arrive prepared and run the stage from start to finish, so you can focus on your guests." },
    ],
    cta: "Let's start with an intro call",
  },
}

export function HowItWorks() {
  const { lang } = useLang()
  const d = data[lang]

  return (
    <section id="how" className="relative py-14 md:py-24" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-16">
        <Reveal className="text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "#BF4417" }}>{d.tag}</span>
            <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] md:text-4xl lg:text-5xl" style={{ color: "#1B4D3E" }}>{d.title}</h2>
        </Reveal>

        <ol className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-8">
          {d.steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 120} className="h-full">
              <div className="relative h-full rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2D6", boxShadow: "0 4px 24px rgba(27,77,62,0.06)" }}>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold text-white"
                  style={{ backgroundColor: "#1B4D3E" }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold" style={{ color: "#1B4D3E" }}>{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed md:text-base" style={{ color: "#4A443A" }}>{s.body}</p>
              </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={300} className="mt-10 text-center">
          <button
            onClick={() => openChatBot()}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: "#C2461A", color: "#FFFFFF", boxShadow: "0 8px 24px rgba(194,70,26,0.3)" }}
          >
            <MessageCircle className="h-5 w-5" />
            {d.cta}
          </button>
        </Reveal>
      </div>
    </section>
  )
}
