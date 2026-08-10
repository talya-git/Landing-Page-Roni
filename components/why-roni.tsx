"use client"

import { Reveal } from "@/components/reveal"

const points = [
  {
    num: "01",
    title: "לא רק מנחה",
    body: "אני יוצרת חוויה. כל אירוע מקבל ממני נוכחות, אנרגיה ותשומת לב מלאה.",
  },
  {
    num: "02",
    title: "לא רק מראיינת",
    body: "אני יודעת לייצר שיחה שמוציאה מהאדם שמולי את מה שאף אחד אחר לא הצליח להוציא.",
  },
  {
    num: "03",
    title: "שילוב ייחודי",
    body: "ניסיון ניהולי, עולם התקשורת, הבנה עסקית, רגישות אנושית וסקרנות אמיתית — מאפשרים לי להוביל כל במה בצורה מקצועית, טבעית ומדויקת.",
  },
]

export function WhyRoni() {
  return (
    <section id="why" className="relative overflow-hidden py-24 md:py-36" style={{ backgroundColor: "#1B4D3E" }}>

      <div className="relative mx-auto max-w-7xl px-6 md:px-16">

        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#D4521A" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "#D4521A" }}>
              למה דווקא רוני?
            </span>
          </div>
          <h2
            className="font-heading font-bold leading-[1.1] tracking-[-0.03em] max-w-2xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F0E8" }}
          >
            כל אירוע. כל פאנל.{" "}
            <span style={{ color: "#D4521A" }}>כל ריאיון.</span>
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: "rgba(245,240,232,0.55)" }}>
            מקבלים ממני את אותה מחויבות: לייצר ערך ולהשאיר חותם.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px sm:grid-cols-2 md:grid-cols-3" style={{ backgroundColor: "rgba(245,240,232,0.08)" }}>
          {points.map((p, i) => (
            <Reveal key={p.num} delay={i * 100}>
              <div
                className="group relative flex flex-col p-7 md:p-10 transition-all duration-500 hover:bg-white/5"
                style={{ backgroundColor: "rgba(27,77,62,0.01)" }}
              >
                {/* Number */}
                <span
                  className="font-heading text-6xl font-black leading-none opacity-15 transition-opacity duration-500 group-hover:opacity-30"
                  style={{ color: "#D4521A" }}
                >
                  {p.num}
                </span>

                {/* Orange line */}
                <div
                  className="mt-6 h-0.5 w-10 transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: "#D4521A" }}
                />

                <h3
                  className="mt-5 font-heading text-2xl font-bold"
                  style={{ color: "#F5F0E8" }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed flex-1"
                  style={{ color: "rgba(245,240,232,0.6)" }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
