"use client"

import { useEffect, useRef, useState } from "react"

type UseRevealOnScrollOptions = {
  /** Part de la carte visible avant révélation (0–1) */
  threshold?: number
  rootMargin?: string
}

/**
 * Sur écrans sans hover (mobile), révèle le contenu quand la carte entre dans le viewport.
 * Sur desktop, ne fait rien — le hover CSS prend le relais.
 */
export function useRevealOnScroll({
  threshold = 0.4,
  rootMargin = "0px 0px -8% 0px",
}: UseRevealOnScrollOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const media = window.matchMedia("(hover: none)")
    if (!media.matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, inView }
}
