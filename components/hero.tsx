"use client"

import { useLang } from "@/lib/lang-context"
import { openChatBot } from "@/lib/chat-bot-events"

const t = {
  he: {
    name: "רוני לוגסי כהן",
    subtitle: "אשת תקשורת | מנחת כנסים | מרצה ומראיינת",
    h1a: "יש במות שמעבירות מסר.",
    h1b: "ויש במות שמשאירות חותם.",
    p1: "הנחיית כנסים, פאנלים, הרצאות, ראיונות ואירועי תוכן המחברים בין אנשים, רעיונות והשפעה.",
    p2: "יותר מ־25 שנות ניסיון על הבמה, בעולמות הניהול והתקשורת, בשילוב הבנה עסקית, רגישות אנושית ויכולת להפוך תוכן לחוויה משמעותית.",
    cta: "בואו נדבר על האירוע הבא שלכם",
    secondary: "הכירו אותי על הבמה",
    role: "אשת תקשורת",
  },
  en: {
    name: "Roni Lugasi Cohen",
    subtitle: "Media Personality | Conference Moderator | Speaker & Interviewer",
    h1a: "Some stages deliver a message.",
    h1b: "Others leave a mark.",
    p1: "Hosting conferences, panels, talks, interviews and content events that bring people, ideas and impact together.",
    p2: "More than 25 years on stage and in management and media, combining business insight, a feel for people and the ability to turn content into an experience.",
    cta: "Let's talk about your next event",
    secondary: "See me on stage",
    role: "Media Personality",
  },
}

export function Hero() {
  const { lang } = useLang()
  const tx = t[lang]
  const isHe = lang === "he"

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden flex flex-col justify-center" style={{ backgroundColor: "#1B4D3E" }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/media/hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(27,77,62,0.97) 0%, rgba(27,77,62,0.85) 50%, rgba(27,77,62,0.6) 100%)" }} />
      </div>

      <div className="relative z-10 flex flex-1 flex-col lg:flex-row justify-center items-center px-5 pt-28 pb-20 md:px-16 lg:px-24 max-w-7xl mx-auto w-full gap-10 lg:gap-16">
        <div className={`flex flex-col items-center ${isHe ? 'lg:items-start lg:text-right' : 'lg:items-start lg:text-left'} lg:flex-1 text-center`}>
          <div style={{ animation: "fade-up 0.6s ease both" }} className="mb-6 md:mb-10">
            <img src="/media/logo-main.png" alt="רוני לוגסי" className="h-20 w-auto object-contain drop-shadow-2xl md:h-28 mx-auto lg:mx-0" />
          </div>

          <p className="font-heading text-lg md:text-2xl font-bold" style={{ color: "#F5F0E8", animation: "fade-up 0.7s ease 0.05s both" }}>{tx.name}</p>
          <div style={{ animation: "fade-up 0.7s ease 0.1s both" }} className="mt-2 mb-5 md:mb-8 flex items-center justify-center lg:justify-start gap-3">
            <div className="h-px w-8 md:w-12" style={{ backgroundColor: "#C2461A" }} />
            <span className="text-xs md:text-sm font-semibold tracking-[0.08em]" style={{ color: "rgba(245,240,232,0.85)" }}>
              {tx.subtitle}
            </span>
            <div className="h-px w-8 md:w-12 lg:hidden" style={{ backgroundColor: "#C2461A" }} />
          </div>

          <h1 style={{ animation: "fade-up 0.9s ease 0.15s both" }}>
            <span className="block font-heading font-bold leading-[1.1] tracking-[-0.02em] text-3xl md:text-5xl lg:text-[3.25rem]" style={{ color: "#F5F0E8" }}>{tx.h1a}</span>
            <span className="mt-1 block font-heading font-bold leading-[1.1] tracking-[-0.02em] text-3xl md:text-5xl lg:text-[3.25rem]" style={{ color: "#F59E6B" }}>{tx.h1b}</span>
          </h1>

          <p className="mt-5 md:mt-8 max-w-xl text-base md:text-lg font-medium leading-relaxed" style={{ color: "#F5F0E8", animation: "fade-up 0.9s ease 0.3s both" }}>{tx.p1}</p>
          <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.8)", animation: "fade-up 0.9s ease 0.4s both" }}>{tx.p2}</p>

          <div className="mt-6 md:mt-10 flex flex-wrap justify-center lg:justify-start gap-3" style={{ animation: "fade-up 0.9s ease 0.45s both" }}>
            <a href="#contact" onClick={openChatBot} className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105" style={{ backgroundColor: "#C2461A", color: "#FFFFFF", boxShadow: "0 8px 40px rgba(212,82,26,0.45)" }}>
              {tx.cta}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-[-4px]">{isHe ? "←" : "→"}</span>
            </a>
            <a href="#gallery" className="inline-flex items-center gap-2 rounded-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium transition-all duration-300 hover:bg-white/10" style={{ border: "1px solid rgba(245,240,232,0.35)", color: "#F5F0E8" }}>
              {tx.secondary}
            </a>
          </div>

        </div>

        {/* תמונת פרופיל בעיצוב מוקפד */}
        <div className="hidden lg:flex flex-shrink-0 items-center justify-center" style={{ animation: "fade-up 0.8s ease 0.2s both" }}>
          <div className="relative w-80 xl:w-96">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl" style={{ backgroundColor: "#C2461A", opacity: 0.15 }} />
            <div className="absolute -bottom-8 -right-8 h-full w-full rounded-3xl" style={{ border: "1px solid rgba(212,82,26,0.2)" }} />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ aspectRatio: "4/5" }}>
              <img src="/media/roni-hero.png" alt={tx.name} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: "linear-gradient(to top, rgba(27,77,62,0.6), transparent)" }} />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 rounded-2xl px-4 py-2 md:px-5 md:py-3" style={{ backgroundColor: "rgba(245,240,232,0.95)", backdropFilter: "blur(8px)" }}>
                <p className="font-heading text-xs md:text-sm font-bold" style={{ color: "#1B4D3E" }}>{tx.name}</p>
                <p className="text-[10px] md:text-xs mt-0.5" style={{ color: "#BF4417" }}>{tx.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animation: "fade-up 1s ease 0.8s both" }}>
        <div className="h-10 w-px md:h-12" style={{ background: "linear-gradient(to bottom, rgba(212,82,26,0.8), transparent)" }} />
      </div>
    </section>
  )
}