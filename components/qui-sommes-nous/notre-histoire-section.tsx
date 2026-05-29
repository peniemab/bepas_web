import Image from "next/image"
import { CheckIcon } from "lucide-react"

import {
  StoryImageBlock,
  StoryTextImageSection,
} from "@/components/qui-sommes-nous/story-blocks"
import { notreHistoirePage } from "@/lib/notre-histoire-content"
import { quiSommesNousSectionIds } from "@/lib/qui-sommes-nous-content"

export function NotreHistoireSection() {
  const { hero, intro, founding, offer, sites } = notreHistoirePage

  return (
    <section
      id={quiSommesNousSectionIds.notreHistoire}
      className="w-full scroll-mt-20"
      aria-labelledby={`${quiSommesNousSectionIds.notreHistoire}-title`}
    >
      <div className="w-full overflow-x-hidden pb-0 pt-0">
        <div className="grid w-full gap-8">
          <div className="relative min-w-0 overflow-hidden bg-muted/30">
            <div className="-mt-[2cm] md:-mt-[5cm] xl:mt-0">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                priority
                className="block h-auto w-full xl:h-[calc(58vh+7cm)] xl:object-cover xl:object-[center_45%]"
                sizes="100vw"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-[16%] flex flex-col items-center gap-1.5 px-5 text-center sm:bottom-[18%] sm:gap-2 sm:px-8 md:gap-3"
            >
              <span className="text-2xl font-bold uppercase tracking-[0.14em] text-white [text-shadow:0_2px_4px_rgb(0_0_0/0.95),0_4px_20px_rgb(0_0_0/0.7)] sm:text-3xl md:text-4xl xl:text-5xl">
                {hero.tagline}
              </span>
              <span className="text-base font-bold lowercase tracking-[0.08em] text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.95),0_2px_14px_rgb(0_0_0/0.65)] sm:text-lg md:text-xl xl:text-2xl">
                {hero.taglineAlt}
              </span>
            </div>
          </div>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <StoryImageBlock
              image={{
                src: "/BEPAS.jpg",
                alt: "BEPAS — Bureau d'Étude des Projets d'Afrique Société",
                width: 800,
                height: 800,
              }}
              className="aspect-[16/10] w-full lg:min-h-[380px]"
            />
          </div>
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 text-center sm:gap-5 sm:px-6 lg:px-8">
            <h1
              id={`${quiSommesNousSectionIds.notreHistoire}-title`}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {hero.title}
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.lead}
            </p>
          </div>
        </div>
      </div>

      <StoryTextImageSection
        title={intro.title}
        paragraphs={intro.paragraphs}
        image={intro.image}
        priority
        naturalImage
        cropNaturalImageOnMobile
        titleOnImage
        sectionClassName="border-b-0"
        containerClassName="grid-cols-1 px-0 pt-0 pb-0 xl:grid-cols-2 xl:items-start xl:gap-10 xl:px-8 xl:pt-0 xl:pb-0"
      />

      <div className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-0 pb-0 sm:px-6 sm:pb-0 xl:grid-cols-2 xl:items-start xl:gap-10 xl:px-8 xl:pt-0 xl:pb-0">
          <StoryImageBlock
            image={founding.image}
            className="aspect-[4/3] w-full xl:min-h-[380px]"
          />
          <div className="flex flex-col justify-center gap-4">
            <span className="w-fit rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
              {founding.year}
            </span>
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              {founding.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              Fondation le {founding.date}
            </p>
            {founding.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 pt-0 pb-12 sm:px-6 sm:pb-14 xl:px-8 xl:pt-0 xl:pb-16">
          <div className="grid gap-10 xl:grid-cols-2 xl:items-start xl:gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  {offer.title}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {offer.lead}
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {offer.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-snug text-foreground sm:text-base"
                  >
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm font-medium text-foreground">
                {offer.parcelSizes}
              </p>
            </div>
            <StoryImageBlock
              image={offer.image}
              className="aspect-[4/5] w-full xl:sticky xl:top-24 xl:min-h-[480px]"
            />
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mb-10 flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              {sites.title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {sites.lead}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sites.items.map((site) => (
              <article
                key={site.name}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={site.image.src}
                    alt={site.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-col gap-1 p-4">
                  <h3 className="font-medium text-foreground">{site.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {site.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
