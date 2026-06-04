"use client"

import { useEffect, useState } from "react"

import { useMounted } from "@/lib/hooks/use-mounted"

export function useMediaQuery(query: string) {
  const mounted = useMounted()
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia(query)
    const update = () => setMatches(mediaQuery.matches)

    update()
    mediaQuery.addEventListener("change", update)
    return () => mediaQuery.removeEventListener("change", update)
  }, [mounted, query])

  return mounted && matches
}
