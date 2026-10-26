"use client"

import { useLang } from "@/lib/lang-context"

const t = {
  he: {
    title: "בין הבמות והארגונים שכבר נתנו בי אמון",
  },
  en: {
    title: "Trusted by stages and organizations",
  },
}

export function Logos() {
  const { lang } = useLang()
  const tx = t[lang]

  const logos = [
    { src: "/media/logo-twist.jpg", alt: "טוויסט בעלילה" },
    { src: "/media/logo-ritmo.png", alt: "ריטמו על הבוקר" },
    { src: "/media/logo-main.png", alt: "ראשי" },
    { src: "/media/logo-horizontal.png", alt: "אופקי" },
    { src: "/media/logo-icon-only.png", alt: "סמל" },
  ]

  return (
    <section
      className="relative overflow-hidden py-14"
      style={{ borderTop: "1px solid #DDD8CE", borderBottom: "1px solid #DDD8CE", backgroundColor: "#FFFFFF" }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to left, transparent, rgba(212,82,26,0.4), transparent)" }}
      />
      <p className="mb-10 text-center text-base font-semibold tracking-[0.2em]" style={{ color: "#6B6355" }}>
        {tx.title}
      </p>

      <div className="relative flex overflow-hidden">
        <div
          className="flex shrink-0 items-center gap-16 px-8"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex h-16 w-36 shrink-0 items-center justify-center opacity-60 transition-all duration-300 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}