import type { ReactNode } from "react"

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <main dir="rtl" lang="he" className="min-h-screen" style={{ backgroundColor: "#F5F0E8", color: "#2A2620" }}>
      <header style={{ backgroundColor: "#1B4D3E" }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <a href="/" className="text-sm font-semibold underline-offset-4 hover:underline" style={{ color: "#F5F0E8" }}>
            ← חזרה לדף הראשי
          </a>
          <img src="/media/logo-main.png" alt="רוני לוגסי" className="h-12 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
        </div>
      </header>
      <article className="legal mx-auto max-w-3xl px-5 py-12 md:py-16">
        <h1 className="font-heading text-3xl font-bold md:text-4xl" style={{ color: "#1B4D3E" }}>{title}</h1>
        <p className="mt-2 text-sm" style={{ color: "#5A5348" }}>עודכן לאחרונה: {updated}</p>
        <div className="mt-8 space-y-6 text-base leading-relaxed">{children}</div>
      </article>
    </main>
  )
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="pt-2 text-xl font-bold" style={{ color: "#1B4D3E" }}>{children}</h2>
}
