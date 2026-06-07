"use client"

import { PageHeroParallax } from "@/components/layout/page-hero-parallax"
import {
  homeHero,
  homeHeroSlideIntervalMs,
  homeHeroSlides,
  homeHeroTagline,
} from "@/lib/home-content"

export function HeroCarousel() {
  const slides = homeHeroSlides.map((slide) => ({
    src: slide.image.src,
    alt: slide.image.alt,
  }))

  return (
    <PageHeroParallax
      slides={slides}
      slideIntervalMs={homeHeroSlideIntervalMs}
      title={homeHeroSlides[0].title}
      subtitle={`${homeHeroSlides[0].lead} ${homeHeroTagline}`}
      ctaPrimary={homeHero.ctaPrimary}
      ctaSecondary={homeHero.ctaSecondary}
    />
  )
}
