import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { HeartIcon, UsersIcon, TreePineIcon, CoinsIcon } from "lucide-react"

import { NotreImpactSection } from "@/components/home/notre-impact-section"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Notre Impact Social en RDC",
  description: "Découvrez notre engagement social : faciliter l'accès au logement décent en RDC, créer des emplois locaux et développer des cités structurées.",
}

export default function NotreImpactSolutionPage() {
  const impacts = [
    {
      icon: UsersIcon,
      title: "Inclusion Sociale par le Crédit",
      description: "Notre formule de crédit direct à 0% d'intérêt permet aux enseignants, fonctionnaires, petits commerçants et familles à revenus intermédiaires d'accéder à la propriété foncière, un droit fondamental souvent inaccessible."
    },
    {
      icon: CoinsIcon,
      title: "Création d'Emplois Locaux",
      description: "Chaque aménagement de cité et chaque chantier de construction de villa mobilise de nombreux artisans, maçons, géomètres, conducteurs de travaux et gardes locaux, favorisant le dynamisme économique des communes hôtes."
    },
    {
      icon: TreePineIcon,
      title: "Urbanisation Planifiée & Durable",
      description: "En créant des lotissements structurés dotés de larges voies d'accès et de forages autonomes, BEPAS lutte activement contre l'étalement urbain sauvage et insalubre à Kinshasa."
    },
    {
      icon: HeartIcon,
      title: "Accompagnement de la Diaspora",
      description: "Nous offrons une alternative saine et sécurisée aux investissements de la diaspora, en leur garantissant que chaque dollar investi se traduit par un patrimoine foncier réel, vérifié et enregistré légalement au pays."
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[oklch(50.8%_0.118_165.612)] to-[oklch(54%_0.158_242)] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="w-fit rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Notre Impact
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Au-delà de l&apos;immobilier, un impact durable
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              La SARL BEPAS est née d&apos;une conviction profonde : la propriété foncière sécurisée est le premier pas vers l&apos;indépendance financière et la stabilité des familles congolaises.
            </p>
          </div>
        </div>
      </section>

      <NotreImpactSection />

      {/* Vision fondatrice */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Lopango pona moto nyonso — Un toit pour tous
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Fondé en 2021 par M. Patrick Kapinga Kazadi, le Bureau d&apos;Étude des Projets d&apos;Afrique Société (BEPAS) s&apos;est donné pour mission de démocratiser l&apos;accès à la terre.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Dans un contexte kinois caractérisé par des coûts de loyers prohibitifs et des prix fonciers spéculatifs, nous croyons qu&apos;offrir des parcelles à des tarifs étudiés et avec des crédits sans intérêt est un acte de justice sociale indispensable au développement harmonieux du pays.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm max-h-[380px]">
            <Image
              src="/ctaAccueilFamille.jpg"
              alt="Développement durable et inclusion sociale en RDC"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Nos Domaines d'impact */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Comment nous faisons bouger les lignes
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Notre activité quotidienne concilie rigueur économique, développement social et respect de l&apos;environnement.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impacts.map((imp) => {
              const Icon = imp.icon
              return (
                <Card key={imp.title} className="border-border/80 shadow-xs flex flex-col h-full">
                  <CardHeader className="flex flex-col gap-3">
                    <div className="w-fit rounded-lg bg-primary/10 p-2.5">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="text-base font-bold leading-tight pt-1">{imp.title}</CardTitle>
                    <CardDescription className="text-xs leading-relaxed">{imp.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section citation / final */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center flex flex-col gap-6 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Construisez l&apos;avenir à nos côtés
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
          En faisant confiance à la SARL BEPAS, vous sécurisez non seulement votre patrimoine personnel, mais vous participez activement à la construction d&apos;un Kinshasa plus structuré, plus moderne et plus solidaire.
        </p>
        <div className="flex justify-center gap-4">
          <Button nativeButton={false} size="lg" render={<Link href="/contact" />}>
            Prendre contact avec nos équipes
          </Button>
          <Button nativeButton={false} variant="outline" size="lg" render={<Link href="/qui-sommes-nous" />}>
            Découvrir notre histoire
          </Button>
        </div>
      </section>
    </main>
  )
}
