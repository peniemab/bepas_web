import Image from "next/image"
import { Suspense } from "react"

import { NotreImpactSection } from "@/components/home/notre-impact-section"
import { NotreHistoireHeroParallax } from "@/components/qui-sommes-nous/notre-histoire-hero-parallax"
import { ScrollReveal } from "@/components/scroll-reveal"
import { notreHistoirePage } from "@/lib/notre-histoire-content"
import { quiSommesNousSectionIds } from "@/lib/qui-sommes-nous-content"

export function NotreHistoireSection() {
  const { hero, about } = notreHistoirePage

  return (
    <>
      <NotreHistoireHeroParallax />

      <section
        id={quiSommesNousSectionIds.notreHistoire}
        className="w-full scroll-mt-20"
        aria-labelledby={`${quiSommesNousSectionIds.notreHistoire}-title`}
      >
      {/* Corps BBC About — ancre « Notre histoire » (pas le hero) */}
      <div className="parallax-content-overlap bg-white py-16 pb-20 lg:py-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <h2
                id={`${quiSommesNousSectionIds.notreHistoire}-title`}
                className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-4xl"
              >
                {about.headline}
                <br />
                <span className="text-[oklch(78%_0.14_165)]">
                  {about.headlineAccent}
                </span>
              </h2>
              <div className="space-y-4 text-justify text-base leading-relaxed text-muted-foreground">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-6 space-y-2">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-primary" aria-hidden>
                      ✔
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                {hero.lead}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="relative">
                <div
                  className="absolute -left-4 -top-4 -z-10 size-24 bg-[oklch(78%_0.14_165)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110 motion-reduce:transition-none"
                  aria-hidden
                />
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted shadow-2xl">
                  <Image
                    src={about.image.src}
                    alt={about.image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden max-w-xs border-l-4 border-primary bg-white p-8 shadow-xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 motion-reduce:transition-none md:block">
                  <p className="text-lg font-bold leading-snug text-primary">
                    &ldquo;{about.quote}&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-muted/40">
        <div className="border-t border-border/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              {about.stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 100}>
                  <div className="rounded-lg bg-white p-6 shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div
                      className={`mb-2 text-4xl font-black ${
                        index % 2 === 0
                          ? "text-[oklch(78%_0.14_165)]"
                          : "text-primary"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="min-h-[28rem] border-t border-border/40 py-12" aria-hidden />
          }
        >
          <NotreImpactSection embedded />
        </Suspense>
      </div>
    </section>
    </>
  )
}
