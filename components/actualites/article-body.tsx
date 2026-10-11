import sanitizeHtml from "sanitize-html"

import { cn } from "@/lib/utils"

type ArticleBodyProps = {
  html: string
  className?: string
}

/**
 * Le HTML vient de bepas_log : on ne garde que les balises de mise en forme
 * (pas de <script>, d'attributs on*, de style ni d'URL javascript:).
 */
function sanitizeArticleHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "img",
      "figure",
      "figcaption",
      "h1",
      "h2",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading"],
      th: ["colspan", "rowspan", "scope"],
      td: ["colspan", "rowspan"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: { img: ["http", "https"] },
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs:
          attribs.target === "_blank"
            ? { ...attribs, rel: "noopener noreferrer" }
            : attribs,
      }),
    },
  })
}

export function ArticleBody({ html, className }: ArticleBodyProps) {
  return (
    <div
      className={cn("article-body", className)}
      dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(html) }}
    />
  )
}
