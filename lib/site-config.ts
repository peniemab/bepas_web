export const quiSommesNousHref = "/qui-sommes-nous" as const

export const quiSommesNousSectionIds = {
  notreHistoire: "notre-histoire",
  nosBureaux: "nos-bureaux",
  nosEquipes: "nos-equipes",
  nosPartenaires: "nos-partenaires",
} as const

export const quiSommesNousNav = [
  {
    title: "Notre histoire",
    id: quiSommesNousSectionIds.notreHistoire,
    href: `${quiSommesNousHref}#${quiSommesNousSectionIds.notreHistoire}`,
  },
  {
    title: "Nos bureaux",
    id: quiSommesNousSectionIds.nosBureaux,
    href: `${quiSommesNousHref}#${quiSommesNousSectionIds.nosBureaux}`,
  },
  {
    title: "Nos équipes",
    id: quiSommesNousSectionIds.nosEquipes,
    href: `${quiSommesNousHref}#${quiSommesNousSectionIds.nosEquipes}`,
  },
  {
    title: "Nos partenaires",
    id: quiSommesNousSectionIds.nosPartenaires,
    href: `${quiSommesNousHref}#${quiSommesNousSectionIds.nosPartenaires}`,
  },
] as const

/** Lien page hub dans le menu déroulant Qui sommes-nous */
export const quiSommesNousHubLink = {
  title: "L'entreprise",
  href: quiSommesNousHref,
} as const

export const quiSommesNousDropdownNav = [
  quiSommesNousHubLink,
  ...quiSommesNousNav,
] as const

export const nosSolutionsNav = [
  {
    title: "Vente de parcelles",
    href: "/nos-solutions/vente-de-parcelles",
  },
  {
    title: "Sécurisation foncière",
    href: "/nos-solutions/securisation-fonciere",
  },
  {
    title: "Aménagement et viabilisation",
    href: "/nos-solutions/amenagement-et-viabilisation",
  },
  { title: "Notre impact", href: "/nos-solutions/notre-impact" },
] as const

export const vousVoulezNav = [
  { title: "Nous contacter", href: "/contact" },
  { title: "Acheter une parcelle", href: "/on-vous-aide/acheter-une-parcelle" },
  {
    title: "Construire votre parcelle",
    href: "/on-vous-aide/construire-votre-parcelle",
  },
] as const

export const mainNavLinks = [
  { title: "ACCUEIL", href: "/" },
  { title: "PROJETS", href: "/projets" },
  { title: "ACTUALITÉS", href: "/actualites" },
] as const

export const siteConfig = {
  name: "BEPAS",
  fullName: "Bureau d'Etude des Projets d'Afrique Société",
  description:
    "Bureau d'études spécialisé dans la conception et le suivi de projets en Afrique.",
  quiSommesNousHref,
  quiSommesNousNavLabel: "QUI SOMMES-NOUS",
  nosSolutionsNavLabel: "NOS SOLUTIONS",
  vousVoulezNavLabel: "VOUS VOULEZ",
  nosSolutionsLabel: "Nos solutions",
  vousVoulezLabel: "Vous voulez",
  contact: {
    email: "contact@bepas.cd",
    phone: "+243 977 205 236",
    companyName: "BEPAS SARL",
    avenue: "Boulevard du 30 juin",
    address:
      "Galeries Présidentielles, Boulevard du 30 Juin, Gombe, Kinshasa, RDC",
    mapQuery:
      "Galeries Présidentielles, Boulevard du 30 Juin, Kinshasa, République Démocratique du Congo",
    accessSteps: [
      "Boulevard du 30 juin",
      "Arrêts Kin Mart, Africom ou Sozacom",
      "2ᵉ niveau, ancienne galerie présidentielle, local 2M4",
    ],
  },
  social: {
    facebook: "https://www.facebook.com/bepas",
    tiktok: "https://www.tiktok.com/@bepas",
    youtube: "https://www.youtube.com/@bepas",
    instagram: "https://www.instagram.com/bepas",
  },
  quiSommesNousNav,
  quiSommesNousHubLink,
  quiSommesNousDropdownNav,
  nosSolutionsNav,
  vousVoulezNav,
  mainNavLinks,
} as const
