import type { Metadata } from "next"

import { NosSolutionsPage } from "@/components/nos-solutions/nos-solutions-page"
import { nosSolutionsPage } from "@/lib/nos-solutions-content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Vente de parcelles et construction à crédit — BEPAS SARL",
  description: nosSolutionsPage.meta.description,
  path: "/nos-solutions",
  image: nosSolutionsPage.hero.image.src,
})

export default function Page() {
  return <NosSolutionsPage />
}
