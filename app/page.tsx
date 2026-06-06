import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"

import { HomeCommuneSections } from "@/components/home/home-commune-sections"
import { HeroSection } from "@/components/home/hero-section"
import { HomeIntroSection } from "@/components/home/home-intro-section"
import { NotreImpactSection } from "@/components/home/notre-impact-section"

const TestimonialsSection = dynamic(
  () =>
    import("@/components/home/testimonials-section").then(
      (mod) => mod.TestimonialsSection
    ),
  { loading: () => <div className="min-h-[28rem] scroll-mt-20" aria-hidden /> }
)

const PartnersSection = dynamic(
  () =>
    import("@/components/home/partners-section").then(
      (mod) => mod.PartnersSection
    ),
  { loading: () => <div className="min-h-48 scroll-mt-20" aria-hidden /> }
)

const ParcellesCtaSection = dynamic(
  () =>
    import("@/components/home/parcelles-cta-section").then(
      (mod) => mod.ParcellesCtaSection
    ),
  { loading: () => <div className="min-h-[32rem]" aria-hidden /> }
)

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Achetez votre parcelle à crédit à Kinshasa avec BEPAS. Terrains disponibles dans plusieurs communes, crédit souple et sécurisation foncière.",
}

function ImpactSectionFallback() {
  return (
    <section
      className="min-h-[28rem] scroll-mt-20 bg-muted/40 py-12 sm:py-16 lg:py-20"
      aria-hidden
    />
  )
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <HomeIntroSection />
      <HomeCommuneSections />
      <TestimonialsSection />
      <PartnersSection />
      <Suspense fallback={<ImpactSectionFallback />}>
        <NotreImpactSection />
      </Suspense>
      <ParcellesCtaSection />
    </main>
  )
}
