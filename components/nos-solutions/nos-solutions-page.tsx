import { AcheterParcelleCommunes } from "@/components/acheter-parcelle/acheter-parcelle-communes"
import { AcheterParcelleFaq } from "@/components/acheter-parcelle/acheter-parcelle-faq"
import { AcheterParcellePricing } from "@/components/acheter-parcelle/acheter-parcelle-pricing"
import { ConstruireParcelleBenefits } from "@/components/construire-parcelle/construire-parcelle-benefits"
import { ConstruireParcelleCta } from "@/components/construire-parcelle/construire-parcelle-cta"
import { ConstruireParcelleFaq } from "@/components/construire-parcelle/construire-parcelle-faq"
import { ConstruireParcelleGallery } from "@/components/construire-parcelle/construire-parcelle-gallery"
import { ConstruireParcelleIntro } from "@/components/construire-parcelle/construire-parcelle-intro"
import { ConstruireParcelleModels } from "@/components/construire-parcelle/construire-parcelle-models"
import { ConstruireParcelleProcess } from "@/components/construire-parcelle/construire-parcelle-process"
import { NosSolutionsHero } from "@/components/nos-solutions/nos-solutions-hero"
import { nosSolutionsSectionIds } from "@/lib/site-config"

export function NosSolutionsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <NosSolutionsHero />

      <section
        id={nosSolutionsSectionIds.venteParcelles}
        className="w-full scroll-mt-20"
        aria-labelledby={`${nosSolutionsSectionIds.venteParcelles}-title`}
      >
        <h2
          id={`${nosSolutionsSectionIds.venteParcelles}-title`}
          className="sr-only"
        >
          Vente de parcelles
        </h2>
        <AcheterParcellePricing />
        <AcheterParcelleCommunes />
        <AcheterParcelleFaq />
      </section>

      <section
        id={nosSolutionsSectionIds.construireParcelle}
        className="w-full scroll-mt-20"
        aria-labelledby={`${nosSolutionsSectionIds.construireParcelle}-title`}
      >
        <h2
          id={`${nosSolutionsSectionIds.construireParcelle}-title`}
          className="sr-only"
        >
          Construire votre parcelle
        </h2>
        <ConstruireParcelleIntro embedded />
        <ConstruireParcelleBenefits />
        <ConstruireParcelleModels />
        <ConstruireParcelleGallery />
        <ConstruireParcelleProcess />
        <ConstruireParcelleFaq />
        <ConstruireParcelleCta />
      </section>
    </main>
  )
}
