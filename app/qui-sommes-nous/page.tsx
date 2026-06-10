import type { Metadata } from "next"

import { QuiSommesNousPage } from "@/components/qui-sommes-nous/qui-sommes-nous-page"
import { quiSommesNousPage } from "@/lib/qui-sommes-nous-content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Qui sommes-nous — BEPAS SARL, Bureau d'Etude des Projets d'Afrique",
  description: quiSommesNousPage.meta.description,
  path: "/qui-sommes-nous",
  image: "/BEPAS.jpg",
})

export default function Page() {
  return <QuiSommesNousPage />
}
