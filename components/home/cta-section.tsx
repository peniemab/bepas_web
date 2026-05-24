import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { homeCta } from "@/lib/home-content"

export function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl">
        <div className="flex flex-col lg:flex-row lg:items-end">
          <div className="relative order-first h-80 w-full sm:h-96 lg:h-[520px] lg:w-[42%] lg:shrink-0">
            <Image
              src={homeCta.image.src}
              alt={homeCta.image.alt}
              fill
              className="object-cover object-[50%_58%] sm:object-[50%_56%] lg:object-[50%_54%]"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-[oklch(65%_0.14_165.612)]/90 lg:w-2/5" />
          </div>

          <div className="flex flex-col items-start gap-6 bg-gradient-to-r from-[oklch(65%_0.14_165.612)] to-[oklch(50.8%_0.118_165.612)] px-6 py-10 text-primary-foreground sm:px-10 sm:py-12 lg:min-h-[320px] lg:w-[58%] lg:flex-1 lg:justify-center">
            <div className="flex max-w-2xl flex-col gap-3">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                {homeCta.title}
              </h2>
              <p className="text-base leading-relaxed text-primary-foreground/90">
                {homeCta.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                render={<Link href={homeCta.ctaPrimary.href} />}
              >
                {homeCta.ctaPrimary.label}
              </Button>
              <Button
                nativeButton={false}
                size="lg"
                render={<Link href={homeCta.ctaSecondary.href} />}
              >
                {homeCta.ctaSecondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
