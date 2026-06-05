import type { Metadata } from "next"

import { HomeCommuneSections } from "@/components/home/home-commune-sections"
import { HeroSection } from "@/components/home/hero-section"
import { HomeIntroSection } from "@/components/home/home-intro-section"
import { NotreImpactSection } from "@/components/home/notre-impact-section"
import { PartnersSection } from "@/components/home/partners-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ParcellesCtaSection } from "@/components/home/parcelles-cta-section"

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
      <TestimonialsSection />
      <PartnersSection />
      <NotreImpactSection />
      <ParcellesCtaSection />
    </main>
  )
}
