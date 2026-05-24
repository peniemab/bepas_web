import { HeroCarousel } from "@/components/home/hero-carousel"

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-8 sm:px-6 sm:pt-8 sm:pb-10 lg:px-8 lg:pt-10 lg:pb-12">
        <HeroCarousel />
      </div>
    </section>
  )
}
