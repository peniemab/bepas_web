"use client"

import { PageHeroParallax } from "@/components/layout/page-hero-parallax"

type BreadcrumbItem = {
  label: string
  href: string
}

type ProjetsHeroParallaxProps = {
  title: string
  subtitle: string
  image: { src: string; alt: string }
  breadcrumb: readonly BreadcrumbItem[]
  eyebrow?: string
}

export function ProjetsHeroParallax({
  title,
  subtitle,
  image,
  breadcrumb,
  eyebrow,
}: ProjetsHeroParallaxProps) {
  return (
    <PageHeroParallax
      image={image}
      imageClassName="object-[center_-3cm] sm:object-center"
      breadcrumb={breadcrumb}
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      contentAlign="raised"
    />
  )
}
