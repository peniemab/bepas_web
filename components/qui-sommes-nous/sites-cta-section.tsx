"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { notreHistoirePage } from "@/lib/notre-histoire-content"

const sites = notreHistoirePage.sites.items

export function SitesCTASection() {
  const { title, lead } = notreHistoirePage.sites

  return (
    <section
      id="choisis-ton-site"
      className="w-full scroll-mt-20 bg-white py-16 sm:py-20"
      aria-labelledby="choisis-ton-site-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-muted/40 px-4 py-10 sm:px-8 sm:py-12 lg:px-10">
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
            {sites.map((site) => (
              <article
                key={site.name}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={site.image.src}
                    alt={site.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
                  <h3 className="text-lg font-bold tracking-tight text-foreground">
                    {site.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{site.location}</p>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <Link href="/nos-solutions/vente-de-parcelles" className="block w-full">
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
