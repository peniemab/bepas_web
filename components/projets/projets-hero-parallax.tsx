"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { useParallaxBackground } from "@/lib/hooks/use-parallax-background"
import { cn } from "@/lib/utils"

type BreadcrumbItem = {
  label: string
  href: string
}

type ProjetsHeroParallaxProps = {
  title: string
  subtitle: string
  image: { src: string; alt: string }
  breadcrumb: readonly BreadcrumbItem[]
  eyebrow?: string
}

export function ProjetsHeroParallax({
  title,
  subtitle,
  image,
  breadcrumb,
  eyebrow,
}: ProjetsHeroParallaxProps) {
  const { heroRef, bgRef, luxuryEase } = useParallaxBackground()
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    setRevealed(true)
  }, [])

  return (
    <div
      ref={heroRef}
      data-parallax-hero
      className="relative flex min-h-[60vh] w-full items-end overflow-hidden bg-foreground pb-24 sm:min-h-[500px] sm:pb-28 lg:min-h-[560px]"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 h-[120%] -top-[10%] will-change-transform"
        style={{ transform: "translate3d(0, 0, 0) scale(1.08)" }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Fil d'Ariane"
          className={cn(
            "mb-8 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 transition-all duration-1000 motion-reduce:transition-none",
            revealed
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          )}
          style={{ transitionTimingFunction: luxuryEase }}
        >
          {breadcrumb.map((item, index) => (
            <span key={item.href} className="flex items-center gap-3">
              {index > 0 ? (
                <span className="text-[oklch(78%_0.14_165)]">/</span>
              ) : null}
              {index === breadcrumb.length - 1 ? (
                <span className="text-white">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[oklch(78%_0.14_165)]"
                >
                  {item.label}
                </Link>
              )}
            </span>
          ))}
        </nav>

        <div className="max-w-5xl">
          {eyebrow ? (
            <div
              className={cn(
                "mb-4 overflow-hidden transition-all duration-1000 motion-reduce:transition-none",
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
              )}
              style={{
                transitionDelay: "80ms",
                transitionTimingFunction: luxuryEase,
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[oklch(78%_0.14_165)]">
                {eyebrow}
              </p>
            </div>
          ) : null}

          <div className="overflow-hidden py-1">
            <h1
              className={cn(
                "text-5xl font-black uppercase leading-[0.85] tracking-tighter text-white transition-all duration-1000 motion-reduce:transition-none sm:text-6xl md:text-7xl lg:text-8xl",
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
              )}
              style={{
                transitionDelay: eyebrow ? "160ms" : "120ms",
                transitionTimingFunction: luxuryEase,
              }}
            >
              {title}
            </h1>
          </div>

          <div
            className={cn(
              "mt-6 overflow-hidden transition-all duration-1000 motion-reduce:transition-none sm:mt-8",
              revealed
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            )}
            style={{
              transitionDelay: eyebrow ? "280ms" : "240ms",
              transitionTimingFunction: luxuryEase,
            }}
          >
            <p className="max-w-2xl text-base font-light leading-relaxed text-gray-200 sm:text-lg md:text-xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
