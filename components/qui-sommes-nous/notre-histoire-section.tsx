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
      className="scroll-mt-20"
      aria-labelledby={`${quiSommesNousSectionIds.notreHistoire}-title`}
    >
      <div>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-10 pb-0 sm:px-6 sm:pt-12 lg:grid-cols-2 lg:items-start lg:gap-10 lg:px-8 lg:pt-14 lg:pb-0">
          <div className="overflow-hidden rounded-2xl bg-muted/30">
            <div className="-mt-[2cm] -mb-[4cm]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                priority
                className="block h-auto w-full"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 text-center sm:gap-5 lg:px-2 lg:pt-2 lg:text-left">
            <p className="text-sm font-bold tracking-wide text-primary uppercase">
              {hero.tagline}
            </p>
            <h1
              id={`${quiSommesNousSectionIds.notreHistoire}-title`}
              className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight xl:text-5xl"
            >
              {hero.title}
            </h1>
            <p className="text-base italic text-muted-foreground lg:text-lg">
              {hero.taglineAlt}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-md lg:leading-relaxed">
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
        containerClassName="grid-cols-1 pt-0 pb-0 sm:px-6 sm:pb-0 lg:grid-cols-2 lg:items-start lg:gap-10 lg:px-8 lg:pt-0 lg:pb-0"
      />

      <div className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-0 pb-0 sm:px-6 sm:pb-0 lg:grid-cols-2 lg:items-start lg:gap-10 lg:px-8 lg:pt-0 lg:pb-0">
          <StoryImageBlock
            image={founding.image}
            className="aspect-[4/3] w-full lg:min-h-[380px]"
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
        <div className="mx-auto max-w-7xl px-4 pt-0 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pt-0 lg:pb-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-10">
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
              className="aspect-[4/5] w-full lg:sticky lg:top-24 lg:min-h-[480px]"
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
