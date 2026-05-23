"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { siteConfig } from "@/lib/site-config"

export function DesktopNav() {
  const [accueil, ...otherLinks] = siteConfig.mainNavLinks

  return (
    <NavigationMenu align="start">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href={accueil.href} />}
            className={navigationMenuTriggerStyle()}
          >
            {accueil.title}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Qui sommes-nous</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1 p-2">
              {siteConfig.quiSommesNousNav.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink render={<Link href={item.href} />}>
                    {item.title}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {siteConfig.nosSolutionsLabel}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1 p-2">
              {siteConfig.nosSolutionsNav.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink render={<Link href={item.href} />}>
                    {item.title}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{siteConfig.vousVoulezLabel}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1 p-2">
              {siteConfig.vousVoulezNav.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink render={<Link href={item.href} />}>
                    {item.title}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {otherLinks.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              render={<Link href={item.href} />}
              className={navigationMenuTriggerStyle()}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
