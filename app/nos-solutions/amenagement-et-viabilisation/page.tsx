import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { DropletsIcon, CompassIcon, LandmarkIcon, LightbulbIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Aménagement & Viabilisation de Cités",
  description: "Découvrez nos travaux de viabilisation : traçage des voies d'accès, forages industriels en eau potable et réserves d'infrastructures communes.",
}

export default function AmenagementViabilisationSolutionPage() {
  const elements = [
    {
      icon: CompassIcon,
      title: "Avenues spacieuses & Tracées",
      description: "Toutes nos cités sont structurées avec des avenues d'une largeur minimale de 10 mètres pour assurer une circulation fluide, le stationnement facile et l'accès des services d'urgence."
    },
    {
      icon: DropletsIcon,
      title: "Forages industriels autonomes",
      description: "Pour pallier les coupures de la Regideso, BEPAS installe des forages de grande profondeur avec châteaux d'eau collectifs pour distribuer de l'eau potable aux résidents."
    },
    {
      icon: LandmarkIcon,
      title: "Espaces collectifs réservés",
      description: "Nous prévoyons systématiquement dans nos plans de lotissement des réserves foncières d'utilité publique : écoles primaires, dispensaires de santé, églises et petits commerces."
    },
    {
      icon: LightbulbIcon,
      title: "Énergie & Éclairage public",
      description: "Nous menons des études pour intégrer l'éclairage public solaire et faciliter le raccordement au réseau électrique national ou à des solutions solaires collectives autonomes."
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[oklch(58.8%_0.158_241.966)] to-[oklch(76.5%_0.177_163.223)] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="w-fit rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Nos Solutions
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Un aménagement moderne et viabilisé
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Nous ne vendons pas de simples terrains bruts. BEPAS conçoit et réalise les travaux d&apos;infrastructures indispensables pour faire de nos concessions de véritables quartiers d&apos;avenir.
            </p>
          </div>
        </div>
      </section>

      {/* Concept de viabilisation */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Bâtir des quartiers structurés et vivables
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              À Kinshasa, beaucoup de nouveaux quartiers grandissent sans planification, provoquant d&apos;importants problèmes d&apos;inondations, d&apos;accès routiers ou de coupures d&apos;eau.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              La SARL BEPAS applique des normes d&apos;urbanisme strictes. Chaque lotissement est modélisé par des ingénieurs urbanistes avant la mise en vente. Les voies d&apos;accès sont terrassées et stabilisées, et des forages d&apos;eau industriels garantissent l&apos;autonomie des familles.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm max-h-[380px]">
            <Image
              src="/heroAccueil10.jpg"
              alt="Forage et aménagement des cités BEPAS"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Détails des aménagements */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Nos chantiers de viabilisation réels
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Chaque cité BEPAS bénéficie d&apos;un cahier des charges d&apos;aménagement garantissant un confort de vie moderne et durable.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {elements.map((el) => {
              const Icon = el.icon
              return (
                <Card key={el.title} className="border-border/80 shadow-xs flex flex-col h-full">
                  <CardHeader className="flex flex-col gap-3">
                    <div className="w-fit rounded-lg bg-primary/10 p-2.5">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="text-base font-bold leading-tight pt-1">{el.title}</CardTitle>
                    <CardDescription className="text-xs leading-relaxed">{el.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center flex flex-col gap-6 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Venez visiter nos cités aménagées
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Rien ne vaut une visite sur le terrain pour apprécier le traçage de nos avenues et la qualité de nos infrastructures en cours d&apos;aménagement à Maluku ou Mont Ngafula.
        </p>
        <div className="flex justify-center gap-4">
          <Button nativeButton={false} size="lg" render={<Link href="/contact" />}>
            Planifier une visite gratuite
          </Button>
          <Button nativeButton={false} variant="outline" size="lg" render={<Link href="/projets" />}>
            Découvrir les cités en vente
          </Button>
        </div>
      </section>
    </main>
  )
}
