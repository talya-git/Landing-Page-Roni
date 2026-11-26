"use client"

import { useLang } from "@/lib/lang-context"

export function SiteFooter() {
  const { lang } = useLang()
  return (
    <footer className="py-12" style={{ borderTop: "1px solid rgba(245,240,232,0.12)", backgroundColor: "#132E25" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center md:px-8">
        <img src="/media/logo-main.png" alt="רוני לוגסי" className="h-20 w-auto object-contain" />
        <p className="text-sm" style={{ color: "rgba(245,240,232,0.8)" }}>
          {lang === "he"
            ? "אשת תקשורת | מנחת כנסים ופאנלים | מראיינת | יוצרת תוכן"
            : "Media Personality | Conference & Panel Moderator | Interviewer | Content Creator"}
        </p>
        <nav aria-label={lang === "he" ? "מידע משפטי" : "Legal"} className="flex gap-5 text-xs" style={{ color: "rgba(245,240,232,0.8)" }}>
          <a href="/accessibility/" className="underline-offset-4 hover:underline">{lang === "he" ? "הצהרת נגישות" : "Accessibility statement"}</a>
          <a href="/privacy/" className="underline-offset-4 hover:underline">{lang === "he" ? "מדיניות פרטיות" : "Privacy policy"}</a>
        </nav>
        <p className="text-xs" style={{ color: "rgba(245,240,232,0.8)" }}>
          © {new Date().getFullYear()} {lang === "he" ? "רוני לוגסי כהן. כל הזכויות שמורות." : "Roni Lugasi Cohen. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
