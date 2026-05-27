import { siteConfig } from "@/lib/site-config"

export {
  quiSommesNousHref,
  quiSommesNousSectionIds,
} from "@/lib/site-config"

export const quiSommesNousPage = {
  meta: {
    title: "Qui sommes-nous",
    description:
      "Découvrez BEPAS : notre histoire, nos bureaux à Kinshasa, nos équipes et nos partenaires.",
  },
  nosBureaux: {
    title: "Nos bureaux",
    lead: "BEPAS vous accueille au cœur de Kinshasa-Gombe, dans un lieu facilement accessible.",
    paragraphs: [
      "Installée aux Galeries Présidentielles, l'entreprise dispose d'un point de contact permanent pour vous conseiller sur nos sites, nos modalités de paiement et vos démarches d'acquisition.",
      "Que vous soyez sur place ou à l'étranger, notre équipe reste joignable pour planifier une visite ou un échange.",
    ],
    address: siteConfig.contact.address,
    accessSteps: siteConfig.contact.accessSteps,
    mapQuery: siteConfig.contact.mapQuery,
    image: {
      src: "/BEPAS.jpg",
      alt: "Bureaux BEPAS — Galeries Présidentielles, Kinshasa-Gombe",
      width: 800,
      height: 800,
    },
  },
} as const
