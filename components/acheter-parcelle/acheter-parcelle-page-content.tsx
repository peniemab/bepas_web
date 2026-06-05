import { AcheterParcelleCommunes } from "@/components/acheter-parcelle/acheter-parcelle-communes"
import { AcheterParcelleFaq } from "@/components/acheter-parcelle/acheter-parcelle-faq"
import { AcheterParcelleHero } from "@/components/acheter-parcelle/acheter-parcelle-hero"
import { AcheterParcellePricing } from "@/components/acheter-parcelle/acheter-parcelle-pricing"

export function AcheterParcellePageContent() {
  return (
    <>
      <AcheterParcelleHero />
      <AcheterParcellePricing />
      <AcheterParcelleCommunes />
      <AcheterParcelleFaq />
    </>
  )
}
