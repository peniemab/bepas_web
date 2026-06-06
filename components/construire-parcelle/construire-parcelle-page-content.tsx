import { ConstruireParcelleBenefits } from "@/components/construire-parcelle/construire-parcelle-benefits"
import { ConstruireParcelleCta } from "@/components/construire-parcelle/construire-parcelle-cta"
import { ConstruireParcelleFaq } from "@/components/construire-parcelle/construire-parcelle-faq"
import { ConstruireParcelleGallery } from "@/components/construire-parcelle/construire-parcelle-gallery"
import { ConstruireParcelleHero } from "@/components/construire-parcelle/construire-parcelle-hero"
import { ConstruireParcelleIntro } from "@/components/construire-parcelle/construire-parcelle-intro"
import { ConstruireParcelleModels } from "@/components/construire-parcelle/construire-parcelle-models"
import { ConstruireParcelleProcess } from "@/components/construire-parcelle/construire-parcelle-process"

export function ConstruireParcellePageContent() {
  return (
    <>
      <ConstruireParcelleHero />
      <ConstruireParcelleIntro />
      <ConstruireParcelleBenefits />
      <ConstruireParcelleModels />
      <ConstruireParcelleGallery />
      <ConstruireParcelleProcess />
      <ConstruireParcelleFaq />
      <ConstruireParcelleCta />
    </>
  )
}
