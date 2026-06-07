"use client"

import { PageHeroParallax } from "@/components/layout/page-hero-parallax"
import { nosSolutionsPage } from "@/lib/nos-solutions-content"
import { nosSolutionsHeroBreadcrumb } from "@/lib/site-config"

export function NosSolutionsHero() {
  const { title, taglineAlt, image } = nosSolutionsPage.hero

  return (
    <PageHeroParallax
      image={image}
      imageClassName="object-[center_-3cm] sm:object-center"
      breadcrumb={nosSolutionsHeroBreadcrumb}
      breadcrumbAllLinks
      title={title}
      subtitle={taglineAlt}
      contentAlign="raised"
    />
  )
}
