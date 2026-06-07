import { ArrowRightIcon } from "lucide-react"

import { homeCommunes, homeIntroHeading } from "@/lib/home-content"
import { cn } from "@/lib/utils"

export function HomeIntroSection() {
  return (
    <section className="mx-auto w-full max-w-7xl bg-background px-4 pt-10 pb-2 sm:px-6 sm:pt-12 sm:pb-4 lg:px-8">
      <h2 className="text-left text-2xl font-black tracking-tight sm:text-3xl md:text-center lg:text-4xl">
        <span className="bg-gradient-to-r from-[oklch(76.9%_0.188_70.08)] to-[oklch(58%_0.17_70.08)] bg-clip-text text-transparent">
          {homeIntroHeading.highlight}
        </span>{" "}
        <span className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] bg-clip-text text-transparent">
          {homeIntroHeading.rest}
        </span>
      </h2>

      <div className="mt-4 grid grid-cols-3 gap-[0.5cm] sm:mt-5 lg:mt-6 lg:hidden">
        {homeCommunes.map((commune) => (
          <a
            key={commune.sectionId}
            href={`#${commune.sectionId}`}
            className={cn(
              "relative flex min-h-[7.5rem] cursor-pointer items-center justify-center rounded-xl px-2 py-4 text-center text-xs font-bold leading-tight shadow-sm transition-opacity hover:opacity-95 active:opacity-90 sm:min-h-[8.5rem] sm:text-sm md:min-h-[9.5rem] lg:min-h-[10.5rem] lg:text-base",
              commune.blockClass
            )}
            aria-label={`Aller à la section ${commune.name}`}
          >
            <div className="flex w-full flex-col gap-1 px-1 text-justify">
              <span>{commune.name}</span>
              {"locationDetail" in commune && (
                <span className="text-[10px] font-medium leading-snug opacity-90 sm:text-xs text-justify">
                  {(commune as any).locationDetail}
                </span>
              )}
            </div>
            <span className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-full bg-white sm:top-2 sm:right-2 sm:size-7 lg:top-2.5 lg:right-2.5 lg:size-8">
              <ArrowRightIcon
                className="size-3.5 shrink-0 text-[oklch(48%_0.12_242)] sm:size-4 lg:size-[1.125rem]"
                aria-hidden
              />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
