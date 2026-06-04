import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ParcellesCtaFaq } from "@/components/home/parcelles-cta-faq"
import { ParcellesCtaSlider } from "@/components/home/parcelles-cta-slider"
import { Button } from "@/components/ui/button"
import { homeParcellesCta } from "@/lib/home-content"

export function ParcellesCtaSection() {
  const { titleBefore, titleHighlight, description, cta, slides, slideIntervalMs } =
    homeParcellesCta

  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      aria-labelledby="parcelles-cta-title"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:gap-8 sm:px-6 md:gap-10 lg:px-8">
        <div className="flex flex-col gap-6 md:gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-12">
        <div className="flex w-full flex-col items-start gap-6 text-left lg:order-2 lg:justify-center">
          <div className="flex w-full max-w-3xl flex-col items-start gap-6 md:mx-auto md:max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex w-full flex-col gap-3">
              <h2
                id="parcelles-cta-title"
                className="text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl"
              >
                {titleBefore}
                <span className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            </div>

            <Button
              nativeButton={false}
              className="h-auto gap-2 px-6 py-2.5 text-sm font-semibold"
              render={<Link href={cta.href} />}
            >
              {cta.label}
              <ArrowRightIcon
                className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
                aria-hidden
              />
            </Button>
          </div>
        </div>

        <div className="w-full min-w-0 lg:order-1">
          <ParcellesCtaSlider slides={slides} intervalMs={slideIntervalMs} />
        </div>
        </div>

        <ParcellesCtaFaq />
      </div>
    </section>
  )
}
