import { SitesCTASection } from "@/components/qui-sommes-nous/sites-cta-section"
import { NosBureauxSection } from "@/components/qui-sommes-nous/nos-bureaux-section"
import { NosEquipesSection } from "@/components/qui-sommes-nous/nos-equipes-section"
import { NosPartenairesSection } from "@/components/qui-sommes-nous/nos-partenaires-section"
import { NotreHistoireSection } from "@/components/qui-sommes-nous/notre-histoire-section"

export function QuiSommesNousPage() {
  return (
    <main className="flex flex-1 flex-col">
      <NotreHistoireSection />
        <SitesCTASection />
      <NosBureauxSection />
      <NosEquipesSection />
      <NosPartenairesSection />
    </main>
  )
}
