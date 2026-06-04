import { TestimonialsSlider } from "@/components/home/testimonials-slider"
import { homeTestimonials } from "@/lib/home-content"

/** Fond léger Maluku — aligné bloc femmes / commune Maluku */
const sectionBgClass = "bg-[oklch(96.5%_0.028_86.047)]"

export function TestimonialsSection() {
  const { sectionId, titleBefore, titleHighlight, items } = homeTestimonials

  return (
    <section
      id={sectionId}
      className={`scroll-mt-20 ${sectionBgClass} py-12 sm:py-16 lg:py-20`}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id={`${sectionId}-title`}
          className="mb-10 text-2xl font-black tracking-tight text-foreground sm:mb-12 sm:text-3xl lg:text-4xl"
        >
          {titleBefore}
          <span className="bg-gradient-to-r from-[oklch(79.5%_0.184_86.047)] to-[oklch(62%_0.16_86.047)] bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        </h2>

        <TestimonialsSlider items={items} />
      </div>
    </section>
  )
}
