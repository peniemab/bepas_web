import type { Metadata } from "next"
import { Suspense } from "react"

import { ProjetsHeroParallax } from "@/components/projets/projets-hero-parallax"
import { ProjetsHubContent } from "@/components/projets/projets-hub-content"
import { projetsPage } from "@/lib/projets-content"

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez nos cités et lotissements structurés à Kinshasa : Maluku, Mont Ngafula et N'sele. Parcelles viabilisées, sécurisées et prêtes à bâtir.",
}

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
