import type { Metadata } from "next"

import { NosSolutionsPage } from "@/components/nos-solutions/nos-solutions-page"
import { nosSolutionsPage } from "@/lib/nos-solutions-content"

export const metadata: Metadata = {
  title: nosSolutionsPage.meta.title,
  description: nosSolutionsPage.meta.description,
}

export default function Page() {
  return <NosSolutionsPage />
}
