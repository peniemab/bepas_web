"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-muted/30 p-6">
        <p className="font-medium text-foreground">Message envoyé</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Merci pour votre message. Notre équipe vous répondra dans les plus
          brefs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="contact-name">Nom complet</FieldLabel>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              placeholder="Votre nom"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="contact-phone">Téléphone</FieldLabel>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+243 ..."
            />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="contact-email">E-mail</FieldLabel>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="votre@email.com"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-subject">Sujet</FieldLabel>
          <Input
            id="contact-subject"
            name="subject"
            required
            placeholder="Souscription parcelle, information, autre..."
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            required
            placeholder="Décrivez votre demande..."
            rows={5}
          />
        </Field>

        <Button type="submit">Envoyer le message</Button>
      </FieldGroup>
    </form>
  )
}
