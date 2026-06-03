import { Check } from "lucide-react"
import { homeCommunes } from "@/lib/home-content"
import { cn } from "@/lib/utils"

export function HomeCommuneSections() {
  return (
    <>
      {homeCommunes.map((commune) => (
        <section
          key={commune.sectionId}
          id={commune.sectionId}
          className="scroll-mt-20 border-b border-border"
          aria-labelledby={`${commune.sectionId}-title`}
        >
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div className="flex max-w-2xl flex-col gap-3">
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
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5">
                {commune.description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
