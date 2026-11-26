"use client"

import { Reveal } from "@/components/reveal"
import { Mic2, Headphones, Users, MessagesSquare, Presentation } from "lucide-react"
import { openChatBotWith, type ChatTopicId } from "@/lib/chat-bot-events"
import { useLang } from "@/lib/lang-context"

const data = {
  he: {
    tag: "תחומי הפעילות",
    title: "מה נוכל ליצור יחד?",
    services: [
      { icon: Mic2, topic: "conference" as ChatTopicId, title: "הנחיית כנסים ואירועים עסקיים", body: "הנחיה מקצועית של כנסים, ועידות, אירועי חברות, השקות וטקסים, בהתאמה למטרות הארגון, לקהל ולמסרים המרכזיים.", cta: "להזמנת הנחיית כנס", href: "" },
      { icon: Presentation, topic: "lecture" as ChatTopicId, title: "הרצאות מעוררות מחשבה", body: "הרצאות המשלבות סיפורים אישיים, תובנות עסקיות, נקודות מבט מפתיעות וכלים מעשיים מעולמות הניהול, המנהיגות וההתפתחות האישית.", cta: "להיכרות עם ההרצאות", href: "#lectures" },
      { icon: Users, topic: "lecture" as ChatTopicId, title: "סדנאות חווייתיות לארגונים", body: "מפגשים המשלבים תוכן, התנסות, שיח וכלים יישומיים, ומאפשרים למשתתפים לצאת עם תובנות חדשות ועם יכולת לפעול אחרת.", cta: "להתאמת סדנה לארגון", href: "" },
      { icon: MessagesSquare, topic: "panel" as ChatTopicId, title: "הנחיית פאנלים ושבתות תרבות", body: "הובלת שיח אינטליגנטי, מעמיק ודינמי, המחבר בין נקודות מבט שונות ומעניק לקהל ערך באמצעות שאלות מדויקות ותחקיר מקדים.", cta: "להזמנת הנחיית פאנל", href: "" },
      { icon: Headphones, topic: "content" as ChatTopicId, title: "פודקאסטים, ראיונות ותוכן לארגונים", body: "פיתוח והובלת ראיונות עומק, פודקאסטים וסדרות תוכן המחברים בין הסיפור הארגוני לבין האנשים שהארגון מבקש להגיע אליהם.", cta: "ליצירת תוכן משותף", href: "" },
    ],
  },
  en: {
    tag: "Services",
    title: "What can we create together?",
    services: [
      { icon: Mic2, topic: "conference" as ChatTopicId, title: "Conference & business event hosting", body: "Professional hosting of conferences, summits, company events, launches and ceremonies, tailored to the organization's goals, audience and key messages.", cta: "Book a conference host", href: "" },
      { icon: Presentation, topic: "lecture" as ChatTopicId, title: "Thought-provoking talks", body: "Talks that combine personal stories, business insights, surprising perspectives and practical tools from management, leadership and personal growth.", cta: "See the talks", href: "#lectures" },
      { icon: Users, topic: "lecture" as ChatTopicId, title: "Experiential workshops for organizations", body: "Sessions that combine content, hands-on practice, discussion and practical tools, so participants leave with new insights and new ways to act.", cta: "Tailor a workshop", href: "" },
      { icon: MessagesSquare, topic: "panel" as ChatTopicId, title: "Panel & cultural event moderation", body: "Smart, in-depth and lively discussions that bring different viewpoints together, driven by sharp questions and thorough preparation.", cta: "Book a panel moderator", href: "" },
      { icon: Headphones, topic: "content" as ChatTopicId, title: "Podcasts, interviews & content for organizations", body: "Developing and hosting in-depth interviews, podcasts and series that connect an organization's story with the people it wants to reach.", cta: "Create content together", href: "" },
    ],
  },
}

export function Services() {
  const { lang } = useLang()
  const d = data[lang]

  return (
    <section id="services" className="relative py-14 md:py-24 lg:py-36 overflow-hidden" style={{ backgroundColor: "#1B4D3E" }}>
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <Reveal className="text-center mb-10 md:mb-16">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em]" style={{ color: "#F59E6B" }}>{d.tag}</span>
            <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
          </div>
          <h2 className="font-heading font-bold leading-[1.1] tracking-[-0.03em] text-3xl md:text-5xl lg:text-6xl" style={{ color: "#F5F0E8" }}>{d.title}</h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4">
          {d.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-400 hover:-translate-y-2"
                style={{ backgroundColor: "rgba(245,240,232,0.05)", border: "1px solid rgba(245,240,232,0.1)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(245,240,232,0.09)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212,82,26,0.5)"
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.25)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(245,240,232,0.05)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.1)"
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
                }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100" style={{ background: "linear-gradient(to left, transparent, #D4521A, transparent)" }} />
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: "rgba(212,82,26,0.15)", color: "#F59E6B" }}>
                  <s.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 md:mt-6 font-heading text-lg md:text-2xl font-bold" style={{ color: "#F5F0E8" }}>{s.title}</h3>
                <p className="mt-2 md:mt-3 flex-1 text-sm md:text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.8)" }}>{s.body}</p>
                <a
                  href={s.href || "#contact"}
                  onClick={s.href ? undefined : openChatBotWith(s.topic)}
                  className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold underline decoration-[#F59E6B] decoration-2 underline-offset-[6px]"
                  style={{ color: "#F5F0E8" }}
                >
                  {s.cta}
                  <span aria-hidden="true" style={{ color: "#F59E6B" }}>{lang === "he" ? "←" : "→"}</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
