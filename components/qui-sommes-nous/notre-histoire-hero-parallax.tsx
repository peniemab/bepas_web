"use client"

import { PageHeroParallax } from "@/components/layout/page-hero-parallax"
import { notreHistoirePage } from "@/lib/notre-histoire-content"
import { quiSommesNousHeroBreadcrumb } from "@/lib/site-config"

export function NotreHistoireHeroParallax() {
  const { hero } = notreHistoirePage

  return (
    <PageHeroParallax
      image={hero.image}
      imageClassName="object-[center_-3cm] sm:object-center"
      breadcrumb={quiSommesNousHeroBreadcrumb}
      breadcrumbAllLinks
      title={hero.tagline}
      srTitle={hero.title}
      subtitle={hero.taglineAlt}
      contentAlign="raised"
    />
  )
}
