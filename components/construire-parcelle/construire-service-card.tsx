import Image from "next/image"

import { cn } from "@/lib/utils"

type ConstruireServiceCardProps = {
  image: { src: string; alt: string }
  title: string
  className?: string
}

export function ConstruireServiceCard({
  image,
  title,
  className,
}: ConstruireServiceCardProps) {
  return (
    <div
      className={cn(
        "block cursor-default overflow-hidden rounded-xl border border-border/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className
      )}
    >
      <div className="relative h-44 w-full overflow-hidden bg-muted">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="px-5 py-4 text-center">
        <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-foreground md:text-sm">
          {title}
        </h3>
      </div>
    </div>
  )
}
