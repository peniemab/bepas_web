import { redirect } from "next/navigation"

import {
  nosSolutionsHref,
  nosSolutionsSectionIds,
} from "@/lib/site-config"

export default function VenteParcellesSolutionRedirectPage() {
  redirect(
    `${nosSolutionsHref}#${nosSolutionsSectionIds.venteParcelles}`
  )
}
