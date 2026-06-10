import type { MetadataRoute } from "next"

import { getPublishedArticles } from "@/lib/articles"
import { projetCommunes, projets } from "@/lib/projets-content"
import { absoluteUrl } from "@/lib/site-url"

const staticPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/nos-solutions", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/projets", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/actualites", priority: 0.85, changeFrequency: "daily" as const },
  { path: "/qui-sommes-nous", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/qui-sommes-nous/notre-histoire", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/nos-solutions/amenagement-et-viabilisation",
    priority: 0.6,
    changeFrequency: "monthly" as const,
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const { articles } = await getPublishedArticles()

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency,
      priority,
    })
  )

  const communeEntries: MetadataRoute.Sitemap = projetCommunes.map((commune) => ({
    url: absoluteUrl(`/projets/${commune.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }))

  const projetEntries: MetadataRoute.Sitemap = projets.map((projet) => ({
    url: absoluteUrl(`/projets/${projet.communeSlug}/${projet.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absoluteUrl(`/actualites/${article.slug}`),
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    ...staticEntries,
    ...communeEntries,
    ...projetEntries,
    ...articleEntries,
  ]
}
