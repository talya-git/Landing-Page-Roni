"use client"

import { Reveal } from "@/components/reveal"
import { useLang } from "@/lib/lang-context"
import { openChatBot } from "@/lib/chat-bot-events"

const data = {
  he: {
    tag: "קצת עליי",
    title: "אנשים תמיד היו הסיפור שלי",
    paragraphs: [
      "המסע המקצועי שלי התחיל על הבמה, כרקדנית פלמנקו וכיוצרת. משם המשכתי לעולמות הניהול, היזמות, התקשורת והובלת אנשים.",
      "כיום אני מנכ״לית אורן כהן גרופ, אשת תקשורת, מגישת רדיו, מנחת כנסים ופאנלים, מרצה ויוצרת הפודקאסט ״טוויסט בעלילה״.",
      "לכאורה, עולמות שונים. בפועל, כולם מחוברים באותו חוט: הסקרנות שלי כלפי אנשים, הסיפורים שמניעים אותם והיכולת להפוך מפגש אנושי לרגע משמעותי.",
      "אני מביאה לכל במה ניסיון ניהולי ועסקי, תשוקה לעולם התוכן, אינטליגנציה רגשית ויכולת לקרוא את הקהל ואת הרגע.",
      "כי בעיניי, השאלה אינה רק מה נאמר על הבמה, אלא מה אנשים לוקחים איתם כשהם יורדים ממנה.",
    ],
    cta: "בואו ניצור חוויה משמעותית יחד",
    name: "רוני לוגסי כהן",
    role: "אשת תקשורת",
  },
  en: {
    tag: "About Me",
    title: "People Have Always Been My Story",
    paragraphs: [
      "My career began on stage, as a flamenco dancer and creator. From there I moved into management, entrepreneurship, media and leading people.",
      "Today I'm CEO of Oren Cohen Group, a media personality, radio host, conference and panel moderator, speaker and creator of the podcast \"Twist BaAlila\" (Plot Twist).",
      "They look like different worlds, but one thread runs through all of them: my curiosity about people, the stories that drive them, and turning a human encounter into a moment that matters.",
      "I bring management and business experience to every stage, along with a passion for content, emotional intelligence and the ability to read the audience and the moment.",
      "For me, the question isn't only what is said on stage, but what people take with them when they walk off it.",
    ],
    cta: "Let's create something memorable together",
    name: "Roni Lugasi Cohen",
    role: "Media Personality",
  },
}

export function About() {
  const { lang } = useLang()
  const d = data[lang]

  return (
    <section id="about" className="relative overflow-hidden py-14 md:py-24 lg:py-36" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />

      <div className="relative mx-auto max-w-7xl px-5 md:px-16">
        <Reveal>
          <div className="mb-8 md:mb-16 flex items-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "#BF4417" }}>{d.tag}</span>
          </div>
        </Reveal>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-24">
          <Reveal className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl" style={{ backgroundColor: "#C2461A", opacity: 0.15 }} />
              <div className="absolute -bottom-8 -right-8 h-full w-full rounded-3xl" style={{ border: "1px solid rgba(212,82,26,0.2)" }} />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ aspectRatio: "4/5" }}>
                <img src="/media/roni-about.jpg" alt={d.name} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: "linear-gradient(to top, rgba(27,77,62,0.6), transparent)" }} />
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 rounded-2xl px-4 py-2 md:px-5 md:py-3" style={{ backgroundColor: "rgba(245,240,232,0.95)", backdropFilter: "blur(8px)" }}>
                  <p className="font-heading text-xs md:text-sm font-bold" style={{ color: "#1B4D3E" }}>{d.name}</p>
                  <p className="text-[10px] md:text-xs mt-0.5" style={{ color: "#BF4417" }}>{d.role}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 md:order-2" delay={120}>
            <h2 className="font-heading font-bold leading-[1.1] tracking-[-0.03em] text-3xl md:text-5xl lg:text-6xl" style={{ color: "#1B4D3E" }}>{d.title}</h2>
            <div className="mt-2 h-1 w-16 rounded-full" style={{ backgroundColor: "#C2461A" }} />
            <div className="mt-5 md:mt-8 space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "#5A5045" }}>
              {d.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a href="#contact" onClick={openChatBot} className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition-all duration-300 hover:gap-5" style={{ color: "#BF4417" }}>
              {d.cta}
              <span className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full text-white text-base" style={{ backgroundColor: "#C2461A" }}>←</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
