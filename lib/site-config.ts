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
    title: "Nos partenaires",
    id: quiSommesNousSectionIds.nosPartenaires,
    href: `${quiSommesNousHref}#${quiSommesNousSectionIds.nosPartenaires}`,
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
] as const

/** Fil d'Ariane hero Qui sommes-nous — sections cliquables (sans sites / impact) */
export const quiSommesNousHeroBreadcrumb = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous", href: quiSommesNousHref },
  ...quiSommesNousNav.map(({ title, href }) => ({ label: title, href })),
] as const

/** @deprecated Menu déroulant retiré — conservé pour compatibilité éventuelle */
export const quiSommesNousHubLink = {
  title: "L'entreprise",
  href: quiSommesNousHref,
} as const

/** @deprecated Menu déroulant retiré */
export const quiSommesNousDropdownNav = [
  quiSommesNousHubLink,
  ...quiSommesNousNav,
] as const

export const nosSolutionsHref = "/nos-solutions" as const

export const nosSolutionsSectionIds = {
  venteParcelles: "vente-de-parcelles",
  construireParcelle: "construire-votre-parcelle",
} as const

export const nosSolutionsNav = [
  {
    title: "Vente de parcelles",
    id: nosSolutionsSectionIds.venteParcelles,
    href: `${nosSolutionsHref}#${nosSolutionsSectionIds.venteParcelles}`,
  },
  {
    title: "Construire votre parcelle",
    id: nosSolutionsSectionIds.construireParcelle,
    href: `${nosSolutionsHref}#${nosSolutionsSectionIds.construireParcelle}`,
  },
] as const

/** Fil d'Ariane hero Nos solutions — sections cliquables */
export const nosSolutionsHeroBreadcrumb = [
  { label: "Accueil", href: "/" },
  { label: "Nos solutions", href: nosSolutionsHref },
  ...nosSolutionsNav.map(({ title, href }) => ({ label: title, href })),
] as const

export const mainNavLinks = [
  { title: "ACCUEIL", href: "/" },
  { title: "PROJETS", href: "/projets" },
  { title: "ACTUALITÉS", href: "/actualites" },
] as const

export const siteConfig = {
  name: "BEPAS",
  fullName: "Bureau d'Etude des Projets d'Afrique Société",
  companyName: "BEPAS SARL",
  description:
    "Bureau d'études spécialisé dans la conception et le suivi de projets en Afrique — parcelles à crédit et lotissements viabilisés à Kinshasa.",
  quiSommesNousHref,
  nosSolutionsHref,
  quiSommesNousNavLabel: "QUI SOMMES-NOUS",
  nosSolutionsNavLabel: "NOS SOLUTIONS",
  nosSolutionsLabel: "Nos solutions",
  contact: {
    email: "servicebepas@gmail.com",
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
    facebook: "https://www.facebook.com/profile.php?id=61577404357398",
    tiktok:
      "https://www.tiktok.com/@bepas.socit?_r=1&_t=ZN-96iGh969Hny",
    youtube: "https://www.youtube.com/@bepas",
    instagram: "https://www.instagram.com/bepas",
  },
  quiSommesNousNav,
  quiSommesNousHeroBreadcrumb,
  quiSommesNousHubLink,
  quiSommesNousDropdownNav,
  nosSolutionsNav,
  nosSolutionsHeroBreadcrumb,
  nosSolutionsSectionIds,
  mainNavLinks,
} as const
