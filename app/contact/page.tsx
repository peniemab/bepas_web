import type { Metadata } from "next"
import { BikeIcon, BusIcon, CarIcon, MailIcon, MapPinIcon, MotorbikeIcon, PersonStandingIcon, PhoneIcon } from "lucide-react"

import { ContactForm } from "@/components/contact/contact-form"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez BEPAS pour souscrire à une parcelle, obtenir une information ou poser votre question.",
}

export default function ContactPage() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.mapQuery)}`

  const accessTransportModes = [
    { label: "Voiture", Icon: CarIcon },
    { label: "Bus", Icon: BusIcon },
    { label: "Vélo", Icon: BikeIcon },
    { label: "Moto", Icon: MotorbikeIcon },
    { label: "À pied", Icon: PersonStandingIcon },
  ] as const

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Nous contacter
        </h1>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Envie de souscrire à une parcelle ? Un besoin d&apos;information ou
            une question spécifique ? Notre équipe est là pour vous
            accompagner.
          </p>
          <p className="font-medium text-foreground">
            Choisissez l&apos;option qui vous convient :
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneIcon />
              <a
                href={phoneHref}
                className="transition-colors hover:text-primary"
              >
                {siteConfig.contact.phone}
              </a>
            </CardTitle>
            <CardDescription>
              Appelez-nous pour échanger de vive voix avec notre équipe.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MailIcon />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition-colors hover:text-primary"
              >
                {siteConfig.contact.email}
              </a>
            </CardTitle>
            <CardDescription>
              Écrivez-nous directement par e-mail.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium text-foreground">
            Laissez-nous un message
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Remplissez le formulaire ci-dessous et nous reviendrons vers vous
            rapidement.
          </p>
        </div>
        <ContactForm />
      </div>

      <p className="text-base leading-relaxed text-muted-foreground">
        Nous vous répondrons dans les plus brefs délais !
      </p>

      <section className="flex flex-col gap-4 pb-40 sm:pb-36">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium text-foreground">
            Venir nous rencontrer
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              {siteConfig.contact.address}
            </a>
          </p>
        </div>

        <div className="relative rounded-xl border border-border">
          <div className="overflow-hidden rounded-xl">
            <iframe
              title="Localisation BEPAS sur Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.mapQuery)}&hl=fr&z=17&output=embed`}
              className="aspect-[4/3] w-full border-0 sm:aspect-video"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="absolute top-1/2 left-1/2 right-[calc(-1*((100vw-min(100vw,48rem))/2+1rem))] flex flex-col gap-2.5 rounded-tl-xl rounded-bl-xl border-t border-l border-border bg-background/95 p-4 shadow-lg supports-backdrop-filter:backdrop-blur-sm sm:right-[calc(-1*((100vw-min(100vw,48rem))/2+1.5rem))] sm:p-5 lg:right-[calc(-1*((100vw-min(100vw,48rem))/2+2rem))]">
            <p className="text-sm font-medium text-foreground sm:text-base">
              {siteConfig.contact.companyName}
            </p>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
            >
              <PhoneIcon className="size-4 shrink-0" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
            >
              <MailIcon className="size-4 shrink-0" />
              {siteConfig.contact.email}
            </a>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-sm leading-snug text-foreground transition-colors hover:text-primary"
            >
              <MapPinIcon className="mt-0.5 size-4 shrink-0" />
              {siteConfig.contact.avenue}
            </a>
            <div className="flex flex-col gap-1.5 border-t border-border pt-2.5">
              <p className="text-sm font-medium text-foreground underline">
                Accès
              </p>
              <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-xs leading-snug text-muted-foreground sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  {accessTransportModes.map(({ label, Icon }) => (
                    <span
                      key={label}
                      title={label}
                      className="inline-flex text-foreground/70"
                    >
                      <Icon className="size-3.5 sm:size-4" aria-hidden="true" />
                      <span className="sr-only">{label}</span>
                    </span>
                  ))}
                </span>
                {siteConfig.contact.accessSteps.map((step, index) => (
                  <span key={step} className="inline-flex items-center gap-1">
                    <span aria-hidden="true" className="text-foreground/40">
                      →
                    </span>
                    <span>{step}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
