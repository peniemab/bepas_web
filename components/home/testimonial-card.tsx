import Image from "next/image"

export type TestimonialItem = {
  quote: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  name: string
  profession: string
  role: string
}

export function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[oklch(72%_0.1_86.047)]/20 bg-white/90 shadow-xs md:flex-row md:items-stretch">
      <div className="relative aspect-[4/3] w-full shrink-0 sm:aspect-[16/10] md:aspect-auto md:h-auto md:min-h-full md:w-[38%] md:max-w-[220px] lg:max-w-[260px]">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 768px) 240px, 100vw"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-4 p-5 sm:p-6 md:p-6 lg:p-8">
        <blockquote className="flex flex-1 flex-col">
          <p className="text-sm leading-relaxed text-foreground sm:text-base">
            &ldquo;{item.quote}&rdquo;
          </p>
        </blockquote>

        <footer className="flex flex-col gap-0.5 border-t border-[oklch(72%_0.1_86.047)]/20 pt-4">
          <cite className="not-italic text-base font-black text-foreground">
            {item.name}
          </cite>
          <p className="text-sm font-medium text-foreground/90">{item.profession}</p>
          <p className="text-xs font-medium text-muted-foreground sm:text-sm">
            {item.role}
          </p>
        </footer>
      </div>
    </article>
  )
}
