import { PartnersMarqueeRow } from "@/components/home/partners-marquee-row"
import { homePartners } from "@/lib/home-content"

export function PartnersSection() {
  const { sectionId, title, rows } = homePartners

  return (
    <section
      id={sectionId}
      className="scroll-mt-20 bg-white py-12 sm:py-16 lg:py-20"
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="mx-auto mb-10 max-w-7xl px-4 sm:mb-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          <h2
            id={`${sectionId}-title`}
            className="text-center text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            {title}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5" aria-label="Logos partenaires">
        {rows.map((row) => (
          <PartnersMarqueeRow
            key={row.direction}
            logos={row.logos}
            direction={row.direction}
          />
        ))}
      </div>
    </section>
  )
}
