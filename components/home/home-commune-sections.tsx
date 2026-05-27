import { homeCommunes } from "@/lib/home-content"

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
                className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
              >
                {commune.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {commune.description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
