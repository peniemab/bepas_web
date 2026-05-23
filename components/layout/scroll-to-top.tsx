"use client"

import { useEffect, useState } from "react"
import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const BUTTON_SIZE = 44
const RING_RADIUS = 19.5
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const nextProgress =
        scrollHeight > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollHeight))
          : 0

      setProgress(nextProgress)
      setVisible(window.scrollY > 320)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const ringOffset = RING_CIRCUMFERENCE * (1 - progress)
  const center = BUTTON_SIZE / 2

  return (
    <div
      className={cn(
        "fixed right-4 bottom-6 z-50 size-11 transition-all duration-300 sm:right-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      )}
    >
      <Button
        type="button"
        size="icon-lg"
        aria-label="Retour en haut de la page"
        onClick={scrollToTop}
        className="size-11 rounded-full shadow-md"
      >
        <ArrowUpIcon className="size-5" strokeWidth={2.25} />
      </Button>

      <svg
        aria-hidden="true"
        viewBox={`0 0 ${BUTTON_SIZE} ${BUTTON_SIZE}`}
        className="pointer-events-none absolute inset-0 size-11 -rotate-90"
      >
        <circle
          cx={center}
          cy={center}
          r={RING_RADIUS}
          fill="none"
          stroke="white"
          strokeOpacity={0.35}
          strokeWidth="2"
        />
        <circle
          cx={center}
          cy={center}
          r={RING_RADIUS}
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={ringOffset}
          className="transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>
    </div>
  )
}
