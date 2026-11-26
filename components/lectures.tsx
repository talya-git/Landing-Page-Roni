"use client"

import { Clock, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLang } from "@/lib/lang-context"
import { openChatBot } from "@/lib/chat-bot-events"

const data = {
  he: {
    tag: "הרצאות וסדנאות",
    title: "הרצאות וסדנאות לארגונים",
    items: [
      {
        title: "א.נשים. נכסים. AI.",
        lead: "מה באמת יוצר ערך בעולם שמשתנה במהירות?",
        body: "מפגש המחבר בין אנשים, נכסים ובינה מלאכותית, ובוחן את האופן שבו אנחנו מקבלים החלטות, מזהים הזדמנויות ומביאים את הערך האנושי שלנו לעולם העסקי החדש.",
        meta: "הרצאה חווייתית | 75 דקות",
      },
      {
        title: "לא הכול בטאבו",
        lead: "על הנכסים המשמעותיים שלא רשומים על שמנו.",
        body: "נקודת מבט אחרת על הצלחה, מערכות יחסים, בחירות, הזדמנויות והנכסים האנושיים שאנחנו צוברים לאורך החיים, אלה שאי אפשר למדוד רק בכסף.",
        meta: "הרצאה",
      },
      {
        title: "סדנאות לארגונים ולקבוצות",
        lead: "",
        body: "מפגשים המותאמים לצורכי הארגון ומשלבים תוכן משמעותי, התנסות אישית וקבוצתית וכלים מעשיים ליום שאחרי.",
        meta: "90 דקות או פורמט מורחב של שלוש שעות",
      },
    ],
    cta: "להזמנת הרצאה או סדנה",
  },
  en: {
    tag: "Talks & Workshops",
    title: "Talks and workshops for organizations",
    items: [
      {
        title: "People. Assets. AI.",
        lead: "What really creates value in a fast-changing world?",
        body: "A session that brings together people, assets and artificial intelligence, and looks at how we make decisions, spot opportunities and bring our human value into the new business world.",
        meta: "Experiential talk | 75 minutes",
      },
      {
        title: "Not Everything Is in the Land Registry",
        lead: "On the valuable assets that aren't registered in our name.",
        body: "A different look at success, relationships, choices, opportunities and the human assets we build over a lifetime, the ones money alone can't measure.",
        meta: "Talk",
      },
      {
        title: "Workshops for organizations and groups",
        lead: "",
        body: "Sessions tailored to the organization's needs, combining meaningful content, personal and group exercises and practical tools for the day after.",
        meta: "90 minutes, or an extended three-hour format",
      },
    ],
    cta: "Book a talk or workshop",
  },
}

export function Lectures() {
  const { lang } = useLang()
  const d = data[lang]

  return (
    <section id="lectures" className="relative py-14 md:py-24" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-16">
        <Reveal className="text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "#BF4417" }}>{d.tag}</span>
            <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] md:text-4xl lg:text-5xl" style={{ color: "#1B4D3E" }}>{d.title}</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {d.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="h-full">
              <article
                className="flex h-full flex-col rounded-2xl p-6 md:p-8"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2D6", boxShadow: "0 4px 24px rgba(27,77,62,0.06)" }}
              >
                <div className="h-1 w-12 rounded-full" style={{ backgroundColor: "#C2461A" }} />
                <h3 className="mt-5 font-heading text-xl font-bold md:text-2xl" style={{ color: "#1B4D3E" }}>{item.title}</h3>
                {item.lead && (
                  <p className="mt-2 text-base font-semibold leading-snug" style={{ color: "#BF4417" }}>{item.lead}</p>
                )}
                <p className="mt-3 flex-1 text-sm leading-relaxed md:text-base" style={{ color: "#4A443A" }}>{item.body}</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: "#1B4D3E" }}>
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {item.meta}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-10 text-center">
          <button
            onClick={() => openChatBot(undefined, "lecture")}
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
