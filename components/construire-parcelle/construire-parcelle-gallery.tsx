import Link from "next/link"

import { ConstruireProjectCard } from "@/components/construire-parcelle/construire-project-card"
import { ConstruireScrollReveal } from "@/components/construire-parcelle/construire-scroll-reveal"
import { construireParcellePage } from "@/lib/construire-parcelle-content"

export function ConstruireParcelleGallery() {
  const { sectionId, title, lead, items } =
    construireParcellePage.gallery

  return (
    <section
      id={sectionId}
      className="scroll-mt-20 border-t border-border/40 bg-white py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <ConstruireScrollReveal>
            <h2 className="text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {lead}
            </p>
          </ConstruireScrollReveal>
        </div>

        <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <li
              key={item.title}
              className={index === 0 ? "sm:col-span-2 lg:col-span-2" : undefined}
            >
              <ConstruireScrollReveal delay={index * 60}>
                <ConstruireProjectCard
                  image={item.image}
                  category={item.highlight}
                  title={item.title}
                  summary={item.description}
                  href="/nos-solutions#vente-de-parcelles"
                  imageSizes={
                    index === 0
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  }
                />
              </ConstruireScrollReveal>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <ConstruireScrollReveal delay={150}>
            <Link
              href="/nos-solutions#vente-de-parcelles"
              className="inline-block rounded-full bg-primary px-9 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground"
            >
              Voir nos parcelles
            </Link>
          </ConstruireScrollReveal>
        </div>
      </div>
    </section>
  )
}
