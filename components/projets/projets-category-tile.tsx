"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { getCommuneHref, type CommuneSlug } from "@/lib/projets-content"
import { cn } from "@/lib/utils"

const luxuryEase = "cubic-bezier(0.22, 1, 0.36, 1)"

type ProjetsCategoryTileProps = {
  slug: CommuneSlug
  name: string
  description: string
  image: { src: string; alt: string }
  className?: string
}

export function ProjetsCategoryTile({
  slug,
  name,
  description,
  image,
  className,
}: ProjetsCategoryTileProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link
      href={getCommuneHref(slug)}
      className={cn(
        "group relative block h-[400px] w-full overflow-hidden bg-foreground md:h-[500px]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(78%_0.14_165)] focus-visible:ring-offset-2",
        className
      )}
    >
      <div className="relative h-full w-full">
        {!imageLoaded ? (
          <div
            className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-muted/60 to-muted"
            aria-hidden
          />
        ) : null}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "object-cover transition-all duration-[1500ms] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            "group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionTimingFunction: luxuryEase }}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 transition-colors duration-700 group-hover:bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
        <div className="overflow-hidden">
          <span
            className="mb-4 inline-block translate-y-8 text-xs font-bold uppercase tracking-[0.2em] text-[oklch(78%_0.14_165)] transition-transform duration-500 group-hover:translate-y-0 motion-reduce:translate-y-0"
            style={{ transitionTimingFunction: luxuryEase }}
          >
            Commune
          </span>
        </div>

        <h3 className="mb-4 text-4xl font-black uppercase leading-none text-white md:text-5xl">
          {name}
        </h3>

        <div className="h-0 overflow-hidden transition-all duration-500 group-hover:h-auto motion-reduce:h-auto">
          <p
            className="max-w-xl translate-y-4 text-lg font-light text-gray-300 transition-transform duration-700 delay-100 group-hover:translate-y-0 motion-reduce:translate-y-0"
            style={{ transitionTimingFunction: luxuryEase }}
          >
            {description}
          </p>
          <span className="mt-6 inline-flex items-center border-b border-[oklch(78%_0.14_165)] pb-1 text-xs font-bold uppercase tracking-widest text-white">
            Explorer →
          </span>
        </div>
      </div>
    </Link>
  )
}
