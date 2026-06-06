import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProjetsCommuneContent } from "@/components/projets/projets-commune-content"
import { ProjetsHeroParallax } from "@/components/projets/projets-hero-parallax"
import {
  getCommuneHref,
  getProjetCommune,
  isCommuneSlug,
  projetCommunes,
  projetsPage,
} from "@/lib/projets-content"

type ProjetsCommunePageProps = {
  params: Promise<{ commune: string }>
}

export function generateStaticParams() {
  return projetCommunes.map((commune) => ({ commune: commune.slug }))
}

export async function generateMetadata({
  params,
}: ProjetsCommunePageProps): Promise<Metadata> {
  const { commune: communeSlug } = await params

  if (!isCommuneSlug(communeSlug)) {
    return { title: "Commune introuvable" }
  }

  const commune = getProjetCommune(communeSlug)

  return {
    title: `${commune?.name ?? communeSlug} — Projets`,
    description: projetsPage.communeHero.subtitle,
  }
}

export default async function ProjetsCommunePage({ params }: ProjetsCommunePageProps) {
  const { commune: communeSlug } = await params

  if (!isCommuneSlug(communeSlug)) {
    notFound()
  }

  const commune = getProjetCommune(communeSlug)

  if (!commune) {
    notFound()
  }

  return (
    <main className="flex-1">
      <ProjetsHeroParallax
        title={commune.name}
        subtitle={projetsPage.communeHero.subtitle}
        image={commune.image}
        breadcrumb={[
          ...projetsPage.hero.breadcrumb,
          {
            label: commune.name,
            href: getCommuneHref(commune.slug),
          },
        ]}
      />
      <ProjetsCommuneContent communeSlug={commune.slug} />
    </main>
  )
}
