"use client"

import { useEffect, useRef, useState } from "react"
import { Reveal } from "@/components/reveal"
import { Mic2, Radio, MessageSquare, Headphones } from "lucide-react"
import { useLang } from "@/lib/lang-context"

const statsData = {
  he: [
    { value: 25, suffix: "+", label: "שנות ניסיון מול קהל", Icon: Mic2 },
    { value: 500, suffix: "+", label: "ראיונות", Icon: MessageSquare },
    { value: 100, suffix: "+", label: "כנסים ופאנלים", Icon: Headphones },
    { value: 7, suffix: "", label: "שנים של שידורי רדיו שבועיים", Icon: Radio },
  ],
  en: [
    { value: 25, suffix: "+", label: "Years in front of audiences", Icon: Mic2 },
    { value: 500, suffix: "+", label: "Interviews", Icon: MessageSquare },
    { value: 100, suffix: "+", label: "Conferences and panels", Icon: Headphones },
    { value: 7, suffix: "", label: "Years of weekly radio broadcasts", Icon: Radio },
  ],
}

const headings = {
  he: { tag: "רוני במספרים", title: "ניסיון שמביא ערך לבמה" },
  en: { tag: "Roni by the Numbers", title: "Experience that adds value on stage" },
}

function useCountUp(target: number, run: boolean, duration = 1800) {
  // Start at the real number so the static HTML (Google, Facebook previews) shows it, not 0.
  // The count-up runs only in the browser, while the card is still hidden.
  const [value, setValue] = useState(target)
  useEffect(() => {
    if (!run) return
    setValue(0)
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, duration])
  return value
}

function StatCard({ value, suffix, label, Icon, run, delay }: { value: number; suffix: string; label: string; Icon: React.ElementType; run: boolean; delay: number }) {
  const count = useCountUp(value, run)
  const display = value >= 1000 ? count.toLocaleString("he-IL") : count

  return (
    <div
      className="flex flex-col items-center rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1"
      style={{
        animation: run ? `count-in 0.6s ease ${delay}ms both` : undefined,
        opacity: run ? undefined : 0,
      }}
    >
      <div className="mb-4 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl" style={{ backgroundColor: "rgba(212,82,26,0.15)", color: "#F59E6B" }}>
        <Icon className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
      </div>
      <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight tabular-nums" style={{ color: "#F59E6B" }}>
        {display}{suffix}
      </p>
      <p className="mt-2 text-xs md:text-sm leading-snug max-w-[12rem]" style={{ color: "rgba(245,240,232,0.75)" }}>{label}</p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)
  const { lang } = useLang()
  const stats = statsData[lang]
  const h = headings[lang]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRun(true); observer.disconnect() } },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="numbers" className="relative py-14 md:py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#1B4D3E" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center justify-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#F59E6B" }}>
            <span className="h-px w-6" style={{ backgroundColor: "#C2461A" }} />
            {h.tag}
            <span className="h-px w-6" style={{ backgroundColor: "#C2461A" }} />
          </span>
          <h2 className="mt-3 font-heading text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.03em]" style={{ color: "#F5F0E8" }}>
            {h.title}
          </h2>
        </Reveal>

        <div ref={ref} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} Icon={s.Icon} run={run} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
