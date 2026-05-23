export const quiSommesNousNav = [
  { title: "Notre histoire", href: "/qui-sommes-nous/notre-histoire" },
  { title: "Nos bureaux", href: "/qui-sommes-nous/nos-bureaux" },
  { title: "Nos équipes", href: "/qui-sommes-nous/nos-equipes" },
  { title: "Nos partenaires", href: "/qui-sommes-nous/nos-partenaires" },
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
  { title: "Accueil", href: "/" },
  { title: "Projets", href: "/projets" },
  { title: "Actualités", href: "/actualites" },
] as const

export const siteConfig = {
  name: "BEPAS",
  fullName: "Bureau d'Etude des Projets d'Afrique Société",
  description:
    "Bureau d'études spécialisé dans la conception et le suivi de projets en Afrique.",
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
  nosSolutionsNav,
  vousVoulezNav,
  mainNavLinks,
} as const
