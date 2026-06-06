"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { ConstruireProjectCard } from "@/components/construire-parcelle/construire-project-card"
import { ConstruireScrollReveal } from "@/components/construire-parcelle/construire-scroll-reveal"
import { construireParcellePage } from "@/lib/construire-parcelle-content"
import { cn } from "@/lib/utils"

export function ConstruireParcelleModels() {
  const { sectionId, eyebrow, title, lead, items } = construireParcellePage.models
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "")
  const activeModel = items.find((model) => model.id === activeId) ?? items[0]

  return (
    <section
      id={sectionId}
      className="scroll-mt-20 border-t border-border/40 bg-muted/30 py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <ConstruireScrollReveal>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {eyebrow}
            </span>
          </ConstruireScrollReveal>
          <ConstruireScrollReveal delay={150}>
            <h2 className="text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {lead}
            </p>
          </ConstruireScrollReveal>
        </div>

        <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((model, index) => (
            <li key={model.id}>
              <ConstruireScrollReveal delay={index * 60}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveId(model.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      setActiveId(model.id)
                    }
                  }}
                  className={cn(
                    "w-full cursor-pointer rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    activeId === model.id && "ring-2 ring-primary ring-offset-2"
                  )}
                >
                  <ConstruireProjectCard
                    image={model.image}
                    category={model.type}
                    title={model.name.replace(/^Modèle\s+/i, "")}
                    summary={model.description}
                    priority={index === 0}
                    imageSizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </ConstruireScrollReveal>
            </li>
          ))}
        </ul>

        {activeModel ? (
          <ConstruireScrollReveal delay={200} className="mt-10 lg:mt-12">
            <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {activeModel.type}
              </p>
              <h3 className="mt-2 text-xl font-black text-foreground sm:text-2xl">
                {activeModel.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                {activeModel.specs}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {activeModel.description}
              </p>
              <div className="mt-5 border-t border-border/50 pt-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                  Composition de la maison
                </p>
                <ul className="grid list-none gap-2 sm:grid-cols-2">
                  {activeModel.rooms.map((room) => (
                    <li
                      key={room}
                      className="flex items-start gap-2 text-sm text-foreground/85"
                    >
                      <span
                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[oklch(65%_0.14_165.612)]"
                        aria-hidden
                      >
                        <Check className="size-3 text-white" strokeWidth={3} />
                      </span>
                      {room}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ConstruireScrollReveal>
        ) : null}
      </div>
    </section>
  )
}
