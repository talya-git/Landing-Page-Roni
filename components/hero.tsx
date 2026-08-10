"use client"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.523 5.26l-.999 3.648 3.965-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden flex flex-col" style={{ backgroundColor: "#1B4D3E" }}>

      {/* Background image with strong overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/media/hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(27,77,62,0.97) 0%, rgba(27,77,62,0.85) 50%, rgba(27,77,62,0.6) 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center items-center px-6 pt-28 pb-24 md:px-16 lg:px-24 max-w-7xl mx-auto w-full text-center">

        {/* Logo */}
        <div style={{ animation: "fade-up 0.6s ease both" }} className="mb-10">
          <img src="/media/logo-main.png" alt="רוני לוגסי" className="h-24 w-auto object-contain drop-shadow-2xl sm:h-28 mx-auto" />
        </div>

        {/* Tag line */}
        <div style={{ animation: "fade-up 0.7s ease 0.1s both" }} className="mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-12" style={{ backgroundColor: "#D4521A" }} />
          <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "rgba(245,240,232,0.6)" }}>
            אשת תקשורת · מנחת כנסים · מראיינת · יוצרת תוכן
          </span>
        </div>

        {/* Main headline */}
        <h1 style={{ animation: "fade-up 0.9s ease 0.15s both" }}>
          <span
            className="block font-heading font-bold leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", color: "#F5F0E8" }}
          >
            שיחות שמחברות
          </span>
          <span
            className="block font-heading font-bold leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", color: "#D4521A" }}
          >
            בין אנשים.
          </span>
          <span
            className="block font-heading font-light leading-[1.05] tracking-[-0.02em] mt-2"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "rgba(245,240,232,0.55)" }}
          >
            במות שמייצרות השפעה.
          </span>
        </h1>

        {/* Body */}
        <p
          className="mt-8 max-w-xl text-base leading-relaxed md:text-lg"
          style={{ color: "rgba(245,240,232,0.7)", animation: "fade-up 0.9s ease 0.3s both" }}
        >
          כבר יותר מ־25 שנה אני עומדת מול אנשים — על במות, באולפני רדיו, בטלוויזיה, בפודקאסטים ובכנסים.
          בכל פעם מחדש אני מגלה שהרגעים המשמעותיים ביותר מתחילים בשיחה אחת טובה.
        </p>

        <p
          className="mt-3 font-heading text-lg font-semibold"
          style={{ color: "#D4521A", animation: "fade-up 0.9s ease 0.35s both" }}
        >
          זו השליחות שלי.
        </p>

        {/* CTA buttons */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-4"
          style={{ animation: "fade-up 0.9s ease 0.45s both" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#D4521A",
              color: "#FFFFFF",
              boxShadow: "0 8px 40px rgba(212,82,26,0.45)",
            }}
          >
            לתיאום שיחה
            <span className="transition-transform duration-300 group-hover:translate-x-[-4px]">←</span>
          </a>
          <a
            href="https://wa.me/972528962040"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-white/10"
            style={{
              border: "1px solid rgba(245,240,232,0.25)",
              color: "#F5F0E8",
            }}
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="mt-12 grid grid-cols-3 gap-4 border-t pt-8"
          style={{ borderColor: "rgba(245,240,232,0.1)", animation: "fade-up 0.9s ease 0.55s both" }}
        >
          {[
            { num: "25+", label: "שנות ניסיון" },
            { num: "500+", label: "ראיונות" },
            { num: "100+", label: "כנסים ופאנלים" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-heading text-2xl font-bold sm:text-3xl" style={{ color: "#D4521A" }}>{s.num}</span>
              <span className="text-xs mt-1 text-center" style={{ color: "rgba(245,240,232,0.5)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animation: "fade-up 1s ease 0.8s both" }}>
        <div className="h-12 w-px" style={{ background: "linear-gradient(to bottom, rgba(212,82,26,0.8), transparent)" }} />
      </div>
    </section>
  )
}
