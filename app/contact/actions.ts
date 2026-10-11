"use server"

import { getSupabasePublicClient, isSupabaseConfigured } from "@/lib/supabase/public"

export type ContactFormState = {
  status: "idle" | "success" | "error"
  message?: string
  /** Valeurs renvoyées en cas d'erreur pour ne pas vider le formulaire */
  fields?: Partial<Record<ContactField, string>>
}

type ContactField = "name" | "email" | "phone" | "subject" | "message"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function readField(formData: FormData, name: string) {
  const value = formData.get(name)
  return typeof value === "string" ? value.trim() : ""
}

/** Enregistre le message dans Supabase (table contact_messages, lue par bepas_log). */
export async function submitContactMessage(
  _previous: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Champ piège invisible : rempli uniquement par les robots
  if (readField(formData, "website")) {
    return { status: "success" }
  }

  const name = readField(formData, "name")
  const email = readField(formData, "email")
  const phone = readField(formData, "phone")
  const subject = readField(formData, "subject")
  const message = readField(formData, "message")

  const fields = { name, email, phone, subject, message }

  if (
    name.length < 2 ||
    name.length > 120 ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 200 ||
    phone.length > 40 ||
    subject.length < 2 ||
    subject.length > 200 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return {
      status: "error",
      message:
        "Merci de vérifier les champs : nom, e-mail valide, sujet et un message d'au moins 10 caractères.",
      fields,
    }
  }

  if (!isSupabaseConfigured()) {
    console.error("[contact] Supabase non configuré")
    return {
      status: "error",
      message: "L'envoi est momentanément indisponible. Appelez-nous ou écrivez-nous par e-mail.",
      fields,
    }
  }

  const { error } = await getSupabasePublicClient()
    .from("contact_messages")
    .insert({ name, email, phone: phone || null, subject, message })

  if (error) {
    console.error("[contact]", error.message)
    return {
      status: "error",
      message: "L'envoi a échoué. Réessayez dans un instant ou appelez-nous directement.",
      fields,
    }
  }

  return { status: "success" }
}
