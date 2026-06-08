import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, CalendarIcon, UserIcon } from "lucide-react"

import type { Article } from "@/lib/articles"
import { actualitesPage } from "@/lib/actualites-content"

type FeaturedArticleProps = {
  article: Article
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <section
      className="border-b border-border/40 bg-white py-12 sm:py-16"
      aria-labelledby="featured-article-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-primary">
          {actualitesPage.featuredLabel}
        </p>

        <Link
          href={`/actualites/${article.slug}`}
          className="group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted shadow-lg lg:aspect-[4/3]">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                {article.categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon className="size-4" aria-hidden />
                {article.publishedAtLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <UserIcon className="size-4" aria-hidden />
                {article.authorName}
              </span>
            </div>

            <h2
              id="featured-article-title"
              className="text-2xl font-black leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl"
            >
              {article.title}
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {article.excerpt}
            </p>

            <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
              Lire la suite
              <ArrowRightIcon
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
