"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { quiSommesNousSectionIds } from "@/lib/qui-sommes-nous-content"

const sites = [
  {
    id: "maluku-exploit-3",
    name: "Maluku — Cité Exploit 3",
    location: "Route principale vers la nationale n° 1",
    description:
      "Investissez dans un projet immobilier en plein développement à Maluku Menkao, avec accès direct à la route nationale.",
    image: {
      src: "/heroAccueil10.jpg",
      alt: "Cité Exploit 3 — Maluku Menkao",
      width: 736,
      height: 946,
    },
  },
  {
    id: "mont-ngafula-exploit-2",
    name: "Mont Ngafula — Cité Exploit 2",
    location: "Avenue IBIMI, quartier Kimwenza",
    description:
      "Une cité pensée pour les familles, avec équipements sociaux et cadre de vie apaisé.",
    image: {
      src: "/heroAccueil11.jpg",
      alt: "Cité Exploit 2 — Mont Ngafula",
      width: 736,
      height: 946,
    },
  },
  {
    id: "maluku-cpossible",
    name: "Maluku — Cité C'Possible",
    location: "Route nationale n° 1, Menkao",
    description:
      "Votre parcelle de terrain devient possible. Accessibilité, paiement échelonné, et accompagnement jusqu'au titre foncier.",
    image: {
      src: "/heroAccueil1.jpg",
      alt: "Cité C'Possible — Maluku Menkao",
      width: 736,
      height: 946,
    },
  },
]

export function SitesCTASection() {
  return (
    <section
      id="choisis-ton-site"
      className="w-full scroll-mt-20"
      aria-labelledby="choisis-ton-site-title"
    >
      <div className="w-full bg-primary/30 rounded-2xl overflow-x-hidden pb-12 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-2 text-center sm:mb-12">
            <h2
              id="choisis-ton-site-title"
              className="text-3xl font-black tracking-tight text-foreground sm:text-4xl"
            >
              Choisis ton site
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Trois cités BEPAS, trois opportunités pour ton avenir immobilier.
            </p>
          </div>

          {/* Sites Grid */}
          <div className="grid gap-6 sm:gap-8  lg:grid-cols-3">
            {sites.map((site) => (
              <div
                key={site.id}
                className="flex flex-col gap-4 rounded-2xl border border-border/30  p-4 sm:p-5 backdrop-blur-sm transition-all hover:shadow-md hover:border-border/50"
              >
                {/* Image Container */}
                <div className="relative w-full overflow-hidden rounded-xl bg-muted/40">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src={site.image.src}
                      alt={site.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-bold tracking-tight text-foreground">
                    {site.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{site.location}</p>
                  <p className="text-sm leading-relaxed text-foreground/80 pt-1">
                    {site.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link href="/nos-solutions/vente-de-parcelles" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-primary-foreground hover:brightness-[0.92]">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
