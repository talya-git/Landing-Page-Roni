"use client"

import { useLang } from "@/lib/lang-context"

export function SiteFooter() {
  const { lang } = useLang()
  return (
    <footer className="py-12" style={{ borderTop: "1px solid rgba(245,240,232,0.12)", backgroundColor: "#132E25" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center md:px-8">
        <img src="/media/logo-main.png" alt="רוני לוגסי" className="h-20 w-auto object-contain" />
        <p className="text-sm" style={{ color: "rgba(245,240,232,0.6)" }}>
          {lang === "he"
            ? "אשת תקשורת | מנחת כנסים ופאנלים | מראיינת | יוצרת תוכן"
            : "Media Personality | Conference & Panel Moderator | Interviewer | Content Creator"}
        </p>
        <p className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
          © {new Date().getFullYear()} {lang === "he" ? "רוני לוגסי כהן. כל הזכויות שמורות." : "Roni Lugasi Cohen. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
