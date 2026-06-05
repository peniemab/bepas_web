import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { acheterParcellePage } from "@/lib/acheter-parcelle-content"
import { homeCommunes } from "@/lib/home-content"
import {
  communeTarifButtonClass,
  communeTarifButtonLiquidColors,
  getCommuneAcheterNotebookCellClass,
  type CommuneTarifZone,
} from "@/lib/tarifs-bepas"
import { cn } from "@/lib/utils"

const communeZoneBySectionId: Record<string, CommuneTarifZone> = {
  nsele: "nsele",
  maluku: "maluku",
  "mont-ngafula": "mont-ngafula",
}

export function AcheterParcelleCommunes() {
  const { title, lead, cta } = acheterParcellePage.communes

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto mb-10 max-w-7xl px-4 sm:mb-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          <h2 className="text-center text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>
        </div>
      </div>

      <ul
        className={cn(
          "grid w-full list-none gap-0 overflow-visible bg-white md:grid-cols-3"
        )}
      >
        {homeCommunes.map((commune, index) => {
          const communeZone = communeZoneBySectionId[commune.sectionId]

          return (
            <li
              key={commune.sectionId}
              className={cn(
                "group relative flex flex-col bg-white",
                "transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:z-20 hover:-translate-y-1.5 hover:scale-[1.045]",
                "hover:shadow-[0_24px_48px_-20px_oklch(78%_0.045_234_/_0.28)]",
                "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100",
                getCommuneAcheterNotebookCellClass(index, homeCommunes.length)
              )}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={commune.image}
                  alt={commune.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-10">
                  <p
                    className={cn(
                      "text-lg font-black tracking-tight text-white sm:text-xl",
                      commune.titleClass
                    )}
                  >
                    {commune.name}
                  </p>
                  {"locationDetail" in commune ? (
                    <p className="mt-1 text-xs text-white/85 sm:text-sm">
                      {commune.locationDetail}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {commune.subtitle}
                </p>
                <Button
                  nativeButton={false}
                  variant="outline"
                  liquidColors={communeTarifButtonLiquidColors[communeZone]}
                  className={cn(
                    "mt-auto h-auto w-full gap-2 py-2.5 text-sm font-semibold",
                    communeTarifButtonClass[communeZone]
                  )}
                  render={<Link href={cta.href} />}
                >
                  {cta.label}
                  <ArrowRightIcon className="size-4" aria-hidden />
                </Button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
