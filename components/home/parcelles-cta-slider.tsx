"use client"

import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useMounted } from "@/lib/hooks/use-mounted"
import { cn } from "@/lib/utils"

type ParcellesCtaSlide = {
  src: string
  alt: string
  width: number
  height: number
}

type ParcellesCtaSliderProps = {
  slides: readonly ParcellesCtaSlide[]
  intervalMs: number
}

export function ParcellesCtaSlider({
  slides,
  intervalMs,
}: ParcellesCtaSliderProps) {
  const mounted = useMounted()
  const [activeIndex, setActiveIndex] = useState(0)
  const slideCount = slides.length

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slideCount) % slideCount)
  }, [slideCount])

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slideCount)
  }, [slideCount])

  useEffect(() => {
    if (!mounted || slideCount <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount)
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [mounted, slideCount, intervalMs])

  if (slideCount === 0) return null

  return (
    <div className="flex w-full flex-col gap-3">
      <div
        className="relative w-full overflow-hidden rounded-lg bg-muted aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] lg:max-h-[min(520px,70vh)]"
        aria-roledescription="carousel"
        aria-label="Parcelle, construction et toiture — réalisations BEPAS"
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
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          )
        })}
      </div>

      {slideCount > 1 ? (
        <div
          className="flex items-center justify-center gap-3"
          role="group"
          aria-label="Navigation du slider"
        >
          <Button
            type="button"
            variant="outline"
            size="icon-xs"
            className="size-7 rounded-md"
            onClick={goToPrevious}
            aria-label="Photo précédente"
          >
            <ChevronLeftIcon className="size-3.5" aria-hidden />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-xs"
            className="size-7 rounded-md"
            onClick={goToNext}
            aria-label="Photo suivante"
          >
            <ChevronRightIcon className="size-3.5" aria-hidden />
          </Button>
        </div>
      ) : null}
    </div>
  )
}
