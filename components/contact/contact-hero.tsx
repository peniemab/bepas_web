"use client"

import { PageHeroParallax } from "@/components/layout/page-hero-parallax"
import { contactPage } from "@/lib/contact-content"

export function ContactHero() {
  const { title, taglineAlt, image, breadcrumb } = contactPage.hero

  return (
    <PageHeroParallax
      image={image}
      imageClassName="object-cover object-center"
      breadcrumb={breadcrumb}
      title={title}
      subtitle={taglineAlt}
      contentAlign="raised"
    />
  )
}
