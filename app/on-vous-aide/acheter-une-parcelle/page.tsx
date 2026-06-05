import type { Metadata } from "next"

import { AcheterParcellePageContent } from "@/components/acheter-parcelle/acheter-parcelle-page-content"

export const metadata: Metadata = {
  title: "Acheter une parcelle à crédit",
  description:
    "Découvrez notre système de crédit foncier souple et sans intérêt pour devenir propriétaire à Kinshasa (Maluku, N'sele, Mont Ngafula).",
}

export default function AcheterParcellePage() {
  return (
    <main className="flex-1">
      <AcheterParcellePageContent />
    </main>
  )
}
