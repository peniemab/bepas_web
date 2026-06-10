import type { Metadata } from "next"

import { siteConfig } from "@/lib/site-config"
import { absoluteUrl } from "@/lib/site-url"

export const defaultSeoKeywords = [
  "BEPAS",
  "BEPAS SARL",
  "Bureau d'Etude des Projets d'Afrique",
  "parcelles Kinshasa",
  "terrain Kinshasa",
  "acheter parcelle Kinshasa",
  "parcelle à crédit RDC",
  "lotissement Kinshasa",
  "Maluku",
  "N'sele",
  "Mont Ngafula",
  "immobilier Kinshasa",
] as const

export const defaultSiteDescription =
  "BEPAS SARL — Bureau d'Etude des Projets d'Afrique : parcelles à crédit à Kinshasa (Maluku, N'sele, Mont Ngafula), sécurisation foncière et accompagnement à la construction."

type PageSeoInput = {
  title: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
}

/** Métadonnées cohérentes par page (titre, description, canonical, Open Graph). */
export function createPageMetadata({
  title,
  description = defaultSiteDescription,
  path = "/",
  image = "/BEPAS.jpg",
  noIndex = false,
}: PageSeoInput): Metadata {
  const canonical = absoluteUrl(path)
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image)

  return {
    title: { absolute: title },
    description,
    keywords: [...defaultSeoKeywords],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "fr_CD",
      siteName: siteConfig.companyName,
      title,
      description,
      url: canonical,
      images: [{ url: imageUrl, alt: siteConfig.companyName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}
