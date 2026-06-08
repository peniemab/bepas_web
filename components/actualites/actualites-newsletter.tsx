import Link from "next/link"
import { RssIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { actualitesPage } from "@/lib/actualites-content"

export function ActualitesNewsletter() {
  const { title, lead, ctaLabel, ctaHref } = actualitesPage.newsletter

  return (
    <section className="border-t border-border/40 bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 text-center sm:px-6">
        <RssIcon className="mx-auto size-10 text-primary" aria-hidden />
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
          {lead}
        </p>
        <div className="flex justify-center">
          <Button
            nativeButton={false}
            size="lg"
            render={<Link href={ctaHref} />}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
