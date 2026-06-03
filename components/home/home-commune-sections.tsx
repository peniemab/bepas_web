import Image from "next/image"
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
              <div className="mt-6 bg-white border border-border overflow-hidden rounded-xl shadow-sm">
                {"image" in commune && (
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={(commune as any).image}
                      alt={commune.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5 sm:p-6">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {commune.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
