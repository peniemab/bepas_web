import type { Metadata } from "next"

import { CtaSection } from "@/components/home/cta-section"
import { HomeCommuneSections } from "@/components/home/home-commune-sections"
import { HeroSection } from "@/components/home/hero-section"
import { HomeIntroSection } from "@/components/home/home-intro-section"
import { NotreImpactSection } from "@/components/home/notre-impact-section"
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
      <HomeIntroSection />
      <HomeCommuneSections />
      <NotreImpactSection />
      <SolutionsSection />
      <WhySection />
      <CtaSection />
    </main>
  )
}
