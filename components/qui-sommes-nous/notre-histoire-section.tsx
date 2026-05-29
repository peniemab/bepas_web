import Image from "next/image"

import { StoryImageBlock } from "@/components/qui-sommes-nous/story-blocks"
import { notreHistoirePage } from "@/lib/notre-histoire-content"
import { quiSommesNousSectionIds } from "@/lib/qui-sommes-nous-content"

export function NotreHistoireSection() {
  const { hero } = notreHistoirePage

  return (
    <section
      id={quiSommesNousSectionIds.notreHistoire}
      className="w-full scroll-mt-20"
      aria-labelledby={`${quiSommesNousSectionIds.notreHistoire}-title`}
    >
      <div className="w-full overflow-x-hidden pb-12 pt-0">
        <div className="grid w-full gap-10 lg:gap-16">
          {/* Hero Banner avec hauteur agrandie (image ouverte) et décalage optimisé */}
          <div className="relative w-full overflow-hidden bg-muted/20">
            <div className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-16/7 max-h-170">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                className="object-cover object-[center_-3cm] sm:object-center"
                sizes="100vw"
              />
            </div>

            {/* Cartouche Premium Noir Adouci (Glassmorphism Sombre et Élégant) */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-6 sm:bottom-10 lg:bottom-12 flex items-center justify-center p-4"
            >
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-black/28 px-6 py-4.5 text-center backdrop-blur-md sm:px-8 sm:py-5.5 md:gap-3 shadow-lg max-w-[90%] sm:max-w-[80%]">
                <span className="text-xl font-bold uppercase tracking-[0.16em] text-white sm:text-2xl md:text-3xl lg:text-4xl leading-tight [text-shadow:0_1px_2px_rgb(0_0_0/0.4)]">
                  {hero.tagline}
                </span>
                <div className="h-px w-12 bg-white/20" />
                <span className="text-xs font-semibold lowercase tracking-[0.08em] text-white/90 sm:text-sm md:text-base italic [text-shadow:0_1px_2px_rgb(0_0_0/0.3)]">
                  {hero.taglineAlt}
                </span>
              </div>
            </div>
          </div>

          {/* Section Historique en 2 colonnes */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="px-0 sm:px-4 lg:px-0">
                <StoryImageBlock
                  image={{
                    src: "/BEPAS.jpg",
                    alt: "BEPAS — Bureau d'Étude des Projets d'Afrique Société",
                    width: 800,
                    height: 800,
                  }}
                  className="aspect-16/10 w-full lg:aspect-none lg:h-full lg:rounded-3xl shadow-xs border border-border/50"
                />
              </div>
              <div className="flex flex-col gap-2 text-center sm:gap-4 lg:items-start lg:text-left">
                <h1
                  id={`${quiSommesNousSectionIds.notreHistoire}-title`}
                  className="text-3xl font-black tracking-tight text-foreground sm:text-4xl"
                >
                  {hero.title}
                </h1>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {hero.lead}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
