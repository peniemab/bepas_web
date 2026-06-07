import Link from "next/link"

import { ConstruireScrollReveal } from "@/components/construire-parcelle/construire-scroll-reveal"
import { ConstruireServiceCard } from "@/components/construire-parcelle/construire-service-card"
import { construireParcellePage } from "@/lib/construire-parcelle-content"
import { siteConfig } from "@/lib/site-config"

export function ConstruireParcelleBenefits() {
  const { title, lead, contactCard, items } =
    construireParcellePage.benefits

  return (
    <section className="border-t border-border/40 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ConstruireScrollReveal>
              <h2 className="mb-2 text-3xl font-black text-foreground md:text-4xl">
                {title}
              </h2>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                {lead}
              </p>
            </ConstruireScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <ConstruireScrollReveal delay={150}>
              <div className="flex lg:justify-end">
                <div className="flex w-full max-w-xl flex-col gap-4 rounded-2xl border border-border/60 bg-white px-8 py-6 shadow-xl md:flex-row md:items-center md:px-10 md:py-7">
                  <div className="flex-1">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {contactCard.question}
                    </p>
                    <p className="text-sm text-foreground/80">
                      {contactCard.hint}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                      {contactCard.phoneLabel}
                    </p>
                    <Link
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="text-2xl font-black text-foreground transition-colors hover:text-primary md:text-3xl"
                    >
                      {siteConfig.contact.phone}
                    </Link>
                  </div>
                </div>
              </div>
            </ConstruireScrollReveal>
          </div>
        </div>

        <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <li key={item.title}>
              <ConstruireScrollReveal delay={index * 70}>
                <ConstruireServiceCard
                  image={item.image}
                  title={item.title}
                />
              </ConstruireScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
