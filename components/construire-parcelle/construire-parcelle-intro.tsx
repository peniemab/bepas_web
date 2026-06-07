import Link from "next/link"

import { ConstruireScrollReveal } from "@/components/construire-parcelle/construire-scroll-reveal"
import { construireParcellePage } from "@/lib/construire-parcelle-content"

export function ConstruireParcelleIntro({
  embedded = false,
}: {
  embedded?: boolean
}) {
  const { headline, headlineLine2, headlineAccent, lead, cta } =
    construireParcellePage.intro

  return (
    <section
      className={
        embedded
          ? "border-t border-border/40 bg-white pt-10 pb-12 sm:pt-12 lg:py-14"
          : "parallax-content-overlap border-b border-border/40 bg-white py-12 lg:py-14"
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl">
          <ConstruireScrollReveal delay={150}>
            <h2 className="mb-10 text-4xl font-black leading-[0.9] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {headline}
              <br />
              <span className="whitespace-nowrap">
                {headlineLine2}{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {headlineAccent}
                </span>
              </span>
            </h2>
          </ConstruireScrollReveal>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="mb-4 h-1.5 w-24 bg-[oklch(78%_0.14_165)]" />
            </div>
            <div className="lg:col-span-8">
              <ConstruireScrollReveal delay={300}>
                <p className="mb-6 text-xl font-light leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
                  {lead}
                </p>
                <Link
                  href={cta.href}
                  className="group inline-flex items-center border-b-2 border-foreground pb-1 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {cta.label}
                  <span className="ml-4 transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </ConstruireScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
