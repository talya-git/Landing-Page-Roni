"use client"

import { Reveal } from "@/components/reveal"
import { useLang } from "@/lib/lang-context"

const t = {
  he: {
    tag: "המלצות",
    title: "מה אומרים עליי",
    testimonials: [
      { name: "מאיה משה", role: "אורחת בריטמו", text: "תודה רבה לפאנל הנשים ולחיבורים המרגשים הרגשתי שהגעתי למרחב חם ומחבק ❤️ תודה רבה לרוני המקסימה על ההנחיה המקצועית על החיבוק על הבמה לדבר ולהביא את המסרים והשיטה של לפרונט. תודה רבה לרונה על הקבלת פנים והצילומים ותודה לחברות המדהימות שהכרתי היום. יום מקסים ושנמשיך לעשות הרבה דברים טובים בריטמו שלנו", initials: "מ" },
      { name: "ורד כהן ברזילי", role: "אורחת בריטמו", text: "תודה על אירוח, היה לי בוקר בהחלט מיוחד ונעים. תודה לרוני המצוינת ששאלה את השאלות הכי מדויקות", initials: "ו" },
      { name: "יניב", role: "אורח בריטמו", text: "למרות שאני בדרכ נמנע מראיונות ומשעות בוקר מוקדמות, הבוקר הזה באולפן היה קסום במיוחד. האולפן הקטן התמלא בעוצמות של השראה ושליחות שגרמו לי להודות על שלא הצלחתי להתחמק מהמפגש.. שכן מדובר בהזדמנות נדירה. תודה ענקית לרוני על ההזמנה.", initials: "י" },
      { name: "איריס גרנות", role: "אורחת בריטמו", text: "תודה רבה רוני מקסימה ואהובה, על תוכנית שהועברה ברגישות ובהקשבה לכולם.", initials: "א" },
      { name: "מיטל אזרי", role: "אורחת בריטמו", text: "תודה על האירוח החם המרחיב והפותח אפשרויות חדשות. רוני את אור וחוכמה גבוהה, יצירתית בצורה פנומנלית! תמשיכי להיות בנוכחות הקוסמית שלך ושתבורכי חזרה בשפע ואושר גדול.", initials: "מ" },
      { name: "תפארת קורנפלד", role: "אורחת בריטמו", text: "הייתה חוויה שהותירה אותי עם חיוך ענק שעדיין מרוח על הפנים. רוני מהממת - את אור, לב, השראה ותודה על הזכות לבלות את הבוקר במחיצתך.", initials: "ת" },
    ],
  },
  en: {
    tag: "Testimonials",
    title: "What People Say About Me",
    testimonials: [
      { name: "Maya Moshe", role: "Ritmo Guest", text: "Thank you so much to the women's panel and the touching connections. I felt like I arrived in a warm and embracing space ❤️ Thank you so much to the lovely Roni for the professional guidance, the embrace on stage, and bringing the 'LeFront' method forward. Thank you Rona for the warm welcome and photography, and to the amazing friends I met today. Have a wonderful day, and may we continue doing great things in our Ritmo!", initials: "M" },
      { name: "Vered Cohen Barzilai", role: "Ritmo Guest", text: "Thank you for the hospitality, it was a truly special and pleasant morning. Thank you to the excellent Roni who asked the most precise questions.", initials: "V" },
      { name: "Yaniv", role: "Ritmo Guest", text: "Although I usually avoid interviews and early morning hours, this morning in the studio was particularly magical. The small studio filled with powers of inspiration and mission that made me grateful I couldn't escape this meeting... as it is a rare opportunity. Huge thanks to Roni for the invitation.", initials: "Y" },
      { name: "Iris Granot", role: "Ritmo Guest", text: "Thank you very much lovely and beloved Roni, for a program delivered with sensitivity and attentiveness to everyone.", initials: "I" },
      { name: "Meital Azari", role: "Ritmo Guest", text: "Thank you for the warm, expanding hospitality that opens new possibilities. Roni, you are light and high wisdom, phenomenally creative! Continue to be in your cosmic presence and may you be blessed back with abundance and great happiness.", initials: "M" },
      { name: "Tiferet Kornfeld", role: "Ritmo Guest", text: "It was an experience that left me with a huge smile still smeared across my face. Stunning Roni - you are light, heart, inspiration, and thank you for the privilege of spending the morning in your presence.", initials: "T" },
    ],
  },
}

export function Testimonials() {
  const { lang } = useLang()
  const d = t[lang]
  const isHe = lang === "he"

  return (
    <section id="testimonials" className="relative py-14 md:py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1B4D3E, transparent)" }} />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center justify-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#D4521A" }}>
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
            {d.tag}
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
          </span>
          <h2 className="mt-3 font-heading text-2xl md:text-4xl font-bold leading-tight tracking-[-0.03em]" style={{ color: "#1B4D3E" }}>
            {d.title}
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {d.testimonials.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <blockquote
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 ${isHe ? 'text-right' : 'text-left'}`}
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #FDF9F5 100%)",
                  boxShadow: "0 4px 24px rgba(27,77,62,0.08)",
                  border: "1px solid rgba(212,82,26,0.1)",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(212,82,26,0.15)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212,82,26,0.3)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(27,77,62,0.08)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212,82,26,0.1)"
                }}
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl md:rounded-t-3xl" style={{ background: "linear-gradient(to left, #1B4D3E, #D4521A)" }} />
                <div className={`pointer-events-none absolute bottom-4 ${isHe ? 'left-4' : 'right-4'} h-6 w-6 opacity-20`} style={{ borderBottom: "2px solid #D4521A", [isHe ? 'borderLeft' : 'borderRight']: "2px solid #D4521A" }} />

                <div className="font-heading text-[3rem] md:text-[4rem] font-black select-none opacity-25 leading-none mb-2" style={{ color: "#D4521A" }}>&ldquo;</div>

                <p className="flex-1 text-sm md:text-base leading-relaxed" style={{ color: "#4A4035" }}>{item.text}</p>

                <footer className={`mt-6 flex items-center gap-3 ${isHe ? 'flex-row' : 'flex-row'}`}>
                  <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full text-sm md:text-base font-bold shadow-md" style={{ background: "linear-gradient(135deg, #D4521A, #1B4D3E)", color: "#FFFFFF" }}>
                    {item.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-sm font-bold" style={{ color: "#1B4D3E" }}>{item.name}</span>
                    <span className="text-xs mt-0.5" style={{ color: "#8B7355" }}>{item.role}</span>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
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