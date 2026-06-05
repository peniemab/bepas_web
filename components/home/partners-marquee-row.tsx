"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type CSSProperties } from "react"

import { homePartners } from "@/lib/home-content"
import { cn } from "@/lib/utils"

type PartnerLogo = (typeof homePartners.rows)[number]["logos"][number]

type PartnersMarqueeRowProps = {
  logos: readonly PartnerLogo[]
  direction: "left" | "right"
}

export function PartnersMarqueeRow({
  logos,
  direction,
}: PartnersMarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const updateScrollDistance = () => {
      const shift = Math.max(0, track.scrollWidth - container.clientWidth)
      container.style.setProperty("--partners-marquee-shift", `${shift}px`)
      setCanScroll(shift > 0)
    }

    updateScrollDistance()

    const observer = new ResizeObserver(updateScrollDistance)
    observer.observe(container)
    observer.observe(track)

    return () => observer.disconnect()
  }, [logos])

  return (
    <div
      ref={containerRef}
      className="partners-marquee-mask relative w-full overflow-hidden"
      style={{ "--partners-marquee-shift": "0px" } as CSSProperties}
    >
      <ul
        ref={trackRef}
        className={cn(
          "partners-marquee-track flex w-max list-none gap-4 sm:gap-6",
          canScroll &&
            (direction === "left"
              ? "partners-marquee-left"
              : "partners-marquee-right"),
          !canScroll && "mx-auto justify-center"
        )}
      >
        {logos.map((logo) => (
          <li
            key={logo.src}
            className={cn(
              "flex shrink-0 items-center justify-center px-2 sm:px-3",
              logo.tileClass
            )}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={cn(
                "h-auto w-auto max-w-full object-contain",
                logo.imageClass
              )}
              draggable={false}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
