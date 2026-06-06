import Link from "next/link"

import {
  getCommuneHref,
  projetCommunes,
  projetsPage,
  type CommuneSlug,
  type ProjetCommuneSlug,
} from "@/lib/projets-content"
import { cn } from "@/lib/utils"

type ProjetsFilterBarProps = {
  activeFilter: ProjetCommuneSlug
}

export function ProjetsFilterBar({ activeFilter }: ProjetsFilterBarProps) {
  return (
    <div className="mb-16 flex flex-wrap gap-6 border-b border-border/40 pb-8 md:gap-10">
      <Link
        href="/projets"
        className={cn(
          "text-base font-black uppercase tracking-[0.2em] transition-all duration-300 md:text-lg",
          activeFilter === "all"
            ? "scale-105 text-primary"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {projetsPage.filters.allLabel}
      </Link>
      {projetCommunes.map((commune) => (
        <Link
          key={commune.slug}
          href={getCommuneHref(commune.slug)}
          className={cn(
            "text-base font-black uppercase tracking-[0.2em] transition-all duration-300 md:text-lg",
            activeFilter === commune.slug
              ? "scale-105 text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {commune.name}
        </Link>
      ))}
    </div>
  )
}

export function getActiveCommuneFilter(
  communeSlug?: CommuneSlug
): ProjetCommuneSlug {
  return communeSlug ?? "all"
}
