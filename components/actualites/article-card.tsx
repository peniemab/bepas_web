import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, CalendarIcon, UserIcon } from "lucide-react"

import type { Article } from "@/lib/articles"
import { cn } from "@/lib/utils"

type ArticleCardProps = {
  article: Article
  className?: string
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Link
      href={`/actualites/${article.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-border/60 bg-white shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-sm">
          {article.categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <CalendarIcon className="size-3.5" aria-hidden />
            {article.publishedAtLabel}
          </span>
          <span className="inline-flex items-center gap-1">
            <UserIcon className="size-3.5" aria-hidden />
            {article.authorName}
          </span>
        </div>

        <h3 className="text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          {article.title}
        </h3>

        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>

        <span className="inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-primary">
          Lire l&apos;article
          <ArrowRightIcon
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  )
}
