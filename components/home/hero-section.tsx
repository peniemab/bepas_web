import { HeroCarousel } from "@/components/home/hero-carousel"

export function HeroSection() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-4 sm:px-6 sm:pt-8 sm:pb-5 lg:px-8 lg:pt-10 lg:pb-6">
        <HeroCarousel />
      </div>
    </section>
  )
}
