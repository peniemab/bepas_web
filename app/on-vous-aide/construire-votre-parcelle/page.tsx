import type { Metadata } from "next"

import { ConstruireParcellePageContent } from "@/components/construire-parcelle/construire-parcelle-page-content"

export const metadata: Metadata = {
  title: "Construire votre parcelle",
  description:
    "Construction à crédit sur 0 à 5 ans avec BEPAS. Modèles Elikya, Kimia et Kembo, accompagnement clé en main à Kinshasa.",
}

export default function ConstruireParcellePage() {
  return (
    <main className="flex-1">
      <ConstruireParcellePageContent />
    </main>
  )
}
