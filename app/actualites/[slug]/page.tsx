import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, CalendarIcon, UserIcon } from "lucide-react"

import { ArticleBody } from "@/components/actualites/article-body"
import { ArticleCard } from "@/components/actualites/article-card"
import { actualitesHeroBreadcrumb } from "@/lib/actualites-content"
import { getArticleBySlug, getPublishedArticles } from "@/lib/articles"

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const { articles } = await getPublishedArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return { title: "Article introuvable" }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage }],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const { articles } = await getPublishedArticles()
  const related = articles
    .filter(
      (item) =>
        item.slug !== article.slug && item.category === article.category
    )
    .slice(0, 3)

  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b border-border/40 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Fil d'Ariane"
            className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {actualitesHeroBreadcrumb.map((item, index) => (
              <span key={item.href} className="flex items-center gap-2">
                {index > 0 ? (
                  <span className="text-[oklch(78%_0.14_165)]">/</span>
                ) : null}
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </span>
            ))}
            <span className="text-[oklch(78%_0.14_165)]">/</span>
            <span className="text-foreground">{article.title}</span>
          </nav>

          <Link
            href="/actualites"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeftIcon className="size-4" aria-hidden />
            Retour aux actualités
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
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

          <h1 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-muted">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 80vw, 100vw"
          />
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <ArticleBody html={article.contentHtml} />
      </article>

      {related.length > 0 ? (
        <section className="border-t border-border/40 bg-muted/20 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-black tracking-tight text-foreground">
              Dans la même thématique
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  )
}
