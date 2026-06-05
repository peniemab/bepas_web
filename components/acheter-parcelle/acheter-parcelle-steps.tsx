import { acheterParcellePage } from "@/lib/acheter-parcelle-content"
import { cn } from "@/lib/utils"

export function AcheterParcelleSteps() {
  const { titleBefore, titleHighlight, lead, items } = acheterParcellePage.steps

  return (
    <section className="bg-muted/40 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-3 sm:mb-12">
          <h2 className="text-center text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] bg-clip-text text-transparent">
              {titleBefore}
            </span>{" "}
            {titleHighlight}
          </h2>
          <p className="text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>
        </div>

        <ol className="grid list-none gap-6 md:grid-cols-5 md:gap-4">
          {items.map((step, index) => (
            <li
              key={step.number}
              className={cn(
                "relative flex flex-col gap-3 rounded-2xl border border-border/50 bg-white p-5 shadow-xs",
                "md:min-h-[220px]"
              )}
            >
              <span className="text-3xl font-black text-primary/15 sm:text-4xl">
                {step.number}
              </span>
              <h3 className="text-base font-black leading-snug text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {index < items.length - 1 ? (
                <span
                  className="absolute top-1/2 -right-2 hidden h-px w-4 bg-border md:block lg:w-5"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
