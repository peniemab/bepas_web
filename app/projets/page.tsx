"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPinIcon, LayoutGridIcon, CheckCircle2Icon, ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const cités = [
  {
    id: "exploit-3",
    name: "Maluku — Cité Exploit 3",
    commune: "Maluku",
    location: "Route principale Menkao, RDC",
    image: {
      src: "/heroAccueil10.jpg",
      alt: "Cité Exploit 3 — Maluku Menkao"
    },
    tagline: "Le pôle de développement futur de Kinshasa",
    dimensions: "20 m × 20 m (400 m²) ou 15 m × 20 m (300 m²)",
    amenities: [
      "Forage collectif à grand débit",
      "Avenues de 10m de large tracées",
      "Équipements prévus : école, dispensaire médical",
      "Sécurisation foncière totale garantie"
    ],
    status: "Disponible à la vente",
    linkSubject: "Intérêt pour Maluku - Cité Exploit 3"
  },
  {
    id: "exploit-2",
    name: "Mont Ngafula — Cité Exploit 2",
    commune: "Mont Ngafula",
    location: "Avenue IBIMI, quartier Kimwenza, Kinshasa",
    image: {
      src: "/heroAccueil11.jpg",
      alt: "Cité Exploit 2 — Mont Ngafula"
    },
    tagline: "Le calme et la fraîcheur des collines de Kimwenza",
    dimensions: "20 m × 20 m (400 m²)",
    amenities: [
      "Proximité de la gare de Kimwenza et des écoles",
      "Accès carrossable et environnement boisé",
      "Zone résidentielle recherchée",
      "Bornage et limites cadastrales approuvés"
    ],
    status: "Dernières opportunités",
    linkSubject: "Intérêt pour Mont Ngafula - Cité Exploit 2"
  },
  {
    id: "c-possible",
    name: "Maluku — Cité C'Possible",
    commune: "Maluku",
    location: "Route nationale n° 1, Menkao, Kinshasa",
    image: {
      src: "/heroAccueil1.jpg",
      alt: "Cité C'Possible — Maluku Menkao"
    },
    tagline: "Un investissement résidentiel ultra-accessible",
    dimensions: "20 m × 20 m (400 m²)",
    amenities: [
      "Terrain plat idéal pour constructions immédiates",
      "Accès direct depuis la route nationale n°1",
      "Forage d'eau en cours d'installation",
      "Échelonnement souple sans intérêt"
    ],
    status: "Disponible à la vente",
    linkSubject: "Intérêt pour Maluku - Cité C'Possible"
  }
]

export default function ProjetsPage() {
  const [filter, setFilter] = useState("Tout")

  const filteredCites = filter === "Tout" 
    ? cités 
    : cités.filter(cite => cite.commune === filter)

  const communes = ["Tout", "Maluku", "Mont Ngafula"]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[oklch(58.8%_0.158_241.966)] to-[oklch(54%_0.158_242)] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="w-fit rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Nos Lots & Cités
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Découvrez nos projets immobiliers à Kinshasa
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Des concessions rigoureusement structurées, viabilisées et prêtes à bâtir. Choisissez votre parcelle sécurisée à crédit ou au comptant.
            </p>
          </div>
        </div>
      </section>

      {/* Barre de filtrage interactif */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-border/80 pb-6">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-medium text-foreground">Cités & concessions disponibles</h2>
            <p className="text-sm text-muted-foreground">Filtrez par commune pour trouver votre futur terrain.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {communes.map((commune) => (
              <button
                key={commune}
                onClick={() => setFilter(commune)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all shadow-xs ${
                  filter === commune
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 border border-border/60 text-muted-foreground hover:bg-muted"
                }`}
              >
                {commune === "Tout" ? "Toutes les communes" : commune}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des projets */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10">
          {filteredCites.map((cite) => (
            <article
              key={cite.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-md lg:grid lg:grid-cols-12 lg:gap-8"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/10] lg:col-span-5 lg:aspect-auto lg:h-full min-h-[300px]">
                <Image
                  src={cite.image.src}
                  alt={cite.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold text-foreground backdrop-blur-xs">
                  {cite.status}
                </span>
              </div>

              {/* Content Section */}
              <div className="flex flex-col gap-5 p-6 sm:p-8 lg:col-span-7 lg:justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
                    <MapPinIcon className="size-4 text-primary" />
                    <span>{cite.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl pt-1">
                    {cite.name}
                  </h3>
                  <p className="text-sm italic font-medium text-primary">
                    &ldquo;{cite.tagline}&rdquo;
                  </p>
                  <p className="text-sm font-bold bg-muted/60 text-foreground/80 px-3.5 py-2 rounded-lg w-fit">
                    Dimensions : {cite.dimensions}
                  </p>

                  <div className="border-t border-border/50 pt-4 flex flex-col gap-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground">Équipements et Avantages :</p>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs sm:text-sm text-muted-foreground">
                      {cite.amenities.map((item) => (
                        <li key={item} className="flex items-start gap-1.5">
                          <CheckCircle2Icon className="size-4 shrink-0 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-border/40">
                  <Button
                    nativeButton={false}
                    className="border-transparent bg-gradient-to-r from-[oklch(58.8%_0.158_241.966)] to-[oklch(54%_0.158_242)] text-white hover:brightness-[0.92]"
                    render={<Link href={`/contact?subject=${encodeURIComponent(cite.linkSubject)}`} />}
                  >
                    Réserver / Visiter
                    <ArrowRightIcon className="size-4" />
                  </Button>
                  <Button
                    nativeButton={false}
                    variant="outline"
                    render={<Link href="/on-vous-aide/acheter-une-parcelle" />}
                  >
                    Voir les modalités de crédit
                  </Button>
                </div>
              </div>
            </article>
          ))}

          {filteredCites.length === 0 && (
            <div className="text-center py-12 flex flex-col items-center gap-3">
              <p className="text-base text-muted-foreground">Aucune cité disponible pour le moment dans cette commune.</p>
              <Button nativeButton={false} variant="outline" onClick={() => setFilter("Tout")}>
                Voir tous les projets
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Notre méthodologie d'aménagement */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                Pourquoi choisir une cité structurée par BEPAS ?
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                À Kinshasa, acheter un terrain simple comporte souvent des risques d&apos;empiètement, d&apos;enclavement ou de conflits. BEPAS élimine ces risques en amont.
              </p>
              <div className="flex flex-col gap-3.5 text-sm sm:text-base">
                <div className="flex gap-2">
                  <CheckCircle2Icon className="size-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <strong className="text-foreground font-bold">Sécurisation Juridique :</strong> Nous vérifions les titres cadastraux en profondeur avant toute acquisition de concession.
                  </div>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2Icon className="size-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <strong className="text-foreground font-bold">Aménagement Ordonné :</strong> Nos avenues font au minimum 10 mètres de large pour permettre l&apos;accès facile aux véhicules d&apos;urgence et de livraison.
                  </div>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2Icon className="size-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <strong className="text-foreground font-bold">Infrastructures Durables :</strong> Nous intégrons des équipements sociaux collectifs (eau par forage, réserves d&apos;espace pour écoles ou cliniques).
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xs max-h-[380px]">
              <Image
                src="/heroAccueil11.jpg"
                alt="Chantier de viabilisation BEPAS à Kinshasa"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
