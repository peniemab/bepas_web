"use client"

import { useState } from "react"
import Link from "next/link"

import { NavDropdownLink } from "@/components/layout/nav-dropdown-links"
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
import { cn } from "@/lib/utils"

export function DesktopNav() {
  const [accueil, ...otherLinks] = siteConfig.mainNavLinks
  const [menuValue, setMenuValue] = useState<string | null>(null)

  return (
    <NavigationMenu
      align="start"
      value={menuValue}
      onValueChange={(value) => setMenuValue(value)}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href={accueil.href} />}
            className={cn(navigationMenuTriggerStyle(), "font-bold")}
          >
            {accueil.title}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem value="qui-sommes-nous">
          <NavigationMenuTrigger className="font-bold">
            {siteConfig.quiSommesNousNavLabel}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1 p-2">
              {siteConfig.quiSommesNousDropdownNav.map((item) => (
                <li key={item.href}>
                  <NavDropdownLink href={item.href}>{item.title}</NavDropdownLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="nos-solutions">
          <NavigationMenuTrigger className="font-bold">
            {siteConfig.nosSolutionsNavLabel}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1 p-2">
              {siteConfig.nosSolutionsNav.map((item) => (
                <li key={item.href}>
                  <NavDropdownLink href={item.href}>{item.title}</NavDropdownLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="vous-voulez">
          <NavigationMenuTrigger className="font-bold">
            {siteConfig.vousVoulezNavLabel}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1 p-2">
              {siteConfig.vousVoulezNav.map((item) => (
                <li key={item.href}>
                  <NavDropdownLink href={item.href}>{item.title}</NavDropdownLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
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
