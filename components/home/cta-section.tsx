import Link from "next/link"

import { Button } from "@/components/ui/button"
import { homeCta } from "@/lib/home-content"

export function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start gap-6 rounded-2xl bg-gradient-to-r from-[oklch(65%_0.14_165.612)] to-[oklch(50.8%_0.118_165.612)] px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
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
    </section>
  )
}
