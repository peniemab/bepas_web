import { redirect } from "next/navigation"

import {
  nosSolutionsHref,
  nosSolutionsSectionIds,
} from "@/lib/site-config"

export default function ConstruireParcelleRedirectPage() {
  redirect(
    `${nosSolutionsHref}#${nosSolutionsSectionIds.construireParcelle}`
  )
}
