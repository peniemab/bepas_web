import type { Metadata } from "next"

import { CtaSection } from "@/components/home/cta-section"
import { HeroSection } from "@/components/home/hero-section"
import { SolutionsSection } from "@/components/home/solutions-section"
import { WhySection } from "@/components/home/why-section"

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Achetez votre parcelle à crédit à Kinshasa avec BEPAS. Terrains disponibles dans plusieurs communes, crédit souple et sécurisation foncière.",
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <SolutionsSection />
      <WhySection />
      <CtaSection />
    </main>
  )
}
