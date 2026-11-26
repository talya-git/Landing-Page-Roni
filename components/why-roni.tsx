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
      { num: "03", title: "שילוב ייחודי", body: "ניסיון ניהולי, עולם התקשורת, הבנה עסקית, רגישות אנושית וסקרנות אמיתית מאפשרים לי להוביל כל במה באופן מקצועי, טבעי ומדויק." },
    ],
  },
  en: {
    tag: "Why Roni?",
    title: "What you get when you work with me",
    sub: "Whatever the event, I bring the same level of commitment.",
    points: [
      { num: "01", title: "Moderating", body: "I give every event my full attention and energy, from the first minute to the last." },
      { num: "02", title: "Interviewing", body: "I know how to get people to open up and say things they haven't said in other interviews." },
      { num: "03", title: "Experience", body: "Years in management, media and business, plus real curiosity about people, help me run any stage with confidence." },
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
            <div className="h-px w-12" style={{ backgroundColor: "#C2461A" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "#F59E6B" }}>{d.tag}</span>
          </div>
          <h2 className="font-heading font-bold leading-[1.1] tracking-[-0.03em] text-2xl md:text-4xl lg:text-5xl max-w-2xl" style={{ color: "#F5F0E8" }}>{d.title}</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: "rgba(245,240,232,0.8)" }}>{d.sub}</p>
        </Reveal>

        <div className="mt-10 md:mt-16 grid gap-px sm:grid-cols-2 md:grid-cols-3" style={{ backgroundColor: "rgba(245,240,232,0.08)" }}>
          {d.points.map((p, i) => (
            <Reveal key={p.num} delay={i * 100}>
              <div className="group relative flex flex-col p-6 md:p-10 transition-all duration-500 hover:bg-white/5" style={{ backgroundColor: "rgba(27,77,62,0.01)" }}>
                <span aria-hidden="true" className="font-heading text-5xl md:text-6xl font-black leading-none opacity-90 transition-opacity duration-500 group-hover:opacity-100" style={{ color: "#F59E6B" }}>{p.num}</span>
                <div className="mt-4 md:mt-6 h-0.5 w-10 transition-all duration-500 group-hover:w-16" style={{ backgroundColor: "#C2461A" }} />
                <h3 className="mt-4 md:mt-5 font-heading text-xl md:text-2xl font-bold" style={{ color: "#F5F0E8" }}>{p.title}</h3>
                <p className="mt-2 md:mt-3 text-sm leading-relaxed flex-1" style={{ color: "rgba(245,240,232,0.8)" }}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
