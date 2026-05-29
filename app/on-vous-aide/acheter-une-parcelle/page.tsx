import type { Metadata } from "next"
import Link from "next/link"
import { CheckIcon, CalendarIcon, ShieldCheckIcon, LandmarkIcon, MapPinIcon, HelpCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Acheter une parcelle à crédit",
  description: "Découvrez notre système de crédit foncier souple et sans intérêt pour devenir propriétaire à Kinshasa (Maluku, N'sele, Mont Ngafula).",
}

export default function AcheterParcellePage() {
  const steps = [
    {
      number: "01",
      title: "Choix du terrain et Visite guidée",
      description: "Choisissez votre commune idéale (Maluku, N'sele, ou Mont Ngafula). Nos conseillers vous accompagnent gratuitement sur le terrain pour apprécier l'emplacement, les dimensions et l'accessibilité."
    },
    {
      number: "02",
      title: "Signature du contrat aux bureaux",
      description: "Rendez-vous à nos bureaux aux Galeries Présidentielles (Gombe, Kinshasa) ou finalisez le contrat à distance si vous résidez à l'étranger. Le contrat définit clairement les mensualités et les dimensions."
    },
    {
      number: "03",
      title: "Versement de l'acompte initial",
      description: "Le paiement de l'acompte valide votre réservation et bloque la parcelle. Cet apport initial est adapté à votre budget pour vous permettre de lancer votre projet sereinement."
    },
    {
      number: "04",
      title: "Mensualités souples (12 à 24 mois)",
      description: "Réglez le solde restant à votre rythme par virements ou dépôts mensuels sur une période de 12 à 24 mois. Notre crédit est direct et à 0% d'intérêt (sans intermédiaire bancaire)."
    },
    {
      number: "05",
      title: "Bornage physique et Titrage foncier",
      description: "Dès la fin de l'échelonnement (ou selon les clauses contractuelles), nos géomètres réalisent le bornage physique de votre terrain. BEPAS se charge d'introduire et de suivre le dossier d'obtention de votre titre foncier officiel."
    }
  ]

  const simulations = [
    {
      title: "Maluku — Cité Exploit 3",
      lead: "Investissement d'avenir à Menkao",
      sizes: "Parcelles 20m x 20m ou 15m x 20m",
      terms: "Échelonnement sur 12 à 24 mois",
      features: ["Forage d'eau à proximité", "Route nationale n°1 accessible", "Zone en fort développement"]
    },
    {
      title: "Mont Ngafula — Cité Exploit 2",
      lead: "Quartier Kimwenza (Avenue IBIMI)",
      sizes: "Parcelles 20m x 20m",
      terms: "Plan de financement personnalisé",
      features: ["Cadre vert et paisible", "Proche des commodités de Kimwenza", "Titrage foncier garanti"]
    },
    {
      title: "Maluku — Cité C'Possible",
      lead: "Terrains résidentiels Menkao",
      sizes: "Parcelles adaptées aux familles",
      terms: "Crédit direct à 0% d'intérêt",
      features: ["Bornage et traçage effectués", "Idéal pour résidence ou retraite", "Accompagnement complet"]
    }
  ]

  const faqs = [
    {
      question: "Le crédit proposé par BEPAS comporte-t-il des intérêts bancaires ?",
      answer: "Non, absolument aucun. BEPAS propose un crédit direct de particulier à particulier, sans intermédiaire financier. Le taux d'intérêt est de 0%. Le prix convenu au départ reste le même jusqu'à la fin de vos remboursements."
    },
    {
      question: "Comment se déroulent les visites des parcelles ?",
      answer: "Les visites sur site sont organisées régulièrement et entièrement prises en charge par nos conseillers. Il vous suffit de nous contacter pour réserver votre place. Nous partons ensemble de nos bureaux situés aux Galeries Présidentielles à Gombe."
    },
    {
      question: "Je fais partie de la diaspora (Congolais de l'étranger), puis-je acheter ?",
      answer: "Oui, tout à fait. Une grande partie de notre clientèle réside à l'étranger (Europe, Amérique, Asie). Nous avons mis en place une procédure d'acquisition sécurisée à distance avec signature électronique, suivi photo/vidéo des parcelles et modalités de paiement adaptées (transferts ou virements)."
    },
    {
      question: "Quels sont les documents remis à la fin du paiement ?",
      answer: "À l'issue des paiements, nos géomètres effectuent le bornage physique officiel sur le site. Vous recevez votre fiche parcellaire, le contrat de cession définitif et BEPAS se charge d'entamer les démarches administratives officielles auprès des affaires foncières pour l'établissement du certificat d'enregistrement (titre foncier) en votre nom."
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[oklch(65%_0.14_165.612)] to-[oklch(50.8%_0.118_165.612)] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="w-fit rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              On vous aide
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Devenir propriétaire à Kinshasa, à votre rythme.
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              BEPAS réinvente l&apos;achat foncier en République Démocratique du Congo grâce à un système de crédit direct à taux 0%, souple et accessible à toutes les bourses.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages clés */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <Card className="border-border/60 bg-card">
            <CardHeader className="flex flex-col gap-2">
              <CalendarIcon className="size-8 text-primary" />
              <CardTitle className="text-lg font-medium">Crédit Échelonné</CardTitle>
              <CardDescription>
                Payez tranquillement sur une durée de 12 à 24 mois sans aucune pression financière.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-border/60 bg-card">
            <CardHeader className="flex flex-col gap-2">
              <LandmarkIcon className="size-8 text-primary" />
              <CardTitle className="text-lg font-medium">Taux d&apos;Intérêt à 0%</CardTitle>
              <CardDescription>
                Pas de banque, pas d&apos;intérêts cachés. Le prix fixé au début reste le même jusqu&apos;à la fin.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-border/60 bg-card">
            <CardHeader className="flex flex-col gap-2">
              <ShieldCheckIcon className="size-8 text-primary" />
              <CardTitle className="text-lg font-medium">Sécurisation Garantie</CardTitle>
              <CardDescription>
                Nous gérons le bornage physique et le suivi administratif jusqu&apos;à l&apos;obtention de votre titre foncier.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Les Étapes du Processus */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Les 5 étapes pour acquérir votre parcelle
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Un processus transparent et sécurisé conçu pour vous accompagner pas à pas, de la première visite à la remise de votre titre.
            </p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-5 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                <span className="text-4xl font-extrabold text-primary/15">{step.number}</span>
                <h3 className="font-medium text-foreground text-base leading-tight">{step.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Cités phares en vedette */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex max-w-2xl flex-col gap-3">
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            Exemples de parcelles disponibles
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Découvrez nos concessions structurées et viabilisées dans les zones à forte valorisation de Kinshasa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {simulations.map((sim) => (
            <Card key={sim.title} className="flex flex-col h-full border-border/80 shadow-sm">
              <CardHeader className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
                  <MapPinIcon className="size-3.5 text-primary" />
                  {sim.lead}
                </div>
                <CardTitle className="text-lg font-medium pt-1">{sim.title}</CardTitle>
                <CardDescription className="text-xs">{sim.sizes}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 pt-0">
                <p className="text-sm font-bold text-primary bg-muted/65 rounded-lg px-3 py-2 w-fit">
                  {sim.terms}
                </p>
                <ul className="flex flex-col gap-2 mt-auto text-xs sm:text-sm text-foreground/85">
                  {sim.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5">
                      <CheckIcon className="size-4 shrink-0 text-primary mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/20 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10 text-center flex flex-col gap-3 items-center">
            <HelpCircleIcon className="size-10 text-primary" />
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Questions Fréquentes
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-lg">
              Tout ce que vous devez savoir pour investir en toute sérénité avec la SARL BEPAS.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs">
                <h3 className="font-medium text-foreground text-base mb-2">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="bg-gradient-to-b from-transparent to-muted/20 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center flex flex-col gap-6 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Prêt à planifier votre visite ou à souscrire ?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Notre équipe commerciale aux Galeries Présidentielles est prête à vous conseiller et à adapter nos plans d&apos;échelonnement à vos possibilités.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button nativeButton={false} size="lg" render={<Link href="/contact" />}>
              Nous contacter
            </Button>
            <Button
              nativeButton={false}
              size="lg"
              className="border-transparent bg-gradient-to-r from-[oklch(65%_0.14_165.612)] to-[oklch(50.8%_0.118_165.612)] text-white hover:brightness-[0.92]"
              render={<Link href="/projets" />}
            >
              Découvrir les cités
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
