"use client"

import { Reveal } from "@/components/reveal"
import { useLang } from "@/lib/lang-context"

const data = {
  he: {
    tag: "למה דווקא רוני?",
    title: "כל אירוע. כל פאנל. כל ריאיון. כל שיתוף פעולה.",
    sub: "מקבלים ממני את אותה מחויבות: לייצר ערך ולהשאיר חותם.",
    points: [
      { num: "01", title: "לא רק מנחה", body: "אני יוצרת חוויה. כל אירוע מקבל ממני נוכחות, אנרגיה ותשומת לב מלאה." },
      { num: "02", title: "לא רק מראיינת", body: "אני יודעת לייצר שיחה שמוציאה מהאדם שמולי את מה שאף אחד אחר לא הצליח להוציא." },
      { num: "03", title: "שילוב ייחודי", body: "ניסיון ניהולי, עולם התקשורת, הבנה עסקית, רגישות אנושית וסקרנות אמיתית — מאפשרים לי להוביל כל במה בצורה מקצועית, טבעית ומדויקת." },
    ],
  },
  en: {
    tag: "Why Roni?",
    title: "Every event. Every panel. Every interview. Every collaboration.",
    sub: "You get the same commitment from me: to create value and leave a mark.",
    points: [
      { num: "01", title: "Not just a moderator", body: "I create an experience. Every event gets my full presence, energy and attention." },
      { num: "02", title: "Not just an interviewer", body: "I know how to create a conversation that draws out what no one else has managed to." },
      { num: "03", title: "A unique combination", body: "Management experience, media world, business understanding, human sensitivity and genuine curiosity — allow me to lead any stage professionally, naturally and precisely." },
    ],
  },
}

export function WhyRoni() {
  const { lang } = useLang()
  const d = data[lang]

  return (
    <section id="why" className="relative overflow-hidden py-14 md:py-24 lg:py-36" style={{ backgroundColor: "#1B4D3E" }}>
      <div className="pointer-events-none absolute -right-48 top-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full opacity-[0.05]" style={{ border: "1px solid #F5F0E8" }} />

      <div className="relative mx-auto max-w-7xl px-5 md:px-16">
        <Reveal>
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#D4521A" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "#D4521A" }}>{d.tag}</span>
          </div>
          <h2 className="font-heading font-bold leading-[1.1] tracking-[-0.03em] text-2xl md:text-4xl lg:text-5xl max-w-2xl" style={{ color: "#F5F0E8" }}>{d.title}</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: "rgba(245,240,232,0.55)" }}>{d.sub}</p>
        </Reveal>

        <div className="mt-10 md:mt-16 grid gap-px sm:grid-cols-2 md:grid-cols-3" style={{ backgroundColor: "rgba(245,240,232,0.08)" }}>
          {d.points.map((p, i) => (
            <Reveal key={p.num} delay={i * 100}>
              <div className="group relative flex flex-col p-6 md:p-10 transition-all duration-500 hover:bg-white/5" style={{ backgroundColor: "rgba(27,77,62,0.01)" }}>
                <span className="font-heading text-5xl md:text-6xl font-black leading-none opacity-40 transition-opacity duration-500 group-hover:opacity-60" style={{ color: "#D4521A" }}>{p.num}</span>
                <div className="mt-4 md:mt-6 h-0.5 w-10 transition-all duration-500 group-hover:w-16" style={{ backgroundColor: "#D4521A" }} />
                <h3 className="mt-4 md:mt-5 font-heading text-xl md:text-2xl font-bold" style={{ color: "#F5F0E8" }}>{p.title}</h3>
                <p className="mt-2 md:mt-3 text-sm leading-relaxed flex-1" style={{ color: "rgba(245,240,232,0.6)" }}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
