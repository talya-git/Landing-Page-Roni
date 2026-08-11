"use client"

import { Reveal } from "@/components/reveal"

const testimonials = [
  { name: "שם לקוח", role: "מנכ\"ל / תפקיד", text: "רוני יוצרת אווירה שבה כל אחד מרגיש בנוח לדבר. היא מביאה איתה מקצועיות, חום ויכולת להוציא את הטוב ביותר מכל אחד.", initials: "א" },
  { name: "שם לקוח", role: "יזם / מרואיין", text: "הריאיון עם רוני היה אחד הטובים שעשיתי. היא הגיעה מוכנה, שאלה שאלות חכמות ויצרה שיחה אמיתית.", initials: "ב" },
  { name: "שם לקוח", role: "מפיק / שותף", text: "כשרוני מנחה כנס, הקהל מרגיש את זה. יש לה נוכחות, כריזמה ויכולת לחבר בין אנשים שאין לה תחליף.", initials: "ג" },
  { name: "שם לקוח", role: "מנכ\"לית / לקוחה", text: "שיתוף הפעולה עם רוני היה חוויה מקצועית ואנושית כאחד. היא מביאה ערך אמיתי לכל פרויקט.", initials: "ד" },
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
          <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="group relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9", boxShadow: "0 4px 24px rgba(27,77,62,0.1)", border: "1px solid rgba(212,82,26,0.15)", backgroundColor: "#EDE8DF" }}>
                <video className="absolute inset-0 h-full w-full object-cover" controls poster={`/media/testimonial-${n}-poster.jpg`} playsInline>
                  <source src={`/media/testimonial-${n}.mp4`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full shadow-lg" style={{ background: "linear-gradient(135deg, #D4521A, rgba(212,82,26,0.7))", border: "2px solid rgba(255,255,255,0.3)" }}>
                    <svg className="h-5 w-5 md:h-6 md:w-6 mr-[-3px]" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
