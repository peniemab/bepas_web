import { cn } from "@/lib/utils"

type ArticleBodyProps = {
  html: string
  className?: string
}

export function ArticleBody({ html, className }: ArticleBodyProps) {
  return (
    <div
      className={cn("article-body", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
