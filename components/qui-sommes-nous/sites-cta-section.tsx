"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { homeCommunes } from "@/lib/home-content"
import { notreHistoirePage } from "@/lib/notre-histoire-content"
import { cn } from "@/lib/utils"

export function SitesCTASection() {
  const { title, lead } = notreHistoirePage.sites

  return (
    <section
      id="choisis-ton-site"
      className="w-full scroll-mt-20"
      aria-labelledby="choisis-ton-site-title"
    >
      <div className="w-full overflow-x-hidden rounded-lg bg-primary/30 pb-12 pt-12 sm:pb-16 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-2 text-center sm:mb-12">
            <h2
              id="choisis-ton-site-title"
              className="text-3xl font-black tracking-tight text-foreground sm:text-4xl"
            >
              {title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {homeCommunes.map((commune) => (
              <article
                key={commune.sectionId}
                className="flex h-full flex-col overflow-hidden rounded-lg border border-border/40 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={commune.image}
                    alt={commune.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 bg-white p-5 sm:p-6">
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-black tracking-tight sm:text-xl",
                        commune.titleClass
                      )}
                    >
                      {commune.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {commune.locationDetail}
                    </p>
                  </div>

                  <ul className="flex list-none flex-col gap-2.5">
                    {commune.badges.map((badge) => (
                      <li
                        key={badge}
                        className="flex items-center gap-2.5 text-sm font-medium text-foreground"
                      >
                        <span
                          className="flex size-5 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-sm"
                          aria-hidden
                        >
                          <Check className="size-3 text-white" strokeWidth={3} />
                        </span>
                        {badge}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {commune.subtitle}
                  </p>
                </div>

                <div className="bg-white px-5 pb-5 sm:px-6 sm:pb-6">
                  <Link
                    href={`/projets/${commune.sectionId}`}
                    className="block w-full"
                  >
                    <Button
                      className="w-full border-transparent bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-primary-foreground hover:brightness-[0.92]"
                      liquidColors={{
                        from: "var(--brand-from)",
                        to: "var(--brand-to)",
                      }}
                    >
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
