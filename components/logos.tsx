"use client"

import { useLang } from "@/lib/lang-context"

const t = {
  he: {
    title: "כשהמיקרופון פותח דלתות",
    items: [
      {
        logo: "/media/logo-ritmo.png",
        name: "ריטמו על הבוקר",
        body: "תוכנית רדיו שבועית המפגישה בין אנשים, סיפורים, רעיונות ועולמות תוכן מגוונים, ומביאה לקדמת הבמה עשייה משמעותית ומעוררת השראה.",
      },
      {
        logo: "/media/logo-twist.jpg",
        name: "טוויסט בעלילה",
        body: "פודקאסט שיחות עומק על אנשים, בחירות, נקודות מפנה והרגעים שבהם החיים מקבלים כיוון חדש.",
      },
    ],
  },
  en: {
    title: "When the microphone opens doors",
    items: [
      {
        logo: "/media/logo-ritmo.png",
        name: "Ritmo Al HaBoker",
        body: "A weekly radio show that brings together people, stories, ideas and a wide range of content, and puts inspiring work in the spotlight.",
      },
      {
        logo: "/media/logo-twist.jpg",
        name: "Twist BaAlila",
        body: "A podcast of in-depth conversations about people, choices, turning points and the moments when life takes a new direction.",
      },
    ],
  },
}

// המותגים של רוני עצמה (רדיו ופודקאסט).
// לוגואים של לקוחות וארגונים שעבדו עם רוני יקבלו שורה נפרדת כשיהיו מאושרים.
export function Logos() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section
      id="media"
      className="relative overflow-hidden py-14 md:py-20"
      style={{ borderTop: "1px solid #DDD8CE", borderBottom: "1px solid #DDD8CE", backgroundColor: "#FFFFFF" }}
    >
      <h2 className="mb-10 text-center font-heading text-2xl font-bold tracking-[-0.02em] md:text-4xl" style={{ color: "#1B4D3E" }}>
        {tx.title}
      </h2>

      <div className="mx-auto grid max-w-5xl gap-6 px-5 md:grid-cols-2 md:gap-8">
        {tx.items.map((item) => (
          <div
            key={item.name}
            className="flex items-start gap-5 rounded-2xl p-6"
            style={{ backgroundColor: "#F5F0E8", border: "1px solid #E8E2D6" }}
          >
            <div className="flex h-20 w-24 shrink-0 items-center justify-center">
              <img src={item.logo} alt="" className="max-h-full max-w-full object-contain" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold md:text-xl" style={{ color: "#1B4D3E" }}>{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed md:text-base" style={{ color: "#4A443A" }}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
