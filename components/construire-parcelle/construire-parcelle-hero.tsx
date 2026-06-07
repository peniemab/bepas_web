"use client"

import { PageHeroParallax } from "@/components/layout/page-hero-parallax"
import { construireParcellePage } from "@/lib/construire-parcelle-content"

export function ConstruireParcelleHero() {
  const {
    title,
    lead,
    slides,
    slideIntervalMs,
    ctaPrimary,
    ctaSecondary,
  } = construireParcellePage.hero

  return (
    <PageHeroParallax
      slides={slides}
      slideIntervalMs={slideIntervalMs}
      title={title}
      subtitle={lead}
      ctaPrimary={ctaPrimary}
      ctaSecondary={ctaSecondary}
    />
  )
}
