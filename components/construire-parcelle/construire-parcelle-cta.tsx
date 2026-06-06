import Link from "next/link"

import { ConstruireScrollReveal } from "@/components/construire-parcelle/construire-scroll-reveal"
import { construireParcellePage } from "@/lib/construire-parcelle-content"

export function ConstruireParcelleCta() {
  const { title, subtitle, lead, cta } = construireParcellePage.finalCta

  return (
    <section className="relative overflow-hidden border-t border-border/40 py-16 text-center">
      <div className="absolute inset-0 z-0 scale-110 -skew-y-2 bg-muted/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ConstruireScrollReveal>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="mx-auto mb-3 max-w-2xl text-lg font-semibold text-foreground md:text-xl">
            {subtitle}
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            {lead}
          </p>
          <Link
            href={cta.href}
            className="inline-block border-2 border-foreground px-14 py-4 text-sm font-bold uppercase tracking-[0.25em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
          >
            {cta.label}
          </Link>
        </ConstruireScrollReveal>
      </div>
    </section>
  )
}
