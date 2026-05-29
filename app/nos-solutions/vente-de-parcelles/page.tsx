import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CheckIcon, MapPinIcon, LayoutGridIcon, LandmarkIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Vente de parcelles à Kinshasa",
  description: "Découvrez notre catalogue de parcelles résidentielles (20x20m et 15x20m) à crédit et sécurisées à Maluku, N'sele, et Mont Ngafula.",
}

export default function VenteParcellesSolutionPage() {
  const sizes = [
    {
      title: "Parcelle standard : 20 m × 20 m (400 m²)",
      description: "Le format idéal pour une grande villa familiale de type F4 ou F5, avec de l'espace pour une cour arrière, un jardin ou un parking.",
      benefits: ["Superficie optimale pour les familles", "Permet l'intégration de dépendances", "Idéal pour les grands projets de construction"]
    },
    {
      title: "Parcelle compacte : 15 m × 20 m (300 m²)",
      description: "Une superficie optimisée, idéale pour une maison de plain-pied de type F3 ou F4 tout en préservant un budget d'achat très attractif.",
      benefits: ["Rapport qualité/prix exceptionnel", "Entretien plus simple et rapide", "Idéal pour investissement locatif ou premier achat"]
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[oklch(58.8%_0.158_241.966)] to-[oklch(50.8%_0.118_165.612)] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="w-fit rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Nos Solutions
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Vente de parcelles résidentielles sécurisées
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              BEPAS met à votre disposition des terrains d&apos;exception dans les communes d&apos;avenir de Kinshasa, avec un accompagnement complet et un financement sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Intro text */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Des terrains viabilisés pour toutes les bourses
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Devenir propriétaire à Kinshasa est souvent un parcours du combattant. Pour éliminer les incertitudes, la SARL BEPAS sélectionne, acquiert et structure de grandes concessions avant de les subdiviser de manière géométrique et aérée.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Que vous souhaitiez bâtir immédiatement ou sécuriser un patrimoine pour votre retraite, nous adaptons les conditions d&apos;acquisition à vos capacités financières.
            </p>
            <div className="flex gap-4 pt-2">
              <Button nativeButton={false} render={<Link href="/on-vous-aide/acheter-une-parcelle" />}>
                Modalités de crédit
              </Button>
              <Button nativeButton={false} variant="outline" render={<Link href="/projets" />}>
                Découvrir les sites
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm max-h-[380px]">
            <Image
              src="/heroAccueil10.jpg"
              alt="Subdivision et bornage de nos parcelles"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Dimensions et types de parcelles */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Les dimensions proposées
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Nous mettons à votre disposition deux formats standards de parcelles répondant à tous les besoins familiaux et résidentiels.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {sizes.map((size) => (
              <Card key={size.title} className="border-border/80 shadow-xs flex flex-col justify-between p-6 sm:p-8">
                <div className="flex flex-col gap-4">
                  <div className="w-fit rounded-lg bg-primary/10 p-2.5">
                    <LayoutGridIcon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl leading-tight">
                    {size.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {size.description}
                  </p>
                  <ul className="flex flex-col gap-2 pt-2 text-xs sm:text-sm text-foreground/80">
                    {size.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-1.5">
                        <CheckIcon className="size-4 shrink-0 text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sécurité foncière */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm max-h-[380px] lg:order-last">
            <Image
              src="/BEPAS.jpg"
              alt="Bureaux BEPAS à Kinshasa"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-fit rounded-lg bg-primary/10 p-2.5">
              <LandmarkIcon className="size-6 text-primary" />
            </div>
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Un achat encadré et transparent
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Chaque parcelle vendue fait l&apos;objet d&apos;un contrat notarié officiel établi à nos bureaux des Galeries Présidentielles à Kinshasa-Gombe. 
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Notre équipe prend en charge les relevés topographiques officiels, l&apos;établissement du procès-verbal de bornage par un géomètre expert et entame les démarches auprès du cadastre pour l&apos;obtention de votre titre définitif.
            </p>
            <div className="pt-2">
              <Button nativeButton={false} render={<Link href="/nos-solutions/securisation-fonciere" />}>
                En savoir plus sur la sécurisation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
