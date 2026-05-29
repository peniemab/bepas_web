import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ShieldCheckIcon, ScaleIcon, MapIcon, FileTextIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Sécurisation Foncière à Kinshasa",
  description: "Sécurisez votre achat de terrain à Kinshasa avec BEPAS. Enquêtes cadastrales, bornage physique et obtention du titre foncier officiel.",
}

export default function SecurisationFonciereSolutionPage() {
  const steps = [
    {
      icon: ScaleIcon,
      title: "1. Audit Juridique & Cadastral",
      description: "Avant d'acquérir une concession, BEPAS réalise des enquêtes approfondies auprès du Ministère des Affaires Foncières pour s'assurer de l'absence de litiges et de la validité des titres d'origine."
    },
    {
      icon: MapIcon,
      title: "2. Bornage & Topographie Officiels",
      description: "Nos géomètres experts agréés effectuent un bornage physique rigoureux. Des bornes en béton marquées et pérennes sont implantées pour fixer définitivement les limites géométriques de votre parcelle."
    },
    {
      icon: FileTextIcon,
      title: "3. Actes de Cession & Fiches Parcellaires",
      description: "Nous établissons des contrats de cession clairs et transparents, contresignés par les autorités compétentes, et vous remettons une fiche parcellaire individuelle contenant le plan officiel de votre lot."
    },
    {
      icon: ShieldCheckIcon,
      title: "4. Accompagnement vers le Titre Foncier",
      description: "Dès les conditions contractuelles remplies, notre équipe dédiée prend en charge le dépôt et le suivi administratif de votre dossier auprès du cadastre pour l'obtention de votre Certificat d'Enregistrement."
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[oklch(76.5%_0.177_163.223)] to-[oklch(50.8%_0.118_165.612)] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="w-fit rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Nos Solutions
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              La sécurisation foncière, notre priorité absolue
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              À Kinshasa, la sécurité d&apos;un investissement immobilier repose sur sa clarté juridique. BEPAS élimine les risques d&apos;empiètement ou de litige pour faire de vous un propriétaire serein.
            </p>
          </div>
        </div>
      </section>

      {/* Le constat / Enjeu */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              En finir avec les conflits fonciers
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Le double enregistrement, les expropriations arbitraires et le manque de bornage fiable sont des fléaux courants lors des transactions foncières informelles en République Démocratique du Congo.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              La SARL BEPAS s&apos;est structurée spécifiquement pour faire face à ces défis. Nos concessions font l&apos;objet d&apos;enquêtes préalables systématiques et sont entièrement protégées. Nous n&apos;achetons et ne vendons que ce qui est juridiquement inattaquable.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm max-h-[380px]">
            <Image
              src="/ctaAccueilFamille.jpg"
              alt="Investir en toute sécurité pour sa famille"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Nos Engagements de Sécurité */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Notre protocole de sécurisation en 4 étapes
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Nous gérons l&apos;ensemble du processus technique et administratif pour vous garantir une sécurité totale et définitive.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.title} className="border-border/80 shadow-xs flex flex-col h-full">
                  <CardHeader className="flex flex-col gap-3">
                    <div className="w-fit rounded-lg bg-primary/10 p-2.5">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="text-base font-bold leading-tight pt-1">{step.title}</CardTitle>
                    <CardDescription className="text-xs leading-relaxed">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Accompagnement diaspora */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-sm max-h-[380px] lg:order-last">
            <Image
              src="/BEPAS.jpg"
              alt="Bureaux BEPAS Galeries Présidentielles Gombe"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Spécialement pensé pour la Diaspora
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Beaucoup de Congolais de l&apos;étranger perdent leurs économies en confiant leurs projets fonciers à des proches. Avec BEPAS, vous traitez directement avec une personne morale structurée, enregistrée et ayant pignon sur rue à Kinshasa-Gombe.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Nous vous fournissons des rapports géomètres complets, des photos satellites de vos parcelles et des signatures certifiées sans que vous n&apos;ayez à vous déplacer.
            </p>
            <div className="pt-2">
              <Button nativeButton={false} render={<Link href="/contact" />}>
                Contacter un conseiller diaspora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
