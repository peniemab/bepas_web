"use client"

import { PageHeroParallax } from "@/components/layout/page-hero-parallax"
import { acheterParcellePage } from "@/lib/acheter-parcelle-content"

export function AcheterParcelleHero() {
  const {
    title,
    lead,
    slides,
    slideIntervalMs,
    ctaPrimary,
    ctaSecondary,
  } = acheterParcellePage.hero

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
