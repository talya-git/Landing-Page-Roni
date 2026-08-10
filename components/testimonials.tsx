"use client"

import { Reveal } from "@/components/reveal"

const testimonials = [
  {
    name: "שם לקוח",
    role: "מנכ\"ל / תפקיד",
    text: "רוני יוצרת אווירה שבה כל אחד מרגיש בנוח לדבר. היא מביאה איתה מקצועיות, חום ויכולת להוציא את הטוב ביותר מכל אחד.",
    initials: "א",
  },
  {
    name: "שם לקוח",
    role: "יזם / מרואיין",
    text: "הריאיון עם רוני היה אחד הטובים שעשיתי. היא הגיעה מוכנה, שאלה שאלות חכמות ויצרה שיחה אמיתית.",
    initials: "ב",
  },
  {
    name: "שם לקוח",
    role: "מפיק / שותף",
    text: "כשרוני מנחה כנס, הקהל מרגיש את זה. יש לה נוכחות, כריזמה ויכולת לחבר בין אנשים שאין לה תחליף.",
    initials: "ג",
  },
  {
    name: "שם לקוח",
    role: "מנכ\"לית / לקוחה",
    text: "שיתוף הפעולה עם רוני היה חוויה מקצועית ואנושית כאחד. היא מביאה ערך אמיתי לכל פרויקט.",
    initials: "ד",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#F5F0E8" }}>
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1B4D3E, transparent)" }} />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center mb-14">
          <span className="inline-flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#D4521A" }}>
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
            המלצות
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl" style={{ color: "#1B4D3E" }}>
            מה אומרים עליי
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <blockquote
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #FDF9F5 100%)",
                  boxShadow: "0 4px 24px rgba(27,77,62,0.08), 0 1px 4px rgba(27,77,62,0.04)",
                  border: "1px solid rgba(212,82,26,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(212,82,26,0.15), 0 4px 16px rgba(27,77,62,0.08)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212,82,26,0.3)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(27,77,62,0.08), 0 1px 4px rgba(27,77,62,0.04)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212,82,26,0.1)"
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-1 rounded-t-3xl transition-all duration-500"
                  style={{ background: "linear-gradient(to left, #1B4D3E, #D4521A)" }}
                />

                {/* Giant background quote */}
                <div
                  className="pointer-events-none absolute bottom-6 right-4 font-heading text-[10rem] font-black leading-none select-none opacity-[0.06]"
                  style={{ color: "#D4521A" }}
                >
                  &#8220;
                </div>

                {/* Corner bracket — bottom left */}
                <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 opacity-20" style={{ borderBottom: "2px solid #D4521A", borderLeft: "2px solid #D4521A" }} />

                {/* Text */}
                <p className="flex-1 text-pretty text-base leading-relaxed" style={{ color: "#4A4035" }}>
                  {t.text}
                </p>

                {/* Footer */}
                <footer className="mt-8 flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #D4521A, #1B4D3E)",
                      color: "#FFFFFF",
                    }}
                  >
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

        {/* Video testimonials */}
        <Reveal delay={200}>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  aspectRatio: "16/9",
                  boxShadow: "0 4px 24px rgba(27,77,62,0.1)",
                  border: "1px solid rgba(212,82,26,0.15)",
                  backgroundColor: "#EDE8DF",
                }}
              >
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  controls
                  poster={`/media/testimonial-${n}-poster.jpg`}
                  playsInline
                >
                  <source src={`/media/testimonial-${n}.mp4`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #D4521A, rgba(212,82,26,0.7))",
                      border: "2px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <svg className="h-6 w-6 mr-[-3px]" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
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
