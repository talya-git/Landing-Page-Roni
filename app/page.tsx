import { SiteHeader } from "@/components/site-header"
import { ScrollProgress } from "@/components/scroll-progress"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { WhyRoni } from "@/components/why-roni"
import { Services } from "@/components/services"
import { Logos } from "@/components/logos"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Film grain */}
      <div className="pointer-events-none fixed inset-0 z-[55] bg-grain opacity-[0.03] mix-blend-soft-light" />

      <ScrollProgress />
      <SiteHeader />
      <Hero />
      <VideoSection />
      <Stats />
      <About />
      <WhyRoni />
      <Services />
      <Logos />
      <Gallery />
      <Testimonials />
      <Contact />
      <SiteFooter />

      {/* Mobile sticky CTA */}
      <a
        href="#contact"
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center rounded-full py-3.5 text-sm font-semibold shadow-2xl lg:hidden"
        style={{
          backgroundColor: "#D4521A",
          color: "#FFFFFF",
          boxShadow: "0 8px 32px rgba(212,82,26,0.45)",
        }}
      >
        לתיאום שיחה
      </a>
    </main>
  )
}
