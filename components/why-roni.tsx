"use client"

import { Reveal } from "@/components/reveal"
import { useLang } from "@/lib/lang-context"

const data = {
  he: {
    tag: "למה דווקא רוני?",
    title: "מה הופך את הבמה שלי לאחרת?",
    sub: "",
    points: [
      { num: "01", title: "אני מבינה את מה שקורה גם מאחורי הקלעים", body: "כמנכ״לית וכאשת עסקים, אני מבינה את מטרות הארגון, את האתגרים שלו ואת המסרים שהוא מבקש להעביר. ההנחיה שלי מתחילה הרבה לפני העלייה לבמה." },
      { num: "02", title: "אני יודעת לשאול את השאלה הנכונה", body: "להקשיב באמת, לזהות את הרגע המדויק, להעמיק את השיחה וליצור מרחב המאפשר לאנשים להביא את עצמם במלואם." },
      { num: "03", title: "אני מחברת בין תוכן, אנשים ורגש", body: "השילוב בין ניסיון בימתי, חשיבה עסקית ועולם התקשורת מאפשר לי להוביל אירועים מקצועיים, אינטליגנטיים, דינמיים ואנושיים." },
      { num: "04", title: "כל במה מקבלת תשומת לב אישית", body: "מתחקיר מקדים והיכרות עם המשתתפים ועד להתאמת השפה, הקצב והמסרים לקהל ולמטרות האירוע." },
    ],
  },
  en: {
    tag: "Why Roni?",
    title: "What makes my stage different?",
    sub: "",
    points: [
      { num: "01", title: "I understand what happens behind the scenes", body: "As a CEO and businesswoman, I understand an organization's goals, its challenges and the messages it wants to deliver. My moderating starts long before I step on stage." },
      { num: "02", title: "I know how to ask the right question", body: "Really listening, catching the right moment, taking the conversation deeper and making room for people to bring their whole selves." },
      { num: "03", title: "I connect content, people and emotion", body: "Stage experience, business thinking and a media background let me run events that are professional, smart, lively and human." },
      { num: "04", title: "Every stage gets personal attention", body: "From research and getting to know the participants in advance, to adapting the language, pace and messages to the audience and the event's goals." },
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
          {d.sub && <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: "rgba(245,240,232,0.8)" }}>{d.sub}</p>}
        </Reveal>

        <div className="mt-10 md:mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "rgba(245,240,232,0.08)" }}>
          {d.points.map((p, i) => (
            <Reveal key={p.num} delay={i * 100}>
              <div className="group relative flex flex-col p-6 md:p-10 transition-all duration-500 hover:bg-white/5" style={{ backgroundColor: "rgba(27,77,62,0.01)" }}>
                <span aria-hidden="true" className="font-heading text-5xl md:text-6xl font-black leading-none opacity-90 transition-opacity duration-500 group-hover:opacity-100" style={{ color: "#F59E6B" }}>{p.num}</span>
                <div className="mt-4 md:mt-6 h-0.5 w-10 transition-all duration-500 group-hover:w-16" style={{ backgroundColor: "#C2461A" }} />
                <h3 className="mt-4 md:mt-5 font-heading text-lg md:text-xl font-bold leading-snug" style={{ color: "#F5F0E8" }}>{p.title}</h3>
                <p className="mt-2 md:mt-3 text-sm leading-relaxed flex-1" style={{ color: "rgba(245,240,232,0.8)" }}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
