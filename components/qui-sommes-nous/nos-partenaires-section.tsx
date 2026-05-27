import { notreHistoirePage } from "@/lib/notre-histoire-content"
import { quiSommesNousSectionIds } from "@/lib/qui-sommes-nous-content"

export function NosPartenairesSection() {
  const { partners } = notreHistoirePage

  return (
    <section
      id={quiSommesNousSectionIds.nosPartenaires}
      className="scroll-mt-20 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-primary-foreground"
      aria-labelledby={`${quiSommesNousSectionIds.nosPartenaires}-title`}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="flex max-w-3xl flex-col gap-6">
          <h2
            id={`${quiSommesNousSectionIds.nosPartenaires}-title`}
            className="text-2xl font-medium tracking-tight sm:text-3xl"
          >
            {partners.title}
          </h2>
          <p className="text-base leading-relaxed text-primary-foreground/90">
            {partners.lead}
          </p>
          <ul className="flex flex-wrap gap-2">
            {partners.names.map((name) => (
              <li
                key={name}
                className="rounded-lg border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium"
              >
                {name}
              </li>
            ))}
          </ul>
          <p className="text-sm text-primary-foreground/80">{partners.note}</p>
        </div>
      </div>
    </section>
  )
}
