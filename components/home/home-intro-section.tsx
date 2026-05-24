import { ArrowRightIcon } from "lucide-react"

import { homeCommunesMobile, homeIntroHeading } from "@/lib/home-content"
import { cn } from "@/lib/utils"

export function HomeIntroSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-2 sm:px-6 sm:pb-4 lg:px-8">
      <h2 className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
        <span className="bg-gradient-to-r from-[oklch(76.9%_0.188_70.08)] to-[oklch(58%_0.17_70.08)] bg-clip-text text-transparent">
          {homeIntroHeading.highlight}
        </span>{" "}
        <span className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] bg-clip-text text-transparent">
          {homeIntroHeading.rest}
        </span>
      </h2>

      <div className="mt-4 grid grid-cols-3 gap-[0.5cm] sm:mt-5 lg:mt-6">
        {homeCommunesMobile.map((commune) => (
          <div
            key={commune.name}
            className={cn(
              "relative flex min-h-[7.5rem] items-center justify-center rounded-xl px-2 py-4 text-center text-xs font-bold leading-tight shadow-sm sm:min-h-[8.5rem] sm:text-sm md:min-h-[9.5rem] lg:min-h-[10.5rem] lg:text-base",
              commune.blockClass
            )}
          >
            <span className="px-0.5">{commune.name}</span>
            <span className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-full bg-white sm:top-2 sm:right-2 sm:size-7 lg:top-2.5 lg:right-2.5 lg:size-8">
              <ArrowRightIcon
                className="size-3.5 shrink-0 text-[oklch(48%_0.12_242)] sm:size-4 lg:size-[1.125rem]"
                aria-hidden
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
