import { PartnersSection } from "@/components/home/partners-section"
import { quiSommesNousSectionIds } from "@/lib/qui-sommes-nous-content"

export function NosPartenairesSection() {
  return (
    <PartnersSection
      sectionId={quiSommesNousSectionIds.nosPartenaires}
      className="pb-20 sm:pb-24 lg:pb-28"
    />
  )
}
