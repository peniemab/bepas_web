"use client"

import { useEffect, useState } from "react"

/** True après le premier montage client — évite les mises à jour d’état avant hydratation. */
export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
