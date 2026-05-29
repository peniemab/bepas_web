import Link from "next/link"

import { DesktopNav } from "@/components/layout/desktop-nav"
import { Logo } from "@/components/layout/logo"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 supports-backdrop-filter:backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-2 px-4 py-2 sm:px-6 lg:h-16 lg:gap-4 lg:py-0 lg:px-8">
        <div className="flex w-12 shrink-0 items-center justify-start lg:hidden">
          <MobileNav />
        </div>

        <div className="flex min-w-0 flex-1 justify-center lg:hidden">
          <Logo centered />
        </div>

        <div className="hidden shrink-0 lg:block">
          <Logo />
        </div>

        <nav
          className="hidden flex-1 justify-center lg:flex"
          aria-label="Navigation principale"
        >
          <DesktopNav />
        </nav>

        <div className="flex shrink-0 items-center">
          <Button
            nativeButton={false}
            className="h-9 shrink-0 px-3 text-sm md:h-8"
            render={<Link href="/contact" />}
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </header>
  )
}
