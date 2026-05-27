import Link from "next/link"
import { MapPinIcon } from "lucide-react"

import { StoryImageBlock } from "@/components/qui-sommes-nous/story-blocks"
import {
  quiSommesNousPage,
  quiSommesNousSectionIds,
} from "@/lib/qui-sommes-nous-content"
import { siteConfig } from "@/lib/site-config"

export function NosBureauxSection() {
  const { nosBureaux } = quiSommesNousPage

  return (
    <section
      id={quiSommesNousSectionIds.nosBureaux}
      className="scroll-mt-20 border-b border-border bg-muted/40"
      aria-labelledby={`${quiSommesNousSectionIds.nosBureaux}-title`}
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-16">
        <StoryImageBlock
          image={nosBureaux.image}
          className="aspect-[4/3] w-full lg:min-h-[380px]"
        />
        <div className="flex flex-col justify-center gap-4">
          <h2
            id={`${quiSommesNousSectionIds.nosBureaux}-title`}
            className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
          >
            {nosBureaux.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {nosBureaux.lead}
          </p>
          {nosBureaux.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-background p-4">
            <p className="flex gap-2 text-sm font-medium text-foreground">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              {nosBureaux.address}
            </p>
            <ol className="list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
              {nosBureaux.accessSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nosBureaux.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              Voir sur Google Maps
            </Link>
            <p className="text-sm text-muted-foreground">
              {siteConfig.contact.phone} · {siteConfig.contact.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
