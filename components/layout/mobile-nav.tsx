"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRightIcon, MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const menuLine = "border-foreground/30"

function MobileNavRow({ children }: { children: React.ReactNode }) {
  return <div className={cn("border-b", menuLine)}>{children}</div>
}

function MobileNavLink({
  href,
  onNavigate,
  children,
  className,
  variant = "ghost",
}: {
  href: string
  onNavigate: () => void
  children: React.ReactNode
  className?: string
  variant?: "ghost" | "default"
}) {
  return (
    <Button
      nativeButton={false}
      variant={variant}
      className={cn("h-auto w-full rounded-none py-3.5", className)}
      render={<Link href={href} onClick={onNavigate} />}
    >
      {children}
    </Button>
  )
}

function MobileNavGroup({
  title,
  links,
  onNavigate,
}: {
  title: string
  links: ReadonlyArray<{ title: string; href: string }>
  onNavigate: () => void
}) {
  const [open, setOpen] = useState(false)

  const handleNavigate = () => {
    setOpen(false)
    onNavigate()
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger
        render={
          <Button
            variant="ghost"
            className="group h-auto w-full justify-between rounded-none px-2.5 py-3.5 text-base font-bold"
          />
        }
      >
        {title}
        <ChevronRightIcon
          className={cn(
            "text-muted-foreground transition-transform duration-300 ease-out",
            "group-data-panel-open:rotate-90"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn("flex flex-col border-t", menuLine, "divide-y", menuLine)}
      >
        {links.map((item) => (
          <MobileNavLink
            key={item.href}
            href={item.href}
            onNavigate={handleNavigate}
            className="justify-start py-3 pl-5 text-sm"
          >
            {item.title}
          </MobileNavLink>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon-lg"
            className="border-border text-foreground hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground lg:hidden"
          />
        }
      >
        <MenuIcon className="size-7" strokeWidth={2.25} />
        <span className="sr-only">Ouvrir le menu</span>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="data-[side=left]:inset-0 data-[side=left]:h-dvh data-[side=left]:w-screen data-[side=left]:max-w-none sm:data-[side=left]:max-w-none border-r-0 transition duration-500 ease-out data-[side=left]:data-starting-style:-translate-x-full data-[side=left]:data-ending-style:-translate-x-full"
      >
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav
          className={cn("flex flex-col border-t px-4", menuLine)}
          aria-label="Navigation mobile"
        >
          <MobileNavRow>
            <MobileNavLink
              href={siteConfig.mainNavLinks[0].href}
              onNavigate={closeMenu}
              className="justify-start px-2.5 text-base font-bold"
            >
              {siteConfig.mainNavLinks[0].title}
            </MobileNavLink>
          </MobileNavRow>

          <MobileNavRow>
            <MobileNavGroup
              title={siteConfig.quiSommesNousNavLabel}
              links={siteConfig.quiSommesNousDropdownNav}
              onNavigate={closeMenu}
            />
          </MobileNavRow>

          <MobileNavRow>
            <MobileNavGroup
              title={siteConfig.nosSolutionsNavLabel}
              links={siteConfig.nosSolutionsNav}
              onNavigate={closeMenu}
            />
          </MobileNavRow>

          <MobileNavRow>
            <MobileNavGroup
              title={siteConfig.vousVoulezNavLabel}
              links={siteConfig.vousVoulezNav}
              onNavigate={closeMenu}
            />
          </MobileNavRow>

          {siteConfig.mainNavLinks.slice(1).map((item) => (
            <MobileNavRow key={item.href}>
              <MobileNavLink
                href={item.href}
                onNavigate={closeMenu}
                className="justify-start px-2.5 text-base font-bold"
              >
                {item.title}
              </MobileNavLink>
            </MobileNavRow>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
