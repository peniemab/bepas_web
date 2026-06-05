import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { acheterParcellePage } from "@/lib/acheter-parcelle-content"
import {
  communeTarifBarSeparatorClass,
  communeTarifBulletBgClass,
  communeTarifButtonClass,
  communeTarifButtonLiquidColors,
  communeTarifPrixBarreClass,
  communeTarifSiteColorClass,
  formatTarifUsd,
  getCommuneTarifNotebookCellClass,
  parcelleTarifCards,
} from "@/lib/tarifs-bepas"
import { cn } from "@/lib/utils"

export function AcheterParcellePricing() {
  const {
    acompteLabel,
    financingTitle,
    financing24,
    financingSingle,
    cta,
    infoBanner,
  } = acheterParcellePage.pricing

  return (
    <section className="bg-muted/30 py-12 sm:py-16 lg:py-20">
      <ul
        className={cn(
          "grid w-full list-none gap-0 overflow-visible bg-white sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {parcelleTarifCards.map((card, index) => (
          <li
            key={card.id}
            className={cn(
              "group relative flex flex-col bg-white",
              "transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "hover:z-20 hover:-translate-y-1.5 hover:scale-[1.045]",
              "hover:shadow-[0_24px_48px_-20px_oklch(78%_0.045_234_/_0.28)]",
              "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100",
              getCommuneTarifNotebookCellClass(
                index,
                parcelleTarifCards.length
              )
            )}
          >
              <div className="px-5 pt-2 sm:px-6 sm:pt-2.5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-md">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 px-5 pb-5 sm:px-6 sm:pb-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-black leading-snug">
                    <span className="text-foreground">{card.communeLabel}</span>
                    {card.siteLabel ? (
                      <>
                        ,{" "}
                        <span
                          className={cn(
                            communeTarifSiteColorClass[card.communeZone]
                          )}
                        >
                          {card.siteLabel}
                        </span>
                      </>
                    ) : null}
                  </h3>
                  <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                </div>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:flex-nowrap sm:gap-x-2.5">
                  <p
                    className={cn(
                      "shrink-0 whitespace-nowrap text-lg font-semibold leading-none line-through sm:text-xl",
                      communeTarifPrixBarreClass[card.communeZone]
                    )}
                  >
                    {formatTarifUsd(card.prixBarre)}
                  </p>
                  <p className="shrink-0 whitespace-nowrap text-xl font-black leading-none tracking-tight text-foreground sm:text-2xl">
                    {formatTarifUsd(card.total)}
                  </p>
                  <span
                    className={cn(
                      "h-7 w-px shrink-0 sm:h-8",
                      communeTarifBarSeparatorClass[card.communeZone]
                    )}
                    aria-hidden
                  />
                  <p className="shrink-0 whitespace-nowrap text-sm font-medium leading-none text-foreground sm:text-base">
                    {acompteLabel}{" "}
                    <span className="font-semibold">
                      {formatTarifUsd(card.acompte)}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-2 border-t border-border/40 pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {financingTitle}
                  </p>
                  <ul className="flex list-none flex-col gap-2">
                    <li className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <span
                        className={cn(
                          "flex size-5 shrink-0 items-center justify-center rounded-full",
                          communeTarifBulletBgClass[card.communeZone]
                        )}
                        aria-hidden
                      >
                        <Check className="size-3 text-white" strokeWidth={3} />
                      </span>
                      {financing24}
                    </li>
                    <li
                      className={cn(
                        "h-px w-full opacity-30",
                        communeTarifBarSeparatorClass[card.communeZone]
                      )}
                      aria-hidden
                    />
                    <li className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <span
                        className={cn(
                          "flex size-5 shrink-0 items-center justify-center rounded-full",
                          communeTarifBulletBgClass[card.communeZone]
                        )}
                        aria-hidden
                      >
                        <Check className="size-3 text-white" strokeWidth={3} />
                      </span>
                      {financingSingle}
                    </li>
                  </ul>
                </div>

                <Button
                  nativeButton={false}
                  variant="outline"
                  liquidColors={
                    communeTarifButtonLiquidColors[card.communeZone]
                  }
                  className={cn(
                    "mt-1 h-auto w-fit self-start px-4 py-2.5 text-sm font-semibold",
                    communeTarifButtonClass[card.communeZone]
                  )}
                  render={<Link href={cta.href} />}
                >
                  {cta.label}
                </Button>
              </div>
            </li>
          ))}
      </ul>

      <div className="mt-12 px-5 sm:mt-14 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 text-left sm:items-center sm:text-center">
          <h3 className="text-xl font-black tracking-tight text-foreground sm:text-2xl">
            {infoBanner.title}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground">
            {infoBanner.lead}
          </p>
          <Button
            nativeButton={false}
            size="lg"
            className="mt-1 h-auto w-fit self-start px-6 py-2.5 text-sm font-semibold sm:self-center"
            render={<Link href={infoBanner.cta.href} />}
          >
            {infoBanner.cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
