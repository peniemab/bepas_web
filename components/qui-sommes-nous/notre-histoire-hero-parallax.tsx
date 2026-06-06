"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { useParallaxBackground } from "@/lib/hooks/use-parallax-background"
import { notreHistoirePage } from "@/lib/notre-histoire-content"
import { cn } from "@/lib/utils"

export function NotreHistoireHeroParallax() {
  const { hero } = notreHistoirePage
  const { heroRef, bgRef, luxuryEase } = useParallaxBackground()
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    setRevealed(true)
  }, [])

  return (
    <div
      ref={heroRef}
      data-parallax-hero
      className="relative flex min-h-[85vh] w-full items-end overflow-hidden bg-foreground pb-24 sm:min-h-[600px] sm:pb-32"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 h-[120%] -top-[10%] will-change-transform"
        style={{ transform: "translate3d(0, 0, 0) scale(1.08)" }}
      >
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className="object-cover object-[center_-3cm] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Fil d'Ariane"
          className={cn(
            "mb-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
            revealed
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          )}
          style={{ transitionTimingFunction: luxuryEase }}
        >
          {hero.breadcrumb.map((item, index) => (
            <span key={item.href} className="flex items-center gap-3">
              {index > 0 ? (
                <span className="text-[oklch(78%_0.14_165)]">/</span>
              ) : null}
              {index === hero.breadcrumb.length - 1 ? (
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
          <p className="sr-only">{hero.title}</p>

          <div className="overflow-hidden py-2">
            <p
              className={cn(
                "text-3xl font-black uppercase leading-[0.9] tracking-tighter text-white transition-all duration-1000 motion-reduce:transition-none sm:text-5xl md:text-6xl lg:text-7xl",
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
              )}
              style={{
                transitionDelay: "120ms",
                transitionTimingFunction: luxuryEase,
              }}
            >
              {hero.tagline}
            </p>
          </div>

          <div
            className={cn(
              "mt-8 overflow-hidden transition-all duration-1000 motion-reduce:transition-none sm:mt-10",
              revealed
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            )}
            style={{
              transitionDelay: "280ms",
              transitionTimingFunction: luxuryEase,
            }}
          >
            <div className="flex items-center gap-6">
              <div
                className="hidden h-1 w-20 shrink-0 bg-[oklch(78%_0.14_165)] sm:block"
                aria-hidden
              />
              <p className="max-w-3xl text-sm font-semibold lowercase italic tracking-[0.08em] text-white/90 sm:text-base md:text-lg">
                {hero.taglineAlt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
