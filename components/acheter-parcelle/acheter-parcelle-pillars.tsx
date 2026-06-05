import { CalendarIcon, LandmarkIcon, ShieldCheckIcon } from "lucide-react"

import { acheterParcellePage } from "@/lib/acheter-parcelle-content"

const pillarIcons = {
  calendar: CalendarIcon,
  landmark: LandmarkIcon,
  shield: ShieldCheckIcon,
} as const

export function AcheterParcellePillars() {
  const { title, lead, items } = acheterParcellePage.pillars

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-3 sm:mb-12">
        <h2 className="text-center text-2xl font-black tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        <p className="text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
      </div>

      <ul className="grid list-none gap-6 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = pillarIcons[item.icon]

          return (
            <li
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-border/50 bg-white p-6 shadow-xs"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="size-5 text-primary" strokeWidth={1.75} />
              </span>
              <h3 className="text-lg font-black text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
