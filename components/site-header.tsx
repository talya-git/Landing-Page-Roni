"use client"

import { useEffect, useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { useLang } from "@/lib/lang-context"

const links = {
  he: [
    { href: "#about", label: "קצת עליי" },
    { href: "#numbers", label: "במספרים" },
    { href: "#why", label: "למה רוני?" },
    { href: "#services", label: "תחומי פעילות" },
    { href: "#gallery", label: "גלריה" },
    { href: "#testimonials", label: "המלצות" },
    { href: "#contact", label: "צרו קשר" },
  ],
  en: [
    { href: "#about", label: "About" },
    { href: "#numbers", label: "By the Numbers" },
    { href: "#why", label: "Why Roni?" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ],
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle } = useLang()
  const navLinks = links[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-3.5">
          {/* Logo */}
          <a href="#top" className="flex items-center shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src="/media/logo-main.png"
              alt="רוני לוגסי"
              className="h-9 w-auto lg:hidden"
              style={{ filter: scrolled || menuOpen ? "none" : "brightness(0) invert(1)" }}
            />
            <img
              src="/media/logo-icon-only.png"
              alt="רוני לוגסי"
              className="hidden h-10 w-auto lg:block"
              style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-sm transition-colors hover:text-[#D4521A]" style={{ color: scrolled ? "#6B6355" : "rgba(245,240,232,0.8)" }}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Language toggle — visible always */}
            <button
              onClick={toggle}
              className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-all hover:scale-105"
              style={{
                border: "1px solid rgba(212,82,26,0.4)",
                color: scrolled || menuOpen ? "#D4521A" : "rgba(245,240,232,0.9)",
                backgroundColor: scrolled || menuOpen ? "rgba(212,82,26,0.08)" : "rgba(245,240,232,0.1)",
              }}
              aria-label="Switch language"
            >
              <span className="text-sm leading-none">{lang === "he" ? "🇺🇸" : "🇮🇱"}</span>
              <span className="hidden sm:inline">{lang === "he" ? "EN" : "עב"}</span>
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 md:px-5"
              style={{ backgroundColor: "#D4521A", color: "#FFFFFF", boxShadow: "0 4px 16px rgba(212,82,26,0.3)" }}
            >
              <Phone className="h-4 w-4" />
              <span>{lang === "he" ? "לתיאום שיחה" : "Book a Call"}</span>
            </a>

            {/* Hamburger */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full lg:hidden"
              style={{ backgroundColor: scrolled || menuOpen ? "rgba(27,77,62,0.08)" : "rgba(245,240,232,0.12)" }}
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
          className="fixed inset-0 z-40 flex flex-col lg:hidden"
          style={{ backgroundColor: "rgba(245,240,232,0.98)", backdropFilter: "blur(16px)" }}
        >
          {/* Spacer for header height */}
          <div className="h-[56px] shrink-0" />

          <div className="flex flex-1 flex-col overflow-y-auto px-5 pb-8 pt-4">
            <nav className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center rounded-xl px-4 py-4 text-lg font-medium transition-colors hover:text-[#D4521A]"
                  style={{ color: "#1B4D3E", borderBottom: "1px solid rgba(27,77,62,0.07)" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Bottom actions */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full py-4 text-base font-semibold"
                style={{ backgroundColor: "#D4521A", color: "#FFFFFF", boxShadow: "0 4px 16px rgba(212,82,26,0.35)" }}
              >
                <Phone className="h-4 w-4" />
                {lang === "he" ? "לתיאום שיחה" : "Book a Call"}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
