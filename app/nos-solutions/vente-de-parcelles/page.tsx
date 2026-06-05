import type { Metadata } from "next"

import { AcheterParcellePageContent } from "@/components/acheter-parcelle/acheter-parcelle-page-content"

export const metadata: Metadata = {
  title: "Vente de parcelles à Kinshasa",
  description:
    "Tarifs, financement à 0 % et parcelles viabilisées à Maluku, N'sele et Mont Ngafula. Crédit direct BEPAS, acompte accessible et paiement en 24 mois.",
}

export default function VenteParcellesSolutionPage() {
  return (
    <main className="flex-1">
      <AcheterParcellePageContent />
    </main>
  )
}
