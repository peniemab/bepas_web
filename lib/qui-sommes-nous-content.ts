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
  equipes: {
    title: "Notre équipe",
    lead:
      "Le succès de BEPAS repose sur une équipe dynamique, engagée et multidisciplinaire. Nos conseillers, techniciens et coordinateurs travaillent en synergie pour accompagner chaque acquéreur, sur place comme à l'étranger.",
    departments: [
      {
        name: "Direction & coordination",
        roles: [
          "Direction générale",
          "Coordination opérationnelle",
          "Relation acquéreurs & diaspora",
        ],
      },
      {
        name: "Commercial & développement",
        roles: [
          "Conseil parcelles & sites",
          "Souscription & suivi des dossiers",
          "Partenariats institutions",
        ],
      },
      {
        name: "Technique & terrain",
        roles: [
          "Viabilisation & aménagement",
          "Bornage, traçage & forage",
          "Suivi de chantier construction",
        ],
      },
      {
        name: "Administration & finance",
        roles: [
          "Comptabilité & trésorerie",
          "Conformité & sécurisation foncière",
          "Secrétariat & accueil",
        ],
      },
    ],
  },
} as const
