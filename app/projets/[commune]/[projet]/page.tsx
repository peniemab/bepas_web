import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react"

import { ProjetsHeroParallax } from "@/components/projets/projets-hero-parallax"
import { Button } from "@/components/ui/button"
import {
  getCommuneHref,
  getProjetByCommuneAndSlug,
  getProjetHref,
  isCommuneSlug,
  projets,
  projetsPage,
} from "@/lib/projets-content"

type ProjetDetailPageProps = {
  params: Promise<{ commune: string; projet: string }>
}

export function generateStaticParams() {
  return projets.map((projet) => ({
    commune: projet.communeSlug,
    projet: projet.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjetDetailPageProps): Promise<Metadata> {
  const { commune, projet: projetSlug } = await params
  const projet = getProjetByCommuneAndSlug(commune, projetSlug)

  if (!projet) {
    return { title: "Projet introuvable" }
  }

  return {
    title: projet.fullName,
    description: projet.summary,
  }
}

export default async function ProjetDetailPage({ params }: ProjetDetailPageProps) {
  const { commune, projet: projetSlug } = await params

  if (!isCommuneSlug(commune)) {
    notFound()
  }

  const projet = getProjetByCommuneAndSlug(commune, projetSlug)

  if (!projet) {
    notFound()
  }

  return (
    <main className="flex-1">
      <ProjetsHeroParallax
        title={projet.name}
        subtitle={projet.tagline}
        image={projet.image}
        eyebrow={projet.commune}
        breadcrumb={[
          ...projetsPage.hero.breadcrumb,
          {
            label: projet.commune,
            href: getCommuneHref(projet.communeSlug),
          },
          {
            label: projet.name,
            href: getProjetHref(projet),
          },
        ]}
      />

      <div className="parallax-content-overlap border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <dt className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Commune
              </dt>
              <dd className="text-xl font-black text-foreground sm:text-2xl">
                {projet.commune}
              </dd>
            </div>
            <div>
              <dt className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Lieu
              </dt>
              <dd className="text-base font-bold leading-snug text-foreground sm:text-lg">
                {projet.location}
              </dd>
            </div>
            <div>
              <dt className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Dimensions
              </dt>
              <dd className="text-base font-bold leading-snug text-foreground sm:text-lg">
                {projet.dimensions}
              </dd>
            </div>
            <div>
              <dt className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Statut
              </dt>
              <dd className="text-base font-bold leading-snug text-foreground sm:text-lg">
                {projet.status}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="border-b border-border/60 pb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Équipements & avantages
              </h2>
              <ul className="mt-8 space-y-4">
                {projet.amenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-[oklch(78%_0.14_165)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3">
                <Button
                  nativeButton={false}
                  className="h-auto border-transparent bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground hover:brightness-[0.92]"
                  render={
                    <Link
                      href={`/contact?subject=${encodeURIComponent(projet.linkSubject)}`}
                    />
                  }
                >
                  Réserver / Visiter
                  <ArrowRightIcon className="size-4" />
                </Button>
                <Button
                  nativeButton={false}
                  variant="outline"
                  render={<Link href="/on-vous-aide/acheter-une-parcelle" />}
                >
                  Modalités de crédit
                </Button>
                <Link
                  href={getCommuneHref(projet.communeSlug)}
                  className="mt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  ← Retour à {projet.commune}
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="mb-8 text-3xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Vue d&apos;ensemble
            </h2>
            <p className="max-w-none text-lg font-light leading-relaxed text-muted-foreground">
              {projet.summary}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {projet.fullName} — {projet.location}. Des concessions
              rigoureusement structurées, viabilisées et prêtes à bâtir, avec
              sécurisation foncière et accompagnement BEPAS jusqu&apos;à la
              remise de vos documents.
            </p>

            <div className="mt-16">
              <h3 className="mb-8 border-b border-border/60 pb-4 text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                Galerie du projet
              </h3>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted shadow-xl">
                <Image
                  src={projet.image.src}
                  alt={projet.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
