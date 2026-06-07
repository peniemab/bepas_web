"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function DesktopNav() {
  const [accueil, ...otherLinks] = siteConfig.mainNavLinks

  return (
    <NavigationMenu align="start">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href={accueil.href} />}
            className={cn(navigationMenuTriggerStyle(), "font-bold")}
          >
            {accueil.title}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href={siteConfig.quiSommesNousHref} />}
            className={cn(navigationMenuTriggerStyle(), "font-bold")}
          >
            {siteConfig.quiSommesNousNavLabel}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href={siteConfig.nosSolutionsHref} />}
            className={cn(navigationMenuTriggerStyle(), "font-bold")}
          >
            {siteConfig.nosSolutionsNavLabel}
          </NavigationMenuLink>
        </NavigationMenuItem>

        {otherLinks.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              render={<Link href={item.href} />}
              className={cn(navigationMenuTriggerStyle(), "font-bold")}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
