"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { acheterParcellePage } from "@/lib/acheter-parcelle-content"
import { homeHeroFrame } from "@/lib/home-content"
import { useMounted } from "@/lib/hooks/use-mounted"
import { cn } from "@/lib/utils"

export function AcheterParcelleHero() {
  const {
    title,
    lead,
    slides,
    slideIntervalMs,
    ctaPrimary,
    ctaSecondary,
  } = acheterParcellePage.hero

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
    <section className="relative overflow-hidden text-white">
      <div
        className={cn(
          "relative w-full overflow-hidden",
          homeHeroFrame.heightClass
        )}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={slide.src}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                isActive
                  ? "pointer-events-auto z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
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

        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/70 via-black/45 to-black/30" />

        <div className="relative z-30 mx-auto flex h-full max-w-7xl items-center px-4 sm:justify-center sm:px-6 lg:px-8">
          <div className="flex max-w-3xl flex-col gap-5 sm:items-center sm:text-center">
            <h1 className="text-3xl font-black tracking-tight drop-shadow-sm sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg">
              {lead}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              <Button
                nativeButton={false}
                size="lg"
                className="border-transparent bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-primary-foreground hover:brightness-[0.92] active:brightness-[0.88]"
                render={<Link href={ctaPrimary.href} />}
              >
                {ctaPrimary.label}
              </Button>
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                liquidColors={{
                  from: "white",
                  to: "oklch(94% 0 0)",
                }}
                className="border-transparent bg-white text-black hover:!bg-white hover:[&_.btn-liquid__content]:!text-black focus-visible:[&_.btn-liquid__content]:!text-black"
                render={<Link href={ctaSecondary.href} />}
              >
                {ctaSecondary.label}
              </Button>
            </div>
          </div>
        </div>

        {slides.length > 1 ? (
          <div
            className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2 sm:bottom-5"
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
                    isActive ? "bg-white" : "bg-white/40 hover:bg-white/70"
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
