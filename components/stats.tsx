"use client"

import { useEffect, useRef, useState } from "react"
import { Reveal } from "@/components/reveal"
import { Mic2, Radio, MessageSquare, Users, Headphones } from "lucide-react"

const stats = [
  { value: 25, suffix: "+", label: "שנות ניסיון בעמידה מול קהל ובהובלת אנשים", Icon: Mic2 },
  { value: 9, suffix: "", label: "שנים של תוכנית רדיו שבועית", Icon: Radio },
  { value: 500, suffix: "+", label: "ראיונות עם אנשי עסקים, יזמים ומובילי דעת קהל", Icon: MessageSquare },
  { value: 100, suffix: "+", label: "כנסים, פאנלים, שבתות תרבות ואירועי תוכן", Icon: Headphones },
  { value: 50000, suffix: "+", label: "מאזינים, צופים ומשתתפים לאורך השנים", Icon: Users },
]

function useCountUp(target: number, run: boolean, duration = 1800) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!run) return
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
      className="flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
      style={{
        border: "1px solid rgba(212,82,26,0.15)",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 2px 16px rgba(27,77,62,0.06)",
        animation: run ? `count-in 0.6s ease ${delay}ms both` : undefined,
        opacity: run ? undefined : 0,
      }}
    >
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{ backgroundColor: "rgba(212,82,26,0.08)", color: "#D4521A" }}
      >
        <Icon className="h-7 w-7" strokeWidth={1.5} />
      </div>
      <p className="font-heading text-4xl font-bold tracking-tight tabular-nums sm:text-5xl" style={{ color: "#D4521A" }}>
        {display}{suffix}
      </p>
      <p className="mt-3 text-sm leading-snug max-w-[12rem]" style={{ color: "#6B6355" }}>
        {label}
      </p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRun(true); observer.disconnect() } },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="numbers" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#1B4D3E" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center mb-14">
          <span className="inline-flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#D4521A" }}>
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
            רוני במספרים
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl" style={{ color: "#F5F0E8" }}>
            25 שנה של עשייה
          </h2>
        </Reveal>

        <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} Icon={s.Icon} run={run} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
