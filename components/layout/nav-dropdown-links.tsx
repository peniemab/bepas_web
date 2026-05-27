import type { ReactNode } from "react"
import Link from "next/link"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"

export function NavDropdownLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <NavigationMenuLink render={<Link href={href} />} closeOnClick>
      {children}
    </NavigationMenuLink>
  )
}
