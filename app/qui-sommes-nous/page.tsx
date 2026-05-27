import type { Metadata } from "next"

import { QuiSommesNousPage } from "@/components/qui-sommes-nous/qui-sommes-nous-page"
import { quiSommesNousPage } from "@/lib/qui-sommes-nous-content"

export const metadata: Metadata = {
  title: quiSommesNousPage.meta.title,
  description: quiSommesNousPage.meta.description,
}

export default function Page() {
  return <QuiSommesNousPage />
}
