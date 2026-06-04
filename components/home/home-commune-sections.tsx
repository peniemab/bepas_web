import Image from "next/image"
import { Check } from "lucide-react"

import { CommuneCtaLink } from "@/components/home/commune-cta-link"
import { homeCommunes } from "@/lib/home-content"
import { cn } from "@/lib/utils"

export function HomeCommuneSections() {
  return (
    <>
      {homeCommunes.map((commune, index) => (
        <section
          key={commune.sectionId}
          id={commune.sectionId}
          className="scroll-mt-20"
          aria-labelledby={`${commune.sectionId}-title`}
        >
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-10 lg:gap-14">
              {/* Gauche — titre + badges */}
              <div className="flex flex-col gap-3 md:w-2/5 md:sticky md:top-24 md:py-2">
                <h2
                  id={`${commune.sectionId}-title`}
                  className={cn(
                    "text-2xl font-black tracking-tight sm:text-3xl",
                    (commune as any).titleClass || "text-foreground"
                  )}
                >
                  {commune.title}
                </h2>
                {"badges" in commune && (
                  <ul className="mt-4 flex flex-col gap-3 sm:mt-5">
                    {((commune as any).badges as string[]).map((badge, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-base font-medium text-foreground">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-sm">
                          <Check className="size-3.5" strokeWidth={3} />
                        </span>
                        <span>{badge}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Droite — image + description */}
              <div className="mt-6 md:mt-0 md:w-3/5">
                <div className="bg-white border border-border overflow-hidden shadow-sm rounded-tr-[8rem]">
                  {"image" in commune && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-tr-[8rem]">
                      <Image
                        src={(commune as any).image}
                        alt={commune.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {commune.description}
                    </p>
                    <CommuneCtaLink
                      href={commune.cta.href}
                      label={commune.cta.label}
                      colorFrom={commune.blockColors.from}
                      colorTo={commune.blockColors.to}
                      pulseDelay={index * 0.6}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
