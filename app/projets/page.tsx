import type { Metadata } from "next"
import { Suspense } from "react"

import { ProjetsHeroParallax } from "@/components/projets/projets-hero-parallax"
import { ProjetsHubContent } from "@/components/projets/projets-hub-content"
import { projetsPage } from "@/lib/projets-content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Projets et cités BEPAS à Kinshasa — Maluku, N'sele, Mont Ngafula",
  description:
    "Découvrez nos cités et lotissements structurés à Kinshasa : Maluku, Mont Ngafula et N'sele. Parcelles viabilisées, sécurisées et prêtes à bâtir.",
  path: "/projets",
  image: projetsPage.hero.image.src,
})

export default function ProjetsPage() {
  const { title, subtitle, image, breadcrumb } = projetsPage.hero

  return (
    <main className="flex-1">
      <ProjetsHeroParallax
        title={title}
        subtitle={subtitle}
        image={image}
        breadcrumb={breadcrumb}
      />
      <Suspense fallback={null}>
        <ProjetsHubContent />
      </Suspense>
    </main>
  )
}
