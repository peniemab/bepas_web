"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { construireParcellePage } from "@/lib/construire-parcelle-content"
import { useMounted } from "@/lib/hooks/use-mounted"
import { useParallaxBackground } from "@/lib/hooks/use-parallax-background"
import { cn } from "@/lib/utils"

export function ConstruireParcelleHero() {
  const {
    title,
    lead,
    slides,
    slideIntervalMs,
    ctaPrimary,
    ctaSecondary,
  } = construireParcellePage.hero

  const { heroRef, bgRef } = useParallaxBackground()
  const mounted = useMounted()
  const [activeIndex, setActiveIndex] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    if (!mounted || slides.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, slideIntervalMs)

    return () => window.clearInterval(timer)
  }, [mounted, slideIntervalMs, slides.length])

  return (
    <section className="relative overflow-hidden bg-foreground text-white">
      <div
        ref={heroRef}
        data-parallax-hero
        className="relative flex min-h-[85vh] w-full items-end overflow-hidden pb-24 sm:min-h-[600px] sm:pb-32 lg:pb-36"
      >
        <div
          ref={bgRef}
          className="absolute inset-0 h-[120%] -top-[10%] will-change-transform"
          style={{ transform: "translate3d(0, 0, 0) scale(1.08)" }}
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex

            return (
              <div
                key={slide.src}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  isActive
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                )}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            )
          })}
        </div>

        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="absolute inset-0 z-20 bg-primary/20 mix-blend-overlay" />

        <div className="relative z-30 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              {title}
            </h1>
            <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-center">
              <div
                className="hidden h-1 w-20 shrink-0 bg-[oklch(78%_0.14_165)] sm:block"
                aria-hidden
              />
              <p className="max-w-3xl text-base font-light leading-relaxed text-gray-200 sm:text-lg md:text-xl">
                {lead}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Button
                nativeButton={false}
                size="lg"
                className="h-auto border-2 border-transparent bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground hover:brightness-[0.92]"
                render={<Link href={ctaPrimary.href} />}
              >
                {ctaPrimary.label}
              </Button>
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                liquidColors={{
                  from: "transparent",
                  to: "transparent",
                }}
                className="h-auto border-2 border-white bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:[&_.btn-liquid__content]:!text-foreground"
                render={<Link href={ctaSecondary.href} />}
              >
                {ctaSecondary.label}
              </Button>
            </div>
          </div>
        </div>

        {slides.length > 1 ? (
          <div
            className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2 sm:bottom-8"
            role="tablist"
            aria-label="Images du hero"
          >
            {slides.map((slide, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Image ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "size-2.5 rounded-full transition-colors",
                    isActive ? "bg-[oklch(78%_0.14_165)]" : "bg-white/40 hover:bg-white/70"
                  )}
                />
              )
            })}
          </div>
        ) : null}
      </div>
    </section>
  )
}
