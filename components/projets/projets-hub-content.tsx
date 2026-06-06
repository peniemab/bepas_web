"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

import { ConstruireProjectCard } from "@/components/construire-parcelle/construire-project-card"
import { ProjetsCategoryTile } from "@/components/projets/projets-category-tile"
import { ProjetsFilterBar } from "@/components/projets/projets-filter-bar"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  featuredProjets,
  getCommuneHref,
  getProjetHref,
  isCommuneSlug,
  projetCommunes,
  projetsPage,
} from "@/lib/projets-content"

export function ProjetsHubContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const communeParam = searchParams.get("commune")

  useEffect(() => {
    if (communeParam && isCommuneSlug(communeParam)) {
      router.replace(getCommuneHref(communeParam))
    }
  }, [communeParam, router])

  return (
    <>
      <section className="parallax-content-overlap bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjetsFilterBar activeFilter="all" />

          <div className="space-y-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {projetCommunes.map((commune, index) => (
                <ScrollReveal key={commune.slug} delay={index * 100}>
                  <ProjetsCategoryTile
                    slug={commune.slug}
                    name={commune.name}
                    description={commune.description}
                    image={commune.image}
                  />
                </ScrollReveal>
              ))}
            </div>

            <div className="border-t border-border/40 pt-16">
              <h2 className="mb-12 text-3xl font-black uppercase tracking-tight text-foreground">
                {projetsPage.featuredTitle}
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {featuredProjets.map((projet, index) => (
                  <ScrollReveal key={projet.id} delay={index * 100}>
                    <ConstruireProjectCard
                      image={projet.image}
                      category={projet.commune}
                      title={projet.name}
                      summary={projet.summary}
                      href={getProjetHref(projet)}
                      linkLabel="Voir le projet →"
                      priority={index === 0}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjetsMethodology />
    </>
  )
}

function ProjetsMethodology() {
  const { title, lead, image, points } = projetsPage.methodology

  return (
    <section className="relative z-20 border-t border-border/40 bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ScrollReveal>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl">
                {title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {lead}
              </p>
              <ul className="flex flex-col gap-5">
                {points.map((point) => (
                  <li key={point.title} className="flex gap-4">
                    <span
                      className="mt-1.5 size-2 shrink-0 bg-[oklch(78%_0.14_165)]"
                      aria-hidden
                    />
                    <div>
                      <p className="font-bold text-foreground">{point.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative aspect-[4/3] max-h-[420px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
