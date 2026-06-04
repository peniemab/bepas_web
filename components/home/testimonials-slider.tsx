"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

import {
  TestimonialCard,
  type TestimonialItem,
} from "@/components/home/testimonial-card"
import { Button } from "@/components/ui/button"
import { useMounted } from "@/lib/hooks/use-mounted"
import { useMediaQuery } from "@/lib/hooks/use-media-query"
import { cn } from "@/lib/utils"

const MAX_DRAG_PX = 100
const HINT_OFFSET_PX = 62
const HINT_PAUSE_MS = 4_500
const HINT_DURATION_MS = 480

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

type TestimonialsSliderProps = {
  items: readonly TestimonialItem[]
}

function TestimonialSlidePage({
  items,
  start,
  visibleCount,
}: {
  items: readonly TestimonialItem[]
  start: number
  visibleCount: number
}) {
  const visibleItems = items.slice(start, start + visibleCount)

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {visibleItems.map((item) => (
        <TestimonialCard key={item.name} item={item} />
      ))}
    </div>
  )
}

export function TestimonialsSlider({ items }: TestimonialsSliderProps) {
  const mounted = useMounted()
  const isWide = useMediaQuery("(min-width: 768px)")
  const visibleCount = isWide ? 2 : 1
  const slideCount = items.length
  const maxStartIndex = Math.max(0, slideCount - visibleCount)
  const pageCount = maxStartIndex + 1

  const [activeIndex, setActiveIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isAutoHinting, setIsAutoHinting] = useState(false)
  const pointerStartX = useRef<number | null>(null)
  const isDraggingRef = useRef(false)
  const hintAbortRef = useRef(false)
  const activeIndexRef = useRef(activeIndex)
  const maxStartIndexRef = useRef(maxStartIndex)

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    maxStartIndexRef.current = maxStartIndex
  }, [maxStartIndex])

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxStartIndex))
  }, [maxStartIndex])

  const goToPrevious = useCallback(() => {
    setDragOffset(0)
    setActiveIndex((current) =>
      current <= 0 ? maxStartIndex : current - 1
    )
  }, [maxStartIndex])

  const goToNext = useCallback(() => {
    setDragOffset(0)
    setActiveIndex((current) =>
      current >= maxStartIndex ? 0 : current + 1
    )
  }, [maxStartIndex])

  const resetDrag = useCallback(() => {
    pointerStartX.current = null
    isDraggingRef.current = false
    setIsDragging(false)
    setDragOffset(0)
  }, [])

  const applyDragResistance = useCallback((delta: number) => {
    const sign = delta < 0 ? -1 : 1
    const abs = Math.abs(delta)
    const resisted = Math.min(abs, MAX_DRAG_PX) * 0.55
    return sign * resisted
  }, [])

  const animateOffset = useCallback((from: number, to: number, duration: number) => {
    return new Promise<void>((resolve) => {
      const start = performance.now()
      let frame = 0

      const step = (now: number) => {
        if (hintAbortRef.current || isDraggingRef.current) {
          resolve()
          return
        }

        const progress = Math.min(1, (now - start) / duration)
        setDragOffset(from + (to - from) * easeInOut(progress))

        if (progress < 1) {
          frame = window.requestAnimationFrame(step)
        } else {
          resolve()
        }
      }

      frame = window.requestAnimationFrame(step)
    })
  }, [])

  const getHintTarget = useCallback(() => {
    const index = activeIndexRef.current
    const maxIndex = maxStartIndexRef.current

    if (index < maxIndex) return -HINT_OFFSET_PX
    if (index > 0) return HINT_OFFSET_PX
    return 0
  }, [])

  useEffect(() => {
    if (!mounted || pageCount <= 1) return

    hintAbortRef.current = false

    const runHintLoop = async () => {
      while (!hintAbortRef.current) {
        await sleep(HINT_PAUSE_MS)
        if (hintAbortRef.current || isDraggingRef.current) continue

        const target = getHintTarget()
        if (target === 0) continue

        setIsAutoHinting(true)
        await animateOffset(0, target, HINT_DURATION_MS)
        if (hintAbortRef.current || isDraggingRef.current) {
          setDragOffset(0)
          setIsAutoHinting(false)
          continue
        }

        await animateOffset(target, 0, HINT_DURATION_MS)
        setIsAutoHinting(false)
      }
    }

    void runHintLoop()

    return () => {
      hintAbortRef.current = true
      setIsAutoHinting(false)
    }
  }, [animateOffset, getHintTarget, mounted, pageCount])

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (pageCount <= 1) return
      setIsAutoHinting(false)
      setDragOffset(0)
      pointerStartX.current = event.clientX
      isDraggingRef.current = true
      setIsDragging(true)
      event.currentTarget.setPointerCapture(event.pointerId)
    },
    [pageCount]
  )

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current || pointerStartX.current === null) return

      const delta = event.clientX - pointerStartX.current
      let resisted = applyDragResistance(delta)

      if (delta < 0 && activeIndex >= maxStartIndex) {
        resisted = applyDragResistance(delta * 0.35)
      } else if (delta > 0 && activeIndex <= 0) {
        resisted = applyDragResistance(delta * 0.35)
      }

      setDragOffset(resisted)
    },
    [activeIndex, applyDragResistance, maxStartIndex]
  )

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (pointerStartX.current === null) return

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }

      isDraggingRef.current = false
      setIsDragging(false)
      setDragOffset(0)
      pointerStartX.current = null
    },
    []
  )

  if (slideCount === 0) return null

  if (!mounted) {
    return (
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <TestimonialCard item={items[0]} />
        {items[1] ? (
          <div className="hidden md:block">
            <TestimonialCard item={items[1]} />
          </div>
        ) : null}
      </div>
    )
  }

  const canPeekNext = activeIndex < maxStartIndex
  const canPeekPrev = activeIndex > 0
  const showNextPeek = canPeekNext && dragOffset < 0
  const showPrevPeek = canPeekPrev && dragOffset > 0

  return (
    <div className="flex w-full flex-col gap-3">
      <div
        className="relative w-full overflow-hidden touch-pan-y select-none"
        aria-roledescription="carousel"
        aria-label="Témoignages clients BEPAS"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={resetDrag}
      >
        {showPrevPeek ? (
          <div
            className="absolute inset-0 z-0 will-change-transform"
            style={{ transform: `translateX(calc(-100% + ${dragOffset}px))` }}
            aria-hidden
          >
            <TestimonialSlidePage
              items={items}
              start={activeIndex - 1}
              visibleCount={visibleCount}
            />
          </div>
        ) : null}

        {showNextPeek ? (
          <div
            className="absolute inset-0 z-0 will-change-transform"
            style={{ transform: `translateX(calc(100% + ${dragOffset}px))` }}
            aria-hidden
          >
            <TestimonialSlidePage
              items={items}
              start={activeIndex + 1}
              visibleCount={visibleCount}
            />
          </div>
        ) : null}

        <div
          className={cn(
            "relative z-10 will-change-transform",
            !isDragging && !isAutoHinting && "transition-transform duration-300 ease-out"
          )}
          style={{ transform: `translateX(${dragOffset}px)` }}
        >
          <TestimonialSlidePage
            items={items}
            start={activeIndex}
            visibleCount={visibleCount}
          />
        </div>
      </div>

      {pageCount > 1 ? (
        <div
          className="flex items-center justify-center gap-3"
          role="group"
          aria-label="Navigation des témoignages"
        >
          <Button
            type="button"
            variant="outline"
            size="icon-xs"
            className="size-7 rounded-md bg-white/90"
            onClick={goToPrevious}
            aria-label="Témoignages précédents"
          >
            <ChevronLeftIcon className="size-3.5" aria-hidden />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-xs"
            className="size-7 rounded-md bg-white/90"
            onClick={goToNext}
            aria-label="Témoignages suivants"
          >
            <ChevronRightIcon className="size-3.5" aria-hidden />
          </Button>
        </div>
      ) : null}
    </div>
  )
}
