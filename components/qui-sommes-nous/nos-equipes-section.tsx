import Link from "next/link"

import { Button } from "@/components/ui/button"
import { notreHistoirePage } from "@/lib/notre-histoire-content"
import {
  quiSommesNousPage,
  quiSommesNousSectionIds,
} from "@/lib/qui-sommes-nous-content"
import {
  communeTarifBulletBgClass,
  communeTarifRoleHoverClass,
  communeTarifTopBandClass,
  type CommuneTarifZone,
} from "@/lib/tarifs-bepas"
import { cn } from "@/lib/utils"

const equipeDepartmentZones: CommuneTarifZone[] = [
  "nsele",
  "maluku",
  "mont-ngafula",
  "nsele",
]

export function NosEquipesSection() {
  const { title, lead, departments } = quiSommesNousPage.equipes
  const { closing, cta } = notreHistoirePage

  return (
    <section
      id={quiSommesNousSectionIds.nosEquipes}
      className="scroll-mt-20 border-b border-border bg-white"
      aria-labelledby={`${quiSommesNousSectionIds.nosEquipes}-title`}
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-16 text-center">
          <h2
            id={`${quiSommesNousSectionIds.nosEquipes}-title`}
            className="mb-6 text-3xl font-black uppercase tracking-tight text-primary md:text-4xl"
          >
            {title}
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {lead}
          </p>
        </div>

        <div className="space-y-12">
          {departments.map((department, index) => {
            const zone = equipeDepartmentZones[index] ?? "nsele"

            return (
            <article
              key={department.name}
              className={cn(
                "overflow-hidden rounded-lg border border-border/60 border-t-4 bg-white shadow-lg",
                communeTarifTopBandClass[zone]
              )}
            >
              <div className="border-b border-border/60 bg-muted/40 px-6 py-5">
                <h3 className="text-lg font-black uppercase tracking-wide text-foreground md:text-xl">
                  {department.name}
                </h3>
              </div>
              <div className="p-6 md:p-8">
                <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-2">
                  {department.roles.map((role) => (
                    <li
                      key={role}
                      className={cn(
                        "flex cursor-default items-center rounded-md bg-muted/30 p-3 transition-colors",
                        communeTarifRoleHoverClass[zone]
                      )}
                    >
                      <span
                        className={cn(
                          "mr-3 size-2 shrink-0 rounded-full",
                          communeTarifBulletBgClass[zone]
                        )}
                        aria-hidden
                      />
                      <span className="font-medium text-foreground/90">
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            )
          })}
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4 text-center md:mx-auto md:items-center">
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {closing.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {closing.text}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="flex flex-col items-start gap-6 rounded-lg bg-gradient-to-r from-[oklch(65%_0.14_165.612)] to-[oklch(50.8%_0.118_165.612)] px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              {cta.title}
            </h2>
            <p className="text-base leading-relaxed text-primary-foreground/90">
              {cta.description}
            </p>
          </div>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            liquidColors={{
              from: "oklch(100% 0 0 / 0.55)",
              to: "white",
            }}
            className="btn-liquid-invert border-white/40 bg-transparent text-white hover:bg-transparent hover:text-white"
            render={<Link href={cta.href} />}
          >
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
