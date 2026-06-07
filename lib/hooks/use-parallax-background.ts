"use client"

import { useEffect, useRef } from "react"

/** Même coefficient que [BBC About](https://www.bestbuilding.co/#/about) */
const PARALLAX_FACTOR = 0.35
const luxuryEase = "cubic-bezier(0.22, 1, 0.36, 1)"

type UseParallaxBackgroundOptions = {
  scale?: number
  factor?: number
}

/**
 * Parallax BBC — l'image défile à 35 % de la vitesse du scroll (`scrollY`).
 * Identique au hero « À propos » de bestbuilding.co.
 */
export function useParallaxBackground({
  scale = 1.08,
  factor = PARALLAX_FACTOR,
}: UseParallaxBackgroundOptions = {}) {
  const heroRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const hero = heroRef.current
    const layer = bgRef.current
    if (!hero || !layer) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (reduceMotion) {
      layer.style.transform = `translate3d(0, 0, 0) scale(${scale})`
      return
    }

    const applyTransform = () => {
      rafRef.current = null
      const rect = hero.getBoundingClientRect()
      if (rect.bottom <= 0) return

      const scrollY = window.scrollY || 0
      layer.style.transform = `translate3d(0, ${scrollY * factor}px, 0) scale(${scale})`
    }

    const scheduleUpdate = () => {
      if (rafRef.current !== null) return
      rafRef.current = window.requestAnimationFrame(applyTransform)
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate, { passive: true })
    scheduleUpdate()

    return () => {
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [scale, factor])

  return { heroRef, bgRef, luxuryEase }
}
