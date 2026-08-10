export function SiteFooter() {
  return (
    <footer className="py-12" style={{ borderTop: "1px solid rgba(245,240,232,0.12)", backgroundColor: "#132E25" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center md:px-8">
        <img src="/media/logo-main.png" alt="רוני לוגסי" className="h-20 w-auto object-contain" />
        <p className="text-sm" style={{ color: "rgba(245,240,232,0.6)" }}>
          אשת תקשורת | מנחת כנסים ופאנלים | מראיינת | יוצרת תוכן
        </p>
        <p className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
          © {new Date().getFullYear()} רוני לוגסי כהן. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  )
}
