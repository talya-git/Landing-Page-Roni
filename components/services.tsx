"use client"

import { Reveal } from "@/components/reveal"
import { Mic2, Headphones, Radio, Users, Film, Handshake } from "lucide-react"

const services = [
  { icon: Mic2, title: "הנחיית כנסים ואירועים", body: "הנחיית כנסים עסקיים, אירועי חברות, אירועי נשים, השקות, טקסים ואירועי תוכן תוך יצירת חיבור אמיתי בין הקהל, התוכן והבמה." },
  { icon: Headphones, title: "פודקאסטים וראיונות עומק", body: "ראיונות אישיים, סדרות תוכן ופודקאסטים המאפשרים לאנשים ולארגונים לספר את הסיפור שלהם בצורה אותנטית ומשמעותית." },
  { icon: Radio, title: "תוכנית הרדיו", body: "אירוח אנשי עסקים, יזמים, אנשי ציבור, יוצרים ואנשים עם עשייה מעוררת השראה בתוכנית הרדיו." },
  { icon: Users, title: "הנחיית פאנלים ושבתות תרבות", body: "ניהול שיח איכותי, דינמי ומעמיק המותאם לאופי הקהל, המשתתפים והאירוע." },
  { icon: Film, title: "הפקות תוכן", body: "פיתוח והובלת פורמטים של תוכן, ראיונות, סדרות ופלטפורמות תוכן עבור חברות, ארגונים ומותגים." },
  { icon: Handshake, title: "שיתופי פעולה", body: "יצירת שיתופי פעולה עם גופים, חברות וארגונים המעוניינים לייצר תוכן איכותי ובעל השפעה." },
]

export function Services() {
  return (
    <section id="services" className="relative py-14 md:py-24 lg:py-36 overflow-hidden" style={{ backgroundColor: "#1B4D3E" }}>
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />
      <div className="mx-auto max-w-7xl px-5 md:px-16">

        <Reveal className="text-center mb-10 md:mb-16">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#D4521A" }} />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em]" style={{ color: "#D4521A" }}>תחומי הפעילות</span>
            <div className="h-px w-12" style={{ backgroundColor: "#D4521A" }} />
          </div>
          <h2 className="font-heading font-bold leading-[1.1] tracking-[-0.03em] text-3xl md:text-5xl lg:text-6xl" style={{ color: "#F5F0E8" }}>
            מה אני עושה
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
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
                <div className="pointer-events-none absolute top-3 right-3 h-5 w-5 opacity-20" style={{ borderTop: "1.5px solid #D4521A", borderRight: "1.5px solid #D4521A" }} />
                <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 opacity-20" style={{ borderBottom: "1.5px solid #D4521A", borderLeft: "1.5px solid #D4521A" }} />

                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl transition-transform duration-400 group-hover:scale-110" style={{ backgroundColor: "rgba(212,82,26,0.15)", color: "#D4521A" }}>
                  <s.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
                </div>

                <h3 className="mt-4 md:mt-6 font-heading text-lg md:text-2xl font-bold" style={{ color: "#F5F0E8" }}>{s.title}</h3>
                <p className="mt-2 md:mt-3 flex-1 text-sm md:text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
