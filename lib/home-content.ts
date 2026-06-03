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

export const homeIntroHeading = {
  highlight: "Des parcelles",
  rest: "pour tout le monde",
} as const

export const homeCommunes = [
  {
    name: "N'sele",
    sectionId: "nsele",
    title: "Parcelles à N'sele",
    titleClass: "bg-gradient-to-r from-[oklch(78.9%_0.154_211.53)] to-[oklch(62%_0.14_211.53)] bg-clip-text text-transparent",
    locationDetail: "Quartier Bel Air (à proximité de l'aéroport international de Ndjili)",
    subtitle: "Des terrains spacieux, parfaits pour y bâtir la maison de vos rêves.",
    badges: ["15x20m² & 20x20m²", "Quartier Bel Air", "Titres sécurisés"],
    description:
      "Investissez à N'sele avec BEPAS : des parcelles accessibles et un accompagnement pour sécuriser votre projet immobilier.",
    blockClass:
      "border border-white/25 bg-gradient-to-b from-[oklch(78.9%_0.154_211.53)] to-[oklch(62%_0.14_211.53)] text-white shadow-sm",
  },
  {
    name: "Mont Ngafula",
    sectionId: "mont-ngafula",
    title: "Parcelles à Mont Ngafula",
    titleClass: "bg-gradient-to-r from-[oklch(76.5%_0.177_163.223)] to-[oklch(59.6%_0.145_163.223)] bg-clip-text text-transparent",
    locationDetail: "Quartier Kimwenza Gare",
    subtitle: "Un cadre de vie paisible avec un fort potentiel de prise de valeur.",
    badges: ["20x20m²", "Kimwenza Gare", "Achat à crédit sans stress"],
    description:
      "Mont Ngafula offre un potentiel d'avenir pour votre patrimoine. Découvrez nos terrains et nos solutions de financement adaptées.",
    blockClass:
      "border border-white/25 bg-gradient-to-b from-[oklch(76.5%_0.177_163.223)] to-[oklch(59.6%_0.145_163.223)] text-white shadow-sm",
  },
  {
    name: "Maluku",
    sectionId: "maluku",
    title: "Parcelles à Maluku",
    titleClass: "bg-gradient-to-r from-[oklch(79.5%_0.184_86.047)] to-[oklch(62%_0.16_86.047)] bg-clip-text text-transparent",
    locationDetail: "Quartier Menkao",
    subtitle: "L'avenir de Kinshasa : l'investissement foncier idéal à long terme.",
    badges: ["20x20m²", "Quartier Menkao", "Accompagnement sur mesure"],
    description:
      "À Maluku, construisez votre avenir avec des parcelles sélectionnées et un crédit souple pensé pour les familles congolaises.",
    blockClass:
      "border border-white/25 bg-gradient-to-b from-[oklch(79.5%_0.184_86.047)] to-[oklch(62%_0.16_86.047)] text-white shadow-sm",
  },
] as const

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
  image: {
    src: "/ctaAccueilFamille.jpg",
    alt: "Famille regardant l'horizon — sécuriser son avenir avec BEPAS",
    width: 736,
    height: 1308,
  },
  ctaPrimary: homeHero.ctaPrimary,
  ctaSecondary: homeHero.ctaSecondary,
} as const
