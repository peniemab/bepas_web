import Link from "next/link"

import { Button } from "@/components/ui/button"
import { acheterParcellePage } from "@/lib/acheter-parcelle-content"

export function AcheterParcelleCta() {
  const { title, lead, ctaPrimary, ctaSecondary } = acheterParcellePage.finalCta

  return (
    <section className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{title}</h2>
        <p className="max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
          {lead}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            nativeButton={false}
            size="lg"
            className="border-transparent bg-white text-primary hover:bg-white/95 hover:text-primary"
            render={<Link href={ctaPrimary.href} />}
          >
            {ctaPrimary.label}
          </Button>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            render={<Link href={ctaSecondary.href} />}
          >
            {ctaSecondary.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
