"use client"

import { useEffect, useState } from "react"
import { Phone, Menu, X } from "lucide-react"

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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={
          scrolled || menuOpen
            ? { borderBottom: "1px solid #DDD8CE", backgroundColor: "rgba(245,240,232,0.97)", backdropFilter: "blur(16px)" }
            : { backgroundColor: "transparent" }
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
          <a href="#top" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src="/media/logo-horizontal.png"
              alt="רוני לוגסי"
              className="h-10 w-auto"
              style={{ filter: scrolled || menuOpen ? "none" : "brightness(0) invert(1)" }}
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

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 md:px-5"
              style={{
                backgroundColor: "#D4521A",
                color: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(212,82,26,0.3)",
              }}
            >
              <Phone className="h-4 w-4" />
              <span>לתיאום שיחה</span>
            </a>

            {/* Hamburger */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
              style={{ backgroundColor: menuOpen ? "rgba(212,82,26,0.1)" : "rgba(245,240,232,0.15)" }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="תפריט"
            >
              {menuOpen
                ? <X className="h-5 w-5" style={{ color: "#1B4D3E" }} />
                : <Menu className="h-5 w-5" style={{ color: scrolled ? "#1B4D3E" : "#F5F0E8" }} />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8 lg:hidden"
          style={{ backgroundColor: "rgba(245,240,232,0.98)", backdropFilter: "blur(16px)" }}
        >
          <nav className="flex flex-col gap-1 mt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-5 py-4 text-lg font-medium transition-colors hover:text-[#D4521A]"
                style={{ color: "#1B4D3E", borderBottom: "1px solid rgba(27,77,62,0.08)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 flex items-center justify-center gap-2 rounded-full py-4 text-base font-semibold"
            style={{ backgroundColor: "#D4521A", color: "#FFFFFF", boxShadow: "0 8px 32px rgba(212,82,26,0.35)" }}
          >
            <Phone className="h-5 w-5" />
            לתיאום שיחה
          </a>
        </div>
      )}
    </>
  )
}
