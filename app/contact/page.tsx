import Image from "next/image"
import type { Metadata } from "next"

import { ContactForm } from "@/components/contact/contact-form"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactMapSection } from "@/components/contact/contact-map-section"
import { contactPage } from "@/lib/contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez BEPAS pour souscrire à une parcelle, obtenir une information ou poser votre question.",
}

export default function ContactPage() {
  const { formSection, introImage, serviceCard } = contactPage

  return (
    <>
      <ContactHero />

      <section className="parallax-content-overlap bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted shadow-2xl">
                <div className="relative flex min-h-[360px] w-full items-center justify-center md:min-h-[420px]">
                  <Image
                    src={introImage.src}
                    alt={introImage.alt}
                    width={introImage.width}
                    height={introImage.height}
                    className="relative h-auto max-h-[480px] w-auto object-contain"
                    style={{ width: "auto", height: "auto" }}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl bg-primary p-5 text-primary-foreground shadow-xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(78%_0.14_165)]">
                  {serviceCard.eyebrow}
                </p>
                <p className="text-sm leading-relaxed">{serviceCard.text}</p>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-black uppercase tracking-tight text-foreground md:text-3xl">
                  {formSection.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {formSection.lead}
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ContactMapSection />
    </>
  )
}
