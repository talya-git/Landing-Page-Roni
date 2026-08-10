"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"

import { Radio, Tv, Mic2, Headphones, Users, Camera } from "lucide-react"

const categories = [
  { id: "radio", label: "רדיו", Icon: Radio },
  { id: "tv", label: "טלוויזיה", Icon: Tv },
  { id: "conferences", label: "כנסים", Icon: Mic2 },
  { id: "podcasts", label: "פודקאסטים", Icon: Headphones },
  { id: "panels", label: "פאנלים", Icon: Users },
  { id: "behind", label: "מאחורי הקלעים", Icon: Camera },
]

const images: Record<string, { src: string; alt: string }[]> = {
  radio: [
    { src: "/media/gallery/radio-1.jpg", alt: "רדיו 1" },
    { src: "/media/gallery/radio-2.jpg", alt: "רדיו 2" },
    { src: "/media/gallery/radio-3.jpg", alt: "רדיו 3" },
  ],
  tv: [
    { src: "/media/gallery/tv-1.jpg", alt: "טלוויזיה 1" },
    { src: "/media/gallery/tv-2.jpg", alt: "טלוויזיה 2" },
  ],
  conferences: [
    { src: "/media/gallery/conf-1.jpg", alt: "כנס 1" },
    { src: "/media/gallery/conf-2.jpg", alt: "כנס 2" },
    { src: "/media/gallery/conf-3.jpg", alt: "כנס 3" },
    { src: "/media/gallery/conf-4.jpg", alt: "כנס 4" },
  ],
  podcasts: [
    { src: "/media/gallery/pod-1.jpg", alt: "פודקאסט 1" },
    { src: "/media/gallery/pod-2.jpg", alt: "פודקאסט 2" },
  ],
  panels: [
    { src: "/media/gallery/panel-1.jpg", alt: "פאנל 1" },
    { src: "/media/gallery/panel-2.jpg", alt: "פאנל 2" },
    { src: "/media/gallery/panel-3.jpg", alt: "פאנל 3" },
  ],
  behind: [
    { src: "/media/gallery/behind-1.jpg", alt: "מאחורי הקלעים 1" },
    { src: "/media/gallery/behind-2.jpg", alt: "מאחורי הקלעים 2" },
  ],
}

export function Gallery() {
  const [active, setActive] = useState("conferences")
  const current = images[active] ?? []

  return (
    <section id="gallery" className="relative py-20 md:py-28" style={{ borderBottom: "1px solid #DDD8CE", backgroundColor: "#1B4D3E" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center mb-12">
          <span className="inline-flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#D4521A" }}>
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
            גלריה
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl" style={{ color: "#F5F0E8" }}>
            עשייה, נוכחות ואנרגיה
          </h2>
        </Reveal>

        {/* Category tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all"
              style={{
                backgroundColor: active === c.id ? "#D4521A" : "rgba(245,240,232,0.08)",
                color: active === c.id ? "#FFFFFF" : "rgba(245,240,232,0.7)",
                border: `1px solid ${active === c.id ? "#D4521A" : "rgba(245,240,232,0.15)"}`,
              }}
            >
              <c.Icon className="h-4 w-4" strokeWidth={1.5} />
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {current.map((img, i) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-xl"
              style={{
                aspectRatio: "4/3",
                animation: `fade-up 0.5s ease ${i * 60}ms both`,
                backgroundColor: "rgba(245,240,232,0.08)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(to top, rgba(212,82,26,0.5), transparent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
