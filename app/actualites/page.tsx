import type { Metadata } from "next"

import { ActualitesHero } from "@/components/actualites/actualites-hero"
import { ActualitesNewsletter } from "@/components/actualites/actualites-newsletter"
import { ArticleCard } from "@/components/actualites/article-card"
import { CategoryFilter } from "@/components/actualites/category-filter"
import { FeaturedArticle } from "@/components/actualites/featured-article"
import { actualitesEmptyState, actualitesPage } from "@/lib/actualites-content"
import {
  filterArticlesByCategory,
  getPublishedArticles,
  isArticleCategorySlug,
  pickFeaturedArticle,
} from "@/lib/articles"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Actualités BEPAS — parcelles et projets à Kinshasa",
  description: actualitesPage.meta.description,
  path: "/actualites",
  image: actualitesPage.hero.image.src,
})

type ActualitesPageProps = {
  searchParams: Promise<{ category?: string }>
}

export default async function ActualitesPage({
  searchParams,
}: ActualitesPageProps) {
  const { category } = await searchParams
  const activeCategory =
    category && isArticleCategorySlug(category) ? category : null

  const { articles } = await getPublishedArticles()
  const featured = articles.length > 0 ? pickFeaturedArticle(articles) : undefined
  const filtered = filterArticlesByCategory(articles, activeCategory)
  const gridArticles = featured
    ? filtered.filter((a) => a.slug !== featured.slug)
    : filtered

  return (
    <main className="flex flex-1 flex-col">
      <ActualitesHero />

      {articles.length === 0 ? (
        <section className="mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            {actualitesEmptyState.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {actualitesEmptyState.lead}
          </p>
        </section>
      ) : (
        <>
          {featured && !activeCategory ? (
            <FeaturedArticle article={featured} />
          ) : null}

          <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <h2 className="mb-6 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              {actualitesPage.latestLabel}
            </h2>

            <CategoryFilter activeCategory={activeCategory ?? "all"} />

            {gridArticles.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {gridArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <p className="rounded-lg border border-dashed border-border/60 bg-muted/20 px-6 py-12 text-center text-muted-foreground">
                Aucun article dans cette catégorie pour le moment.
              </p>
            )}
          </section>
        </>
      )}

      <ActualitesNewsletter />
    </main>
  )
}
