"use client"

import { PageHeroParallax } from "@/components/layout/page-hero-parallax"
import {
  actualitesHeroBreadcrumb,
  actualitesPage,
} from "@/lib/actualites-content"

export function ActualitesHero() {
  const { title, taglineAlt, image } = actualitesPage.hero

  return (
    <PageHeroParallax
      image={image}
      imageClassName="object-[center_-3cm] sm:object-center"
      breadcrumb={actualitesHeroBreadcrumb}
      title={title}
      subtitle={taglineAlt}
      contentAlign="raised"
    />
  )
}
