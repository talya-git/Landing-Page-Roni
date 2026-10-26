"use client"

import { Reveal } from "@/components/reveal"

const testimonials = [
  { name: "מאיה משה", role: "אורחת בריטמו", text: "תודה רבה לפאנל הנשים ולחיבורים המרגשים הרגשתי שהגעתי למרחב חם ומחבק ❤️ תודה רבה לרוני המקסימה על ההנחיה המקצועית על החיבוק על הבמה לדבר ולהביא את המסרים והשיטה של לפרונט. תודה רבה לרונה על הקבלת פנים והצילומים ותודה לחברות המדהימות שהכרתי היום. יום מקסים ושנמשיך לעשות הרבה דברים טובים בריטמו שלנו", initials: "מ" },
  { name: "ורד כהן ברזילי", role: "אורחת בריטמו", text: "תודה על אירוח, היה לי בוקר בהחלט מיוחד ונעים. תודה לרוני המצוינת ששאלה את השאלות הכי מדויקות", initials: "ו" },
  { name: "יניב", role: "אורח בריטמו", text: "למרות שאני בדרכ נמנע מראיונות ומשעות בוקר מוקדמות, הבוקר הזה באולפן היה קסום במיוחד. האולפן הקטן התמלא בעוצמות של השראה ושליחות שגרמו לי להודות על שלא הצלחתי להתחמק מהמפגש.. שכן מדובר בהזדמנות נדירה. תודה ענקית לרוני על ההזמנה.", initials: "י" },
  { name: "איריס גרנות", role: "אורחת בריטמו", text: "תודה רבה רוני מקסימה ואהובה, על תוכנית שהועברה ברגישות ובהקשבה לכולם.", initials: "א" },
  { name: "מיטל אזרי", role: "אורחת בריטמו", text: "תודה על האירוח החם המרחיב והפותח אפשרויות חדשות. רוני את אור וחוכמה גבוהה, יצירתית בצורה פנומנלית! תמשיכי להיות בנוכחות הקוסמית שלך ושתבורכי חזרה בשפע ואושר גדול.", initials: "מ" },
  { name: "תפארת קורנפלד", role: "אורחת בריטמו", text: "הייתה חוויה שהותירה אותי עם חיוך ענק שעדיין מרוח על הפנים. רוני מהממת - את אור, לב, השראה ותודה על הזכות לבלות את הבוקר במחיצתך.", initials: "ת" },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-14 md:py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1B4D3E, transparent)" }} />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center justify-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#D4521A" }}>
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
            המלצות
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
          </span>
          <h2 className="mt-3 font-heading text-2xl md:text-4xl font-bold leading-tight tracking-[-0.03em]" style={{ color: "#1B4D3E" }}>
            מה אומרים עליי
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <blockquote
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #FDF9F5 100%)",
                  boxShadow: "0 4px 24px rgba(27,77,62,0.08)",
                  border: "1px solid rgba(212,82,26,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(212,82,26,0.15)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212,82,26,0.3)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(27,77,62,0.08)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212,82,26,0.1)"
                }}
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl md:rounded-t-3xl" style={{ background: "linear-gradient(to left, #1B4D3E, #D4521A)" }} />
                <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 opacity-20" style={{ borderBottom: "2px solid #D4521A", borderLeft: "2px solid #D4521A" }} />

                <div className="font-heading text-[3rem] md:text-[4rem] font-black select-none opacity-25 leading-none mb-2" style={{ color: "#D4521A" }}>&ldquo;</div>

                <p className="flex-1 text-sm md:text-base leading-relaxed" style={{ color: "#4A4035" }}>{t.text}</p>

                <footer className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full text-sm md:text-base font-bold shadow-md" style={{ background: "linear-gradient(135deg, #D4521A, #1B4D3E)", color: "#FFFFFF" }}>
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-sm font-bold" style={{ color: "#1B4D3E" }}>{t.name}</span>
                    <span className="text-xs mt-0.5" style={{ color: "#8B7355" }}>{t.role}</span>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-6 flex justify-center">
            <div className="overflow-hidden rounded-2xl w-full md:w-1/2" style={{ boxShadow: "0 4px 24px rgba(27,77,62,0.1)", border: "1px solid rgba(212,82,26,0.15)" }}>
              <iframe
                src="https://www.youtube.com/embed/979I99GGg0Q"
                className="w-full"
                style={{ aspectRatio: "9/16", display: "block" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="overflow-hidden rounded-2xl w-full md:w-1/2" style={{ boxShadow: "0 4px 24px rgba(27,77,62,0.1)", border: "1px solid rgba(212,82,26,0.15)", backgroundColor: "#EDE8DF" }}>
              <video className="w-full" controls playsInline style={{ display: "block" }}>
                <source src="/media/testimonial-2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
