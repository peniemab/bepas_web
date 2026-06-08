import { unstable_cache } from "next/cache"

import {
  getArticleCategoryLabel,
  type ArticleCategorySlug,
} from "@/lib/actualites-content"
import { getSupabaseAdminClient, isSupabaseConfigured } from "@/lib/supabase/admin"

export type Article = {
  slug: string
  title: string
  excerpt: string
  contentHtml: string
  coverImage: string
  category: string
  categoryLabel: string
  authorName: string
  featured: boolean
  publishedAt: string
  publishedAtLabel: string
}

type ArticleRow = {
  slug: string
  title: string
  excerpt: string
  content_html: string
  cover_image_url: string | null
  category: string
  author_name: string
  featured: boolean
  published_at: string | null
}

function formatPublishedLabel(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function resolveCoverImage(url: string | null | undefined) {
  const value = url?.trim()
  if (!value) return "/heroAccueil10.jpg"
  if (value.startsWith("http://") || value.startsWith("https://")) return value
  return value.startsWith("/") ? value : `/${value}`
}

function mapRow(row: ArticleRow): Article {
  const publishedAt = row.published_at ?? new Date().toISOString()

  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    contentHtml: row.content_html,
    coverImage: resolveCoverImage(row.cover_image_url),
    category: row.category,
    categoryLabel: getArticleCategoryLabel(row.category),
    authorName: row.author_name,
    featured: row.featured,
    publishedAt,
    publishedAtLabel: formatPublishedLabel(publishedAt),
  }
}

function sortArticles(list: Article[]) {
  return [...list].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

async function fetchPublishedArticlesLive(): Promise<Article[]> {
  const supabase = getSupabaseAdminClient()

  const { data, error } = await supabase
    .from("articles")
    .select(
      "slug, title, excerpt, content_html, cover_image_url, category, author_name, featured, published_at"
    )
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false })

  if (error) {
    throw new Error(error.message)
  }

  return sortArticles((data ?? []).map((row) => mapRow(row as ArticleRow)))
}

const getCachedLiveArticles = unstable_cache(
  async () => fetchPublishedArticlesLive(),
  ["bepas-public-articles"],
  { revalidate: 120, tags: ["articles"] }
)

export type ArticlesPayload = {
  articles: Article[]
  source: "live" | "empty"
}

export async function getPublishedArticles(): Promise<ArticlesPayload> {
  if (!isSupabaseConfigured()) {
    return { articles: [], source: "empty" }
  }

  try {
    const articles = await getCachedLiveArticles()
    return { articles, source: "live" }
  } catch (err) {
    console.error("[articles]", err)
    return { articles: [], source: "empty" }
  }
}

export async function getArticleBySlug(
  slug: string
): Promise<Article | undefined> {
  const { articles } = await getPublishedArticles()
  return articles.find((article) => article.slug === slug)
}

export function pickFeaturedArticle(articles: Article[]) {
  return articles.find((a) => a.featured) ?? articles[0]
}

export function filterArticlesByCategory(
  articles: Article[],
  category?: string | null
) {
  if (!category || category === "all") return articles
  return articles.filter((a) => a.category === category)
}

export function isArticleCategorySlug(
  value: string
): value is ArticleCategorySlug {
  return ["evenements", "infrastructures", "conseils", "bepas"].includes(value)
}
