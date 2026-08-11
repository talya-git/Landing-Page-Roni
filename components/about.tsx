import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-14 md:py-24 lg:py-36" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #D4521A, transparent)" }} />

      <div className="relative mx-auto max-w-7xl px-5 md:px-16">

        <Reveal>
          <div className="mb-8 md:mb-16 flex items-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#D4521A" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "#D4521A" }}>קצת עליי</span>
          </div>
        </Reveal>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-24">

          <Reveal className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl" style={{ backgroundColor: "#D4521A", opacity: 0.15 }} />
              <div className="absolute -bottom-8 -right-8 h-full w-full rounded-3xl" style={{ border: "1px solid rgba(212,82,26,0.2)" }} />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ aspectRatio: "4/5" }}>
                <img src="/media/roni-about.jpg" alt="רוני לוגסי כהן" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: "linear-gradient(to top, rgba(27,77,62,0.6), transparent)" }} />
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 rounded-2xl px-4 py-2 md:px-5 md:py-3" style={{ backgroundColor: "rgba(245,240,232,0.95)", backdropFilter: "blur(8px)" }}>
                  <p className="font-heading text-xs md:text-sm font-bold" style={{ color: "#1B4D3E" }}>רוני לוגסי כהן</p>
                  <p className="text-[10px] md:text-xs mt-0.5" style={{ color: "#D4521A" }}>אשת תקשורת</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 md:order-2" delay={120}>
            <h2 className="font-heading font-bold leading-[1.1] tracking-[-0.03em] text-3xl md:text-5xl lg:text-6xl" style={{ color: "#1B4D3E" }}>
              אנשים תמיד היו הסיפור שלי
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full" style={{ backgroundColor: "#D4521A" }} />
            <div className="mt-5 md:mt-8 space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "#5A5045" }}>
              <p>במבט ראשון המסלול המקצועי שלי נראה מגוון. התחלתי בעולם המחול. המשכתי לניהול ולהובלת אנשים. וכיום אני מנכ"לית קבוצת נדל"ן, אשת תקשורת, מגישת רדיו, מראיינת ומנחת כנסים, פאנלים ואירועי תוכן.</p>
              <p>אבל אם יש חוט אחד שמחבר בין כל התחנות האלה, הוא אהבה אמיתית לאנשים.</p>
              <p>אני מאמינה ששיחה טובה יכולה לפתוח דלת, לייצר חיבור ולשנות נקודת מבט. זו הסיבה שאני בוחרת בכל פעם מחדש לעלות לבמה, להחזיק מיקרופון וליצור מרחב שבו אנשים מרגישים בנוח להיות מי שהם באמת.</p>
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition-all duration-300 hover:gap-5" style={{ color: "#D4521A" }}>
              בואו נדבר
              <span className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full text-white text-base" style={{ backgroundColor: "#D4521A" }}>←</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
