"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useMounted } from "@/lib/hooks/use-mounted"
import {
  homeHero,
  homeHeroFrame,
  homeHeroSlideIntervalMs,
  homeHeroSlides,
  homeHeroTagline,
} from "@/lib/home-content"
import { cn } from "@/lib/utils"

export function HeroCarousel() {
  const mounted = useMounted()
  const [activeIndex, setActiveIndex] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    if (!mounted || homeHeroSlides.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % homeHeroSlides.length)
    }, homeHeroSlideIntervalMs)

    return () => window.clearInterval(timer)
  }, [mounted])

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        homeHeroFrame.heightClass
      )}
    >
      {homeHeroSlides.map((slide, index) => {
        const isActive = index === activeIndex

        return (
          <div
            key={slide.image.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              isActive
                ? "pointer-events-auto z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            )}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="(min-width: 1280px) 1216px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/40" />

            <div className="absolute inset-0 flex flex-col p-6 sm:p-8 lg:p-10">
              <div className="shrink-0 lg:max-w-[55%]">
                <h1 className="text-xl font-black leading-snug text-white drop-shadow-sm sm:text-3xl lg:text-4xl lg:leading-tight">
                  {slide.title}
                </h1>
              </div>

              <div className="flex min-h-0 flex-1 flex-col justify-center gap-3 lg:max-w-[55%] sm:gap-4">
                <p className="text-base font-medium leading-relaxed text-white drop-shadow-sm sm:text-lg">
                  {slide.lead}
                </p>
                <p className="text-base font-black leading-relaxed text-white drop-shadow-sm sm:text-lg">
                  {homeHeroTagline}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Button
                  nativeButton={false}
                  size="lg"
                  pulseDelay={0.2}
                  render={<Link href={homeHero.ctaSecondary.href} />}
                >
                  {homeHero.ctaSecondary.label}
                </Button>
                <Button
                  nativeButton={false}
                  size="lg"
                  pulseDelay={0}
                  liquidColors={{
                    from: "oklch(65% 0.14 165.612)",
                    to: "oklch(50.8% 0.118 165.612)",
                  }}
                  className="border-transparent bg-gradient-to-r from-[oklch(65%_0.14_165.612)] to-[oklch(50.8%_0.118_165.612)] text-white hover:brightness-[0.92] active:brightness-[0.88]"
                  render={<Link href={homeHero.ctaPrimary.href} />}
                >
                  {homeHero.ctaPrimary.label}
                </Button>
              </div>
            </div>
          </div>
        )
      })}

      {homeHeroSlides.length > 1 ? (
        <div
          className="absolute top-6 right-6 z-20 flex gap-2 sm:top-8 sm:right-8 lg:top-10 lg:right-10"
          role="tablist"
          aria-label="Slides du hero"
        >
          {homeHeroSlides.map((slide, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={slide.image.src}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Slide ${index + 1}`}
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
  )
}
