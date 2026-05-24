/** Hauteur du cadre hero — mobile/tablette fixe, desktop format bannière rectangulaire */
export const homeHeroFrame = {
  heightClass: "h-[420px] sm:h-[440px] lg:aspect-[13/4] lg:h-auto",
} as const

export const homeHeroSlideIntervalMs = 30_000

export const homeHeroTagline = "Le bon moment, c'est maintenant." as const

export const homeHeroSlides = [
  {
    image: {
      src: "/heroAccueil10.jpg",
      alt: "BEPAS — investissement immobilier à Kinshasa",
      width: 736,
      height: 946,
    },
    title: "Garantissez votre avenir, construisez votre retraite!",
    lead:
      "Parce que se loger au cœur de Kinshasa est devenu un luxe, nous vous ouvrons les portes là où l'immobilier prend de la valeur, là où il est encore possible d'investir intelligemment.",
  },
  {
    image: {
      src: "/heroAccueil11.jpg",
      alt: "BEPAS — parcelles et projets immobiliers à Kinshasa",
      width: 736,
      height: 946,
    },
    title: "Profitez de notre système de crédit souple et avantageux.",
    lead: "Vous choisissez votre commune (Maluku, N'sele, Mont Ngafula), vous achetez selon vos moyens, pour vous, pour votre famille, pour laisser un héritage solide.",
  },
] as const

export const homeHero = {
  ctaPrimary: {
    label: "Acheter une parcelle",
    href: "/on-vous-aide/acheter-une-parcelle",
  },
  ctaSecondary: {
    label: "Nous contacter",
    href: "/contact",
  },
} as const

export const homeSolutions = [
  {
    title: "Vente de parcelles",
    description:
      "Des terrains disponibles dans plusieurs communes, adaptés à vos moyens et à vos projets.",
    href: "/nos-solutions/vente-de-parcelles",
  },
  {
    title: "Sécurisation foncière",
    description:
      "Un accompagnement rigoureux pour sécuriser votre investissement et votre patrimoine.",
    href: "/nos-solutions/securisation-fonciere",
  },
  {
    title: "Aménagement et viabilisation",
    description:
      "Des quartiers pensés pour l'avenir, avec les infrastructures nécessaires à votre projet.",
    href: "/nos-solutions/amenagement-et-viabilisation",
  },
  {
    title: "Notre impact",
    description:
      "Contribuer au développement des nouvelles communes et à l'accès au logement en RDC.",
    href: "/nos-solutions/notre-impact",
  },
] as const

export const homeWhy = [
  {
    title: "Crédit souple",
    description: "Financez votre parcelle pas à pas, sans pression financière.",
  },
  {
    title: "Communes d'avenir",
    description:
      "Investissez là où l'immobilier prend de la valeur, avant que les prix n'explosent.",
  },
  {
    title: "Liberté de choix",
    description: "Vous choisissez votre commune et avancez selon vos moyens.",
  },
  {
    title: "Héritage durable",
    description:
      "Préparez votre retraite et laissez un patrimoine solide à votre famille.",
  },
] as const

export const homeCta = {
  title: "Prêt à sécuriser votre avenir ?",
  description:
    "Parlez à notre équipe ou découvrez nos parcelles disponibles dès aujourd'hui.",
  ctaPrimary: homeHero.ctaPrimary,
  ctaSecondary: homeHero.ctaSecondary,
} as const
