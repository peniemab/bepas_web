import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { StoryTextImageSection } from "@/components/qui-sommes-nous/story-blocks"
import { notreHistoirePage } from "@/lib/notre-histoire-content"
import { quiSommesNousSectionIds } from "@/lib/qui-sommes-nous-content"
import { cn } from "@/lib/utils"

export function NosEquipesSection() {
  const { team, gallery, closing, cta } = notreHistoirePage

  return (
    <section
      id={quiSommesNousSectionIds.nosEquipes}
      className="scroll-mt-20 border-b border-border"
      aria-labelledby={`${quiSommesNousSectionIds.nosEquipes}-title`}
    >
      <StoryTextImageSection
        title={team.title}
        titleId={`${quiSommesNousSectionIds.nosEquipes}-title`}
        paragraphs={team.paragraphs}
        image={team.image}
        imagePosition="left"
        sectionClassName="border-b border-border"
      />

      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid gap-3 sm:grid-cols-3">
            {gallery.map((item, index) => (
              <div
                key={item.src}
                className={cn(
                  "relative overflow-hidden rounded-2xl bg-muted",
                  index === 2 ? "aspect-[3/4] sm:row-span-1" : "aspect-[4/3]"
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4 text-center md:mx-auto md:items-center">
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {closing.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {closing.text}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-2xl bg-gradient-to-r from-[oklch(65%_0.14_165.612)] to-[oklch(50.8%_0.118_165.612)] px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              {cta.title}
            </h2>
            <p className="text-base leading-relaxed text-primary-foreground/90">
              {cta.description}
            </p>
          </div>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            render={<Link href={cta.href} />}
          >
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
