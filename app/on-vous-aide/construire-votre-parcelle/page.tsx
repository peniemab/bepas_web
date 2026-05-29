import type { Metadata } from "next"
import Link from "next/link"
import { CheckIcon, HomeIcon, HammerIcon, DropletsIcon, HardHatIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Construire votre parcelle",
  description: "Découvrez notre formule de construction à crédit sur 0 à 5 ans. BEPAS vous aide à bâtir la maison de vos rêves à Kinshasa.",
}

export default function ConstruireParcellePage() {
  const models = [
    {
      name: "Modèle ELIKYA (Espoir)",
      type: "F3 — Idéal jeune couple ou investisseur",
      specs: "Superficie : 85 m² | Recommandé pour terrain 15m x 20m",
      description: "Une maison moderne et optimisée au maximum, alliant confort et économie. Parfaite pour un premier projet de construction.",
      rooms: ["2 Chambres lumineuses", "1 Salon convivial", "1 Cuisine fermée", "1 Salle de bain moderne", "1 Véranda"]
    },
    {
      name: "Modèle KIMIA (Paix)",
      type: "F4 — Idéal pour les familles",
      specs: "Superficie : 120 m² | Recommandé pour terrain 20m x 20m",
      description: "Une superbe villa familiale offrant de beaux volumes et une excellente répartition des pièces pour préserver l'intimité de chacun.",
      rooms: ["3 Chambres (dont 1 suite parentale)", "1 Grand Salon avec salle à manger", "1 Cuisine avec garde-manger", "2 Salles de bain équipées", "Terrasse couverte"]
    },
    {
      name: "Modèle KEMBO (Gloire)",
      type: "F5 — Villa Premium spacieuse",
      specs: "Superficie : 160 m² | Recommandé pour terrain 20m x 20m",
      description: "Le summum du confort BEPAS. Une villa d'architecte contemporaine dotée de finitions haut de gamme pour une qualité de vie incomparable.",
      rooms: ["4 Chambres spacieuses", "1 Double séjour lumineux", "1 Cuisine américaine avec îlot", "3 Salles de bain", "Grandes terrasses avant/arrière", "Espace de stationnement intégré"]
    }
  ]

  const phases = [
    {
      icon: HomeIcon,
      title: "1. Conception & Plans",
      description: "Sélectionnez l'un de nos modèles types (Elikya, Kimia, Kembo) ou apportez vos propres plans. Notre bureau d'études adapte l'architecture à la topographie de votre terrain."
    },
    {
      icon: DropletsIcon,
      title: "2. Viabilisation & Forage",
      description: "Avant de bâtir, nous viabilisons le site : traçage des accès et forage d'eau sur place pour assurer l'approvisionnement du chantier en eau potable et électricité temporaire."
    },
    {
      icon: HardHatIcon,
      title: "3. Gros Œuvre sécurisé",
      description: "Nos équipes d'ingénieurs et de maçons réalisent les fondations renforcées, l'élévation des murs en blocs de béton vibrés de haute qualité et la pose de la toiture."
    },
    {
      icon: HammerIcon,
      title: "4. Second Œuvre & Finitions",
      description: "Plomberie, électricité aux normes, pose des revêtements de sol (carrelage), enduits, peintures et installation des sanitaires. Vous recevez les clés d'une maison clé en main."
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[oklch(76.5%_0.177_163.223)] to-[oklch(59.6%_0.145_163.223)] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="w-fit rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              On vous aide
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Construisez votre maison à crédit sur 5 ans.
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Ne remettez plus votre rêve à demain. Grâce à l&apos;offre de construction à crédit de la SARL BEPAS, commencez à bâtir sur votre parcelle et étalez vos paiements jusqu&apos;à 60 mois.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages de construire avec BEPAS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 shadow-xs">
            <span className="text-2xl font-bold text-primary">0% - 5 Ans</span>
            <h3 className="font-semibold text-foreground">Crédit Direct Longue Durée</h3>
            <p className="text-sm text-muted-foreground">Une formule unique à Kinshasa pour étaler le financement de vos travaux de 1 à 5 ans.</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 shadow-xs">
            <span className="text-2xl font-bold text-primary">Clé en Main</span>
            <h3 className="font-semibold text-foreground">Prise en charge intégrale</h3>
            <p className="text-sm text-muted-foreground">Du terrassement aux dernières finitions de peinture, nous gérons l&apos;ensemble du chantier.</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 shadow-xs">
            <span className="text-2xl font-bold text-primary">Qualité RDC</span>
            <h3 className="font-semibold text-foreground">Matériaux certifiés</h3>
            <p className="text-sm text-muted-foreground">Utilisation de béton vibré, de charpentes renforcées et de finitions sélectionnées avec rigueur.</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 shadow-xs">
            <span className="text-2xl font-bold text-primary">Forage inclus</span>
            <h3 className="font-semibold text-foreground">Autonomie en eau</h3>
            <p className="text-sm text-muted-foreground">Chaque construction inclut la possibilité d&apos;installer un forage et un système de pompage d&apos;eau autonome.</p>
          </div>
        </div>
      </section>

      {/* Catalogue de modèles */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Nos Modèles de Maisons Types
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Découvrez des modèles de villas pensés pour offrir un confort de vie optimal tout en maximisant l&apos;utilisation de votre parcelle.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {models.map((model) => (
              <Card key={model.name} className="flex flex-col border-border/80 shadow-sm h-full">
                <CardHeader className="pb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">{model.type}</span>
                  <CardTitle className="text-lg font-bold pt-1">{model.name}</CardTitle>
                  <CardDescription className="text-xs font-medium pt-0.5">{model.specs}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-5 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {model.description}
                  </p>
                  <div className="mt-auto border-t border-border/50 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2.5">Composition de la maison :</p>
                    <ul className="flex flex-col gap-1.5 text-xs text-foreground/80">
                      {model.rooms.map((room) => (
                        <li key={room} className="flex items-center gap-1.5">
                          <CheckIcon className="size-4 shrink-0 text-primary" />
                          <span>{room}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Le Déroulement du Chantier */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex max-w-2xl flex-col gap-3">
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            Le processus de construction BEPAS
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            De la table à dessin à la livraison des clés, découvrez comment notre équipe d&apos;ingénieurs et de techniciens donne vie à votre projet.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => {
            const Icon = phase.icon
            return (
              <div key={phase.title} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-xs">
                <div className="w-fit rounded-lg bg-primary/10 p-2.5">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-base leading-snug">{phase.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{phase.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-gradient-to-b from-transparent to-muted/20 py-16 sm:py-20 border-t border-border/40">
        <div className="mx-auto max-w-3xl px-4 text-center flex flex-col gap-6 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Discutons de votre projet de construction
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Que vous ayez déjà acquis une parcelle BEPAS ou que vous souhaitiez un pack complet &quot;Terrain + Construction&quot;, notre bureau d&apos;études vous propose une étude de faisabilité et un devis personnalisé gratuits.
          </p>
          <div className="flex justify-center gap-4">
            <Button nativeButton={false} size="lg" render={<Link href="/contact" />}>
              Demander une étude gratuite
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
