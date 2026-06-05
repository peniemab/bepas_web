import type { Metadata } from "next"

import { AcheterParcelleCommunes } from "@/components/acheter-parcelle/acheter-parcelle-communes"
import { AcheterParcelleFaq } from "@/components/acheter-parcelle/acheter-parcelle-faq"
import { AcheterParcelleHero } from "@/components/acheter-parcelle/acheter-parcelle-hero"
import { AcheterParcellePricing } from "@/components/acheter-parcelle/acheter-parcelle-pricing"

export const metadata: Metadata = {
  title: "Acheter une parcelle à crédit",
  description:
    "Découvrez notre système de crédit foncier souple et sans intérêt pour devenir propriétaire à Kinshasa (Maluku, N'sele, Mont Ngafula).",
}

export default function AcheterParcellePage() {
  return (
    <main className="flex-1">
      <AcheterParcelleHero />
      <AcheterParcellePricing />
      <AcheterParcelleCommunes />
      <AcheterParcelleFaq />
    </main>
  )
}
