import { Reveal } from "@/components/reveal"

export function VideoSection() {
  return (
    <section className="relative py-20 md:py-28" style={{ borderBottom: "1px solid #DDD8CE", backgroundColor: "#F5F0E8" }}>
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#D4521A" }}>
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
            היכרות אישית
            <span className="h-px w-6" style={{ backgroundColor: "#D4521A" }} />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-[-0.03em] text-balance sm:text-4xl md:text-5xl" style={{ color: "#1B4D3E" }}>
            כמה מילים ממני אליכם
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="relative mt-12 overflow-hidden rounded-2xl shadow-2xl"
            style={{
              border: "1px solid rgba(212,82,26,0.25)",
              boxShadow: "0 24px 80px rgba(27,77,62,0.15)",
            }}
          >
            <div className="relative aspect-video w-full flex items-center justify-center" style={{ backgroundColor: "#EDE8DF" }}>
              <video
                className="absolute inset-0 h-full w-full object-cover"
                controls
                poster="/media/video-poster.jpg"
                playsInline
              >
                <source src="/media/intro-video.mp4" type="video/mp4" />
              </video>
              <div className="relative z-10 flex flex-col items-center gap-4 text-center px-8 pointer-events-none">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(212,82,26,0.12)", border: "2px solid rgba(212,82,26,0.35)" }}
                >
                  <svg className="h-8 w-8 mr-[-4px]" viewBox="0 0 24 24" fill="#D4521A">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm" style={{ color: "#6B6355" }}>וידאו אישי של רוני לוגסי כהן</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
