import { FileDownIcon } from "lucide-react"

import { ImpactStatIconBadge } from "@/components/home/impact-stat-icon"
import { Button } from "@/components/ui/button"
import { homeNotreImpact } from "@/lib/home-content"
import { getImpactStats } from "@/lib/impact-stats"

export async function NotreImpactSection() {
  const { sectionId, title, lead, reportCard, downloadCta } = homeNotreImpact
  const { stats, subtitle } = await getImpactStats()

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

        <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col items-start gap-3 rounded-2xl border border-border/60 bg-card p-6 text-left shadow-xs sm:p-8"
            >
              <div className="flex w-full items-center justify-start gap-3 sm:gap-4">
                <ImpactStatIconBadge icon={stat.icon} className="shrink-0" />
                <div className="text-3xl font-black text-primary sm:text-4xl">
                  {stat.value}
                </div>
              </div>
              <p className="w-full text-sm font-medium leading-tight text-muted-foreground">
                {stat.label}
              </p>
            </li>
          ))}

          <li className="flex h-full flex-col items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 text-left shadow-xs sm:p-8">
            <p className="w-full text-lg font-black leading-snug text-primary sm:text-xl">
              {reportCard.title}
            </p>

            <Button
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-auto w-full gap-2 px-4 py-2.5 text-sm font-semibold sm:w-auto"
              render={
                <a
                  href={downloadCta.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <FileDownIcon className="size-4 shrink-0" aria-hidden />
              {downloadCta.label}
            </Button>
          </li>
        </ul>
      </div>
    </section>
  )
}
