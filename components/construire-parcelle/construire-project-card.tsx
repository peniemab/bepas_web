import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

const luxuryEase = "cubic-bezier(0.22, 1, 0.36, 1)"

type ConstruireProjectCardProps = {
  image: { src: string; alt: string }
  category?: string
  title: string
  summary?: string
  href?: string
  linkLabel?: string
  className?: string
  imageSizes?: string
  priority?: boolean
}

export function ConstruireProjectCard({
  image,
  category,
  title,
  summary,
  href,
  linkLabel = "En savoir plus →",
  className,
  imageSizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: ConstruireProjectCardProps) {
  const content = (
    <>
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-foreground">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          style={{ transitionTimingFunction: luxuryEase }}
          sizes={imageSizes}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div
          className="translate-y-6 transition-transform duration-700 group-hover:translate-y-0 motion-reduce:translate-y-0"
          style={{ transitionTimingFunction: luxuryEase }}
        >
          {category ? (
            <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[oklch(78%_0.14_165)] opacity-0 transition-opacity duration-500 delay-75 group-hover:opacity-100 motion-reduce:opacity-100">
              {category}
            </span>
          ) : null}
          <h3 className="mb-4 text-2xl font-black uppercase leading-[0.9] text-white md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <div
            className="mb-4 h-1 w-12 bg-white/20 transition-all duration-700 group-hover:w-full group-hover:bg-[oklch(78%_0.14_165)] motion-reduce:w-full"
            style={{ transitionTimingFunction: luxuryEase }}
          />
          <div className="grid grid-rows-[0fr] transition-all duration-700 group-hover:grid-rows-[1fr] motion-reduce:grid-rows-[1fr]">
            <div className="overflow-hidden">
              {summary ? (
                <p className="mb-4 line-clamp-3 text-sm font-medium leading-relaxed text-gray-300 opacity-0 transition-opacity duration-700 delay-150 group-hover:opacity-100 motion-reduce:opacity-100">
                  {summary}
                </p>
              ) : null}
              {href ? (
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white opacity-0 transition-opacity duration-700 delay-200 group-hover:opacity-100 motion-reduce:opacity-100">
                  {linkLabel}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const sharedClass = cn(
    "group relative block cursor-pointer overflow-hidden bg-foreground shadow-lg",
    className
  )

  if (href) {
    return (
      <Link href={href} className={sharedClass}>
        {content}
      </Link>
    )
  }

  return <article className={sharedClass}>{content}</article>
}
