import { redirect } from "next/navigation"

import {
  nosSolutionsHref,
  nosSolutionsSectionIds,
} from "@/lib/site-config"

export default function AcheterParcelleRedirectPage() {
  redirect(
    `${nosSolutionsHref}#${nosSolutionsSectionIds.venteParcelles}`
  )
}
