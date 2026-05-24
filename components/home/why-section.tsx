import { CheckCircle2Icon } from "lucide-react"

import { homeWhy } from "@/lib/home-content"

export function WhySection() {
  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            Pourquoi choisir BEPAS ?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Une approche simple, transparente et adaptée à la réalité de
            Kinshasa et de la diaspora congolaise.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeWhy.map((item) => (
            <li key={item.title} className="flex flex-col">
              <div className="flex items-start gap-3">
                <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
