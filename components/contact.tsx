"use client"

import { Reveal } from "@/components/reveal"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { openChatBot } from "@/lib/chat-bot-events"
import { useLang } from "@/lib/lang-context"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.523 5.26l-.999 3.648 3.965-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  )
}

const data = {
  he: {
    tag: "בואו ניצור יחד",
    title: "לכל שיחה יש כוח להשפיע.",
    p1: "אם אתם מחפשים מנחה לכנס, מראיינת לפודקאסט, מנחת פאנל, יוצרת תוכן או שותפה לפרויקט משמעותי, אשמח להכיר.",
    p2: "בואו ניצור יחד את הרגע הבא שלכם.",
    waLabel: "שליחת הודעה בוואטסאפ",
    chat: "התחילו שיחה איתי כאן",
    chatSub: "כמה שאלות קצרות ואחזור אליכם בהקדם",
    orLabel: "או בדרכים הרגילות",
  },
  en: {
    tag: "Let's Create Together",
    title: "Let's start with a conversation.",
    p1: "Looking for a conference moderator, a podcast interviewer, a panel host or a partner for your next project? I'd be happy to hear from you.",
    p2: "Send me a message and we'll take it from there.",
    waLabel: "Message on WhatsApp",
    chat: "Start a chat with me",
    chatSub: "A few quick questions and I'll get back to you soon",
    orLabel: "Or reach me directly",
  },
}

export function Contact() {
  const { lang } = useLang()
  const d = data[lang]

  return (
    <section id="contact" className="relative overflow-hidden" style={{ backgroundColor: "#1B4D3E" }}>
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />

      <div className="relative mx-auto max-w-4xl px-5 py-14 md:py-24 lg:py-36 md:px-16">
        <div className="flex flex-col gap-8 md:gap-12">
          <Reveal className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "#F59E6B" }}>{d.tag}</span>
              <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
            </div>
            <h2 className="font-heading font-bold leading-[1.05] tracking-[-0.03em] text-3xl md:text-5xl lg:text-6xl" style={{ color: "#F5F0E8" }}>{d.title}</h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(245,240,232,0.8)" }}>{d.p1}</p>
            <p className="mt-2 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium" style={{ color: "rgba(245,240,232,0.85)" }}>{d.p2}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => openChatBot()}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold transition-transform duration-300 hover:scale-105 md:text-lg"
                style={{ backgroundColor: "#C2461A", color: "#FFFFFF", boxShadow: "0 8px 32px rgba(212,82,26,0.4)" }}
              >
                <MessageCircle className="h-5 w-5" />
                {d.chat}
              </button>
              <p className="text-xs md:text-sm" style={{ color: "rgba(245,240,232,0.8)" }}>{d.chatSub}</p>
            </div>
          </Reveal>

          <p className="-mb-4 text-center text-xs tracking-[0.2em]" style={{ color: "rgba(245,240,232,0.8)" }}>{d.orLabel}</p>

          <Reveal delay={150}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 max-w-5xl mx-auto w-full">
              {[
                { icon: Phone, label: lang === "he" ? "טלפון" : "Phone", value: "050-777-0071", href: "tel:+972507770071" },
                { icon: WhatsAppIcon, label: "WhatsApp", value: d.waLabel, href: "https://wa.me/972507770071" },
                { icon: Mail, label: lang === "he" ? "דואר אלקטרוני" : "Email", value: "roni@orencohengroup.com", href: "mailto:roni@orencohengroup.com" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center justify-center gap-3 rounded-2xl p-6 md:p-7 text-center transition-all duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: "rgba(245,240,232,0.05)", border: "1px solid rgba(245,240,232,0.1)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(212,82,26,0.12)"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212,82,26,0.4)"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(245,240,232,0.05)"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.1)"
                  }}
                >
                  <div className="flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(212,82,26,0.15)", color: "#F59E6B" }}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(245,240,232,0.8)" }}>{c.label}</p>
                    <p className="mt-0.5 font-heading text-sm font-semibold break-all" style={{ color: "#F5F0E8" }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
