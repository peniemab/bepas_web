import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, UserIcon, ArrowRightIcon, RssIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Actualités & Blog",
  description: "Suivez le développement de nos cités, l'inauguration des infrastructures et découvrez nos conseils d'acquisition foncière à Kinshasa.",
}

const articles = [
  {
    slug: "inauguration-forage-maluku",
    title: "Inauguration du forage d'eau potable à Maluku (Cité Exploit 3)",
    date: "15 Mai 2026",
    tag: "Infrastructures",
    author: "Service Technique BEPAS",
    summary: "Dans le cadre de son engagement pour la viabilisation de ses concessions, BEPAS SARL a finalisé et inauguré le nouveau système de forage autonome en eau potable au cœur de la Cité Exploit 3 à Menkao.",
    image: "/heroAccueil10.jpg"
  },
  {
    slug: "remise-fiches-parcellaires-avril",
    title: "Cérémonie officielle de remise de fiches parcellaires aux Galeries Présidentielles",
    date: "28 Avril 2026",
    tag: "Événements",
    author: "Service Communication",
    summary: "Une nouvelle vague d'acquéreurs ayant finalisé leur plan de paiement échelonné a reçu officiellement leurs fiches parcellaires et procès-verbaux de bornage physique lors de notre rencontre mensuelle à Kinshasa-Gombe.",
    image: "/BEPAS.jpg"
  },
  {
    slug: "guide-achat-diaspora-securise",
    title: "Diaspora Congolaise : Comment acheter un terrain à Kinshasa en toute sécurité ?",
    date: "10 Avril 2026",
    tag: "Conseils",
    author: "Dr. Patrick Kapinga (PCA)",
    summary: "Investir au pays est le souhait de nombreux Congolais résidant à l'étranger. Découvrez notre protocole complet et transparent pour acquérir, suivre et titrer votre parcelle en toute sérénité depuis votre pays de résidence.",
    image: "/ctaAccueilFamille.jpg"
  }
]

export default function ActualitesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[oklch(58.8%_0.158_241.966)] to-[oklch(50.8%_0.118_165.612)] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="w-fit rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Blog & Actu
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              L&apos;actualité foncière de BEPAS
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Suivez au jour le jour l&apos;évolution de nos concessions, l&apos;aménagement de nos voies d&apos;accès et restez informé de la législation immobilière en RDC.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((art) => (
            <Card key={art.slug} className="flex flex-col h-full border-border/70 shadow-sm overflow-hidden group">
              {/* Image d'illustration */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-sm">
                  {art.tag}
                </span>
              </div>

              <CardHeader className="flex flex-col gap-2 pb-3">
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="size-3.5" />
                    {art.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <UserIcon className="size-3.5" />
                    {art.author}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold leading-snug pt-1 group-hover:text-primary transition-colors">
                  {art.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-4 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {art.summary}
                </p>
                <div className="mt-auto pt-4 border-t border-border/40">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary">
                    Lire l&apos;article complet
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter / Stay updated */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center flex flex-col gap-6 sm:px-6">
          <RssIcon className="size-10 text-primary mx-auto" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Restez informé de nos futurs lotissements
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Nous préparons de nouvelles concessions à crédit dans des zones à très forte valorisation. Ne manquez pas l&apos;ouverture des réservations !
          </p>
          <div className="flex justify-center gap-4">
            <Button nativeButton={false} size="lg" render={<Link href="/contact?subject=Inscription%20Newsletter" />}>
              S&apos;abonner aux alertes parcelles
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
