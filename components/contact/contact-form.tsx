"use client"

import { useActionState } from "react"

import {
  submitContactMessage,
  type ContactFormState,
} from "@/app/contact/actions"
import { siteConfig } from "@/lib/site-config"
import { contactPage } from "@/lib/contact-content"

const fieldClassName =
  "w-full rounded-lg border border-border bg-white px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"

const labelClassName =
  "mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"

export function ContactForm() {
  const { formSection } = contactPage
  const [state, formAction, pending] = useActionState<ContactFormState, FormData>(
    submitContactMessage,
    { status: "idle" }
  )

  if (state.status === "success") {
    return (
      <div className="mb-8 rounded-xl border border-[oklch(0.85_0.08_145)] bg-[oklch(0.96_0.04_145)] p-5 text-[oklch(0.35_0.1_145)]">
        <p className="mb-1 font-bold">Merci !</p>
        <p className="text-sm leading-relaxed">
          Votre message a été envoyé avec succès. Notre équipe vous répondra
          dans les plus brefs délais.
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      className="relative space-y-6 rounded-2xl border border-border/80 bg-muted/40 p-6 shadow-sm md:p-8"
    >
      {/* Champ piège anti-robots, invisible pour les visiteurs */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Site web</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" ? (
        <p
          role="alert"
          className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {state.message} Tél. : {siteConfig.contact.phone}
        </p>
      ) : null}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClassName}>
            Nom
          </label>
          <input
            id="contact-name"
            maxLength={120}
            name="name"
            defaultValue={state.fields?.name}
            type="text"
            required
            autoComplete="name"
            className={fieldClassName}
            placeholder="Votre nom complet"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClassName}>
            Téléphone
          </label>
          <input
            id="contact-phone"
            maxLength={40}
            name="phone"
            defaultValue={state.fields?.phone}
            type="tel"
            autoComplete="tel"
            className={fieldClassName}
            placeholder="+243 ..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className={labelClassName}>
            E-mail
          </label>
          <input
            id="contact-email"
            maxLength={200}
            name="email"
            defaultValue={state.fields?.email}
            type="email"
            required
            autoComplete="email"
            className={fieldClassName}
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className={labelClassName}>
            Sujet
          </label>
          <input
            id="contact-subject"
            maxLength={200}
            name="subject"
            defaultValue={state.fields?.subject}
            type="text"
            required
            className={fieldClassName}
            placeholder="Sujet du message"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="contact-message"
          minLength={10}
          maxLength={5000}
          name="message"
          defaultValue={state.fields?.message}
          rows={5}
          required
          className={`${fieldClassName} resize-y`}
          placeholder="Décrivez votre projet, votre besoin ou votre question."
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted-foreground md:max-w-xs">
          {formSection.privacyNote}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex disabled:cursor-wait disabled:opacity-70 items-center justify-center rounded-full bg-primary px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground shadow-lg transition-colors hover:bg-[oklch(78%_0.14_165)] hover:text-foreground md:text-sm"
        >
          {pending ? "Envoi en cours…" : formSection.submitLabel}
        </button>
      </div>
    </form>
  )
}
