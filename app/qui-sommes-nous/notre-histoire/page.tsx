import { redirect } from "next/navigation"

import { quiSommesNousHref, quiSommesNousSectionIds } from "@/lib/site-config"

export default function Page() {
  redirect(`${quiSommesNousHref}#${quiSommesNousSectionIds.notreHistoire}`)
}
