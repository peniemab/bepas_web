import Link from "next/link"

import { articleCategoryDefs, actualitesPage } from "@/lib/actualites-content"
import { cn } from "@/lib/utils"

type CategoryFilterProps = {
  activeCategory?: string | null
}

export function CategoryFilter({ activeCategory }: CategoryFilterProps) {
  const active = activeCategory ?? "all"

  return (
    <div className="mb-8 sm:mb-10">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
        {actualitesPage.filterLabel}
      </p>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/actualites"
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
            active === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border/60 bg-white text-foreground hover:border-primary/40 hover:text-primary"
          )}
        >
          Tous
        </Link>
        {articleCategoryDefs.map((category) => (
          <Link
            key={category.slug}
            href={`/actualites?category=${category.slug}`}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              active === category.slug
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border/60 bg-white text-foreground hover:border-primary/40 hover:text-primary"
            )}
          >
            {category.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
