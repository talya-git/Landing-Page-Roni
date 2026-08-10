"use client"

import { Reveal } from "@/components/reveal"
import { Phone, Mail } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.523 5.26l-.999 3.648 3.965-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden" style={{ backgroundColor: "#1B4D3E" }}>

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-16 md:py-36">
        <div className="grid gap-12 md:grid-cols-2 md:gap-24 items-center">

          {/* Left — headline */}
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#D4521A" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "#D4521A" }}>
                בואו ניצור יחד
              </span>
            </div>
            <h2
              className="font-heading font-bold leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F0E8" }}
            >
              לכל שיחה יש כוח{" "}
              <span style={{ color: "#D4521A" }}>להשפיע.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed max-w-md" style={{ color: "rgba(245,240,232,0.6)" }}>
              אם אתם מחפשים מנחה לכנס, מראיינת לפודקאסט, מנחת פאנל, יוצרת תוכן או שותפה לפרויקט משמעותי — אשמח להכיר.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+972528962040"
                className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#D4521A", color: "#FFFFFF", boxShadow: "0 8px 40px rgba(212,82,26,0.4)" }}
              >
                <Phone className="h-5 w-5" />
                לתיאום שיחה
              </a>
              <a
                href="https://wa.me/972528962040"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-white/10"
                style={{ border: "1px solid rgba(245,240,232,0.25)", color: "#F5F0E8" }}
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Right — contact cards */}
          <Reveal delay={150}>
            <div className="flex flex-col gap-4">
              {[
                { icon: Phone, label: "טלפון", value: "052-896-2040", href: "tel:+972528962040" },
                { icon: WhatsAppIcon, label: "WhatsApp", value: "שלחי הודעה עכשיו", href: "https://wa.me/972528962040" },
                { icon: Mail, label: "אימייל", value: "roni@orencohengroup.com", href: "mailto:roni@orencohengroup.com" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "rgba(245,240,232,0.05)",
                    border: "1px solid rgba(245,240,232,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(212,82,26,0.12)"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212,82,26,0.4)"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(245,240,232,0.05)"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.1)"
                  }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "rgba(212,82,26,0.15)", color: "#D4521A" }}
                  >
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(245,240,232,0.4)" }}>{c.label}</p>
                    <p className="mt-0.5 font-heading text-base font-semibold" style={{ color: "#F5F0E8" }}>{c.value}</p>
                  </div>
                  <div className="mr-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ color: "#D4521A" }}>←</div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
