import { ImpactStatIconBadge } from "@/components/home/impact-stat-icon"
import { Button } from "@/components/ui/button"
import { homeNotreImpact } from "@/lib/home-content"
import { getImpactStats } from "@/lib/impact-stats"
import { cn } from "@/lib/utils"

const impactBlockBase =
  "flex flex-col items-start rounded-2xl border p-6 text-left shadow-xs sm:p-8"

export async function NotreImpactSection() {
  const { sectionId, title, lead, reportCard, downloadCta, blockTints } =
    homeNotreImpact
  const { stats, activeSites, subtitle } = await getImpactStats()

  const [familiesStat, womenStat] = stats

  return (
    <section
      id={sectionId}
      className="scroll-mt-20 bg-muted/40 py-12 sm:py-16 lg:py-20"
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col gap-3 sm:mb-14">
          <h2
            id={`${sectionId}-title`}
            className="text-center text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            <span className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
          <p className="text-center text-sm leading-relaxed text-muted-foreground/90 sm:text-base">
            {lead}
          </p>
        </div>

        <ul
          className={cn(
            "grid list-none gap-6",
            "sm:grid-cols-2",
            "lg:grid-cols-3 lg:grid-rows-2 lg:items-stretch"
          )}
        >
          {familiesStat ? (
            <li
              className={cn(
                impactBlockBase,
                "gap-3",
                blockTints[familiesStat.tint],
                "lg:col-start-1 lg:row-start-1"
              )}
            >
              <div className="flex w-full items-center justify-start gap-3 sm:gap-4">
                <ImpactStatIconBadge icon={familiesStat.icon} className="shrink-0" />
                <div className="text-3xl font-black text-primary sm:text-4xl">
                  {familiesStat.value}
                </div>
              </div>
              <p className="w-full text-sm font-medium leading-tight text-muted-foreground">
                {familiesStat.label}
              </p>
            </li>
          ) : null}

          {womenStat ? (
            <li
              className={cn(
                impactBlockBase,
                "gap-3",
                blockTints[womenStat.tint],
                "lg:col-start-2 lg:row-start-1"
              )}
            >
              <div className="flex w-full items-center justify-start gap-3 sm:gap-4">
                <ImpactStatIconBadge icon={womenStat.icon} className="shrink-0" />
                <div className="text-3xl font-black text-primary sm:text-4xl">
                  {womenStat.value}
                </div>
              </div>
              <p className="w-full text-sm font-medium leading-tight text-muted-foreground">
                {womenStat.label}
              </p>
            </li>
          ) : null}

          <li
            className={cn(
              impactBlockBase,
              "gap-4 sm:col-span-2",
              blockTints.sites,
              "lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2"
            )}
          >
            <div className="flex w-full flex-nowrap items-center gap-3 sm:gap-4">
              <ImpactStatIconBadge icon="sites" className="shrink-0" />
              <p className="min-w-0 text-base font-black leading-tight text-foreground sm:text-lg">
                {activeSites.title}
              </p>
            </div>

            <ul className="grid w-full flex-1 grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {activeSites.zones.map((zone) => (
                <li
                  key={zone.name}
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-sm",
                    zone.active
                      ? "border-[oklch(55%_0.1_163)]/30 bg-white/70"
                      : "border-border/40 bg-white/40 text-muted-foreground"
                  )}
                >
                  <span className="font-semibold text-foreground">{zone.name}</span>
                  <span
                    className={cn(
                      "tabular-nums font-black",
                      zone.active ? "text-[oklch(50%_0.12_163)]" : "text-muted-foreground"
                    )}
                  >
                    {zone.active
                      ? zone.count.toLocaleString("fr-FR")
                      : "—"}
                  </span>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={cn(
              impactBlockBase,
              "gap-4 sm:col-span-2",
              "lg:col-span-2 lg:col-start-1 lg:row-start-2",
              "lg:justify-between lg:gap-6",
              blockTints[reportCard.tint]
            )}
          >
            <p className="w-full text-lg font-black leading-snug text-primary-foreground sm:text-xl">
              {reportCard.title}
            </p>

            <Button
              nativeButton={false}
              variant="outline"
              size="lg"
              liquid={false}
              className="mt-auto h-auto w-full gap-2 border-transparent bg-white px-4 py-2.5 text-sm font-semibold text-primary hover:bg-white hover:text-primary active:bg-white active:text-primary focus-visible:bg-white"
              render={
                <a
                  href={downloadCta.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {downloadCta.label}
            </Button>
          </li>
        </ul>
      </div>
    </section>
  )
}
