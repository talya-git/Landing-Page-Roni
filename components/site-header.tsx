"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"

const links = [
  { href: "#about", label: "קצת עליי" },
  { href: "#numbers", label: "במספרים" },
  { href: "#why", label: "למה רוני?" },
  { href: "#services", label: "תחומי פעילות" },
  { href: "#gallery", label: "גלריה" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#contact", label: "צרו קשר" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? { borderBottom: "1px solid #DDD8CE", backgroundColor: "rgba(245,240,232,0.92)", backdropFilter: "blur(16px)" }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <a href="#top" className="flex items-center">
          <img
            src="/media/logo-horizontal.png"
            alt="רוני לוגסי"
            className="h-10 w-auto"
            style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm transition-colors hover:text-[#D4521A]"
              style={{ color: scrolled ? "#6B6355" : "rgba(245,240,232,0.8)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 md:px-5"
          style={{
            backgroundColor: "#D4521A",
            color: "#FFFFFF",
            boxShadow: "0 4px 16px rgba(212,82,26,0.3)",
          }}
        >
          <Phone className="h-4 w-4" />
          <span>לתיאום שיחה</span>
        </a>
      </div>
    </header>
  )
}
