import { projetCommunes, projets } from "@/lib/projets-content"
import { siteConfig } from "@/lib/site-config"
import { absoluteUrl } from "@/lib/site-url"

const GREETING = "Bonjour BEPAS,"

/** Message pré-rempli selon la page visitée, pour que l'équipe sache ce qui intéresse le visiteur */
export function whatsAppMessageForPath(pathname: string) {
  const [section, communeSlug, projetSlug] = pathname.split("/").filter(Boolean)

  if (section === "projets" && projetSlug) {
    const projet = projets.find(
      (item) => item.communeSlug === communeSlug && item.slug === projetSlug
    )
    if (projet) {
      return `${GREETING} je suis intéressé(e) par ${projet.name} (${projet.commune}). Pouvez-vous m'envoyer plus d'informations ?\n${absoluteUrl(pathname)}`
    }
  }

  if (section === "projets" && communeSlug) {
    const commune = projetCommunes.find((item) => item.slug === communeSlug)
    if (commune) {
      return `${GREETING} je cherche une parcelle à ${commune.name}. Quelles sont les disponibilités et les conditions de paiement ?`
    }
  }

  if (section === "nos-solutions") {
    return `${GREETING} je souhaite connaître vos offres de parcelles et de construction à crédit.`
  }

  return `${GREETING} je souhaite avoir des informations sur vos parcelles.`
}

export function whatsAppHref(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`
}
