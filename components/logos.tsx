"use client"

import { useLang } from "@/lib/lang-context"

const t = {
  he: {
    title: "העשייה שלי בתקשורת",
  },
  en: {
    title: "My media work",
  },
}

// המותגים של רוני עצמה (רדיו ופודקאסט).
// לוגואים של לקוחות וארגונים שעבדו עם רוני יקבלו שורה נפרדת כשיהיו מאושרים.
const logos = [
  { src: "/media/logo-ritmo.png", alt: "ריטמו על הבוקר" },
  { src: "/media/logo-twist.jpg", alt: "טוויסט בעלילה" },
]

export function Logos() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section
      className="relative overflow-hidden py-12 md:py-14"
      style={{ borderTop: "1px solid #DDD8CE", borderBottom: "1px solid #DDD8CE", backgroundColor: "#FFFFFF" }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to left, transparent, rgba(212,82,26,0.4), transparent)" }}
      />
      <p className="mb-8 text-center text-base font-semibold tracking-[0.2em]" style={{ color: "#6B6355" }}>
        {tx.title}
      </p>

      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-10 px-5 md:gap-16">
        {logos.map((logo) => (
          <div key={logo.src} className="flex h-20 w-40 items-center justify-center">
            <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}
