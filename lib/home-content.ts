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
    image: "/parc_nsele.jpg",
    description:
      "Investissez à N'sele avec BEPAS : des parcelles accessibles et un accompagnement pour sécuriser votre projet immobilier.",
    /** Même palette que blockClass (carte mobile N'sele → #nsele) */
    blockColors: {
      from: "oklch(78.9% 0.154 211.53)",
      to: "oklch(62% 0.14 211.53)",
    },
    cta: {
      label: "Découvrir les parcelles",
      href: "/nos-solutions/vente-de-parcelles",
    },
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
    badges: ["20x20m²", "Kimwenza Gare", "Achat à crédit"],
    image: "/parcmtngafula.jpg",
    description:
      "Mont Ngafula offre un potentiel d'avenir pour votre patrimoine. Découvrez nos terrains et nos solutions de financement adaptées.",
    /** Même palette que blockClass (carte mobile Mont Ngafula → #mont-ngafula) */
    blockColors: {
      from: "oklch(76.5% 0.177 163.223)",
      to: "oklch(59.6% 0.145 163.223)",
    },
    cta: {
      label: "Découvrir les parcelles",
      href: "/nos-solutions/vente-de-parcelles",
    },
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
    image: "/parcmaluku.jpg",
    description:
      "À Maluku, construisez votre avenir avec des parcelles sélectionnées et un crédit souple pensé pour les familles congolaises.",
    /** Même palette que blockClass (carte mobile Maluku → #maluku) */
    blockColors: {
      from: "oklch(79.5% 0.184 86.047)",
      to: "oklch(62% 0.16 86.047)",
    },
    cta: {
      label: "Découvrir les parcelles",
      href: "/nos-solutions/vente-de-parcelles",
    },
    blockClass:
      "border border-white/25 bg-gradient-to-b from-[oklch(79.5%_0.184_86.047)] to-[oklch(62%_0.16_86.047)] text-white shadow-sm",
  },
] as const

export const homeTestimonials = {
  sectionId: "temoignages",
  titleBefore: "Ce qu'ils ",
  titleHighlight: "disent de nous",
  items: [
    {
      quote:
        "Je suis couturière et j'avais un rêve : ma parcelle à Kinshasa. BEPAS m'accompagne avec un crédit adapté à mes moyens. J'ai 21 ans : j'ai signé, j'avance sur mon terrain, et je bâtis quelque chose de solide, pour aujourd'hui et pour demain.",
      image: {
        src: "/couturiere.jpg",
        alt: "Milca Kukitila — couturière et acquéreuse BEPAS",
        width: 626,
        height: 417,
      },
      name: "Milca Kukitila",
      profession: "CEO, Milca coiffure & Milca mode",
      role: "Acquéreuse BEPAS",
    },
    {
      quote:
        "Commerçante au marché Gambela, j'ai longtemps rêvé de parcelles à mon nom. BEPAS m'a ouvert la voie : deux parcelles, un suivi clair, et la certitude de préparer l'avenir de mes enfants.",
      image: {
        src: "/commercante.jpg",
        alt: "Lydia Lukanda, commerçante au marché Gambela et acquéreuse BEPAS",
        width: 1200,
        height: 1500,
      },
      name: "Lydia Lukanda",
      profession: "Commerçante, marché Gambela",
      role: "Acquéreuse BEPAS",
    },
    {
      quote:
        "Mécanicien au garage depuis mes débuts. Longtemps, une parcelle à mon nom restait une chimère. BEPAS m'a permis de souscrire sans attendre des années d'épargne. J'avance pas à pas sur mon terrain.",
      image: {
        src: "/mecanicien.jpg",
        alt: "Josué Kakura, mécanicien au garage et acquéreur BEPAS",
        width: 810,
        height: 1080,
      },
      name: "Josué Kakura",
      profession: "Mécanicien, garage automobile",
      role: "Acquéreur BEPAS",
    },
  ],
} as const

export const homePartners = {
  sectionId: "nos-partenaires",
  title: "Nos partenaires",
  rows: [
    {
      direction: "left" as const,
      logos: [
        {
          src: "/minaf-logo.png",
          alt: "MINAF",
          width: 277,
          height: 182,
          tileClass: "w-[220px] sm:w-[280px]",
          imageClass: "max-h-16 sm:max-h-20 lg:max-h-24",
        },
        {
          src: "/Logo_Antenne_A.png",
          alt: "Antenne A",
          width: 236,
          height: 236,
          tileClass: "w-[148px] sm:w-[176px]",
          imageClass: "max-h-16 sm:max-h-20",
        },
        {
          src: "/cadeco_logo.jpg",
          alt: "CADECO",
          width: 225,
          height: 225,
          tileClass: "w-[148px] sm:w-[176px]",
          imageClass: "max-h-16 sm:max-h-20",
        },
      ],
    },
    {
      direction: "right" as const,
      logos: [
        {
          src: "/UBA-logo.png",
          alt: "UBA",
          width: 1171,
          height: 512,
          tileClass: "w-[220px] sm:w-[280px]",
          imageClass: "max-h-14 sm:max-h-16",
        },
        {
          src: "/logo-msit.png",
          alt: "Ministère de la Recherche scientifique et innovation",
          width: 591,
          height: 308,
          tileClass: "w-[200px] sm:w-[260px]",
          imageClass: "max-h-12 sm:max-h-14",
        },
        {
          src: "/logo_onatra.jpg",
          alt: "ONATRA",
          width: 550,
          height: 558,
          tileClass: "w-[140px] sm:w-[168px]",
          imageClass: "max-h-16 sm:max-h-20",
        },
        {
          src: "/regideso_logo.webp",
          alt: "REGIDESO",
          width: 600,
          height: 280,
          tileClass: "w-[190px] sm:w-[240px]",
          imageClass: "max-h-12 sm:max-h-14",
        },
      ],
    },
  ],
} as const

export const homeNotreImpact = {
  sectionId: "notre-impact",
  title: "Notre impact",
  /** Affiché si Supabase indisponible */
  subtitle: "Chiffres clés — mise à jour en cours",
  lead: "Au-delà de la vente de parcelles, BEPAS contribue à l'accès au logement, à l'inclusion par le crédit et au développement des communes d'avenir en RDC.",
  /** Fonds légers par bloc (alignés communes + brand) */
  blockTints: {
    families:
      "border-[oklch(72%_0.1_211)]/25 bg-[oklch(96.5%_0.028_211)]",
    women:
      "border-[oklch(72%_0.1_86.047)]/25 bg-[oklch(96.5%_0.028_86.047)]",
    sites: "border-[oklch(65%_0.11_163)]/25 bg-[oklch(96.5%_0.03_163)]",
    report:
      "border-transparent bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-primary-foreground shadow-sm",
  },
  stats: [
    {
      value: "—",
      label: "Familles accompagnées",
      icon: "families" as const,
      tint: "families" as const,
    },
    {
      value: "—",
      label: "de femmes propriétaires",
      icon: "women" as const,
      tint: "women" as const,
    },
  ],
  sitesBlock: {
    title: "Répartition par site",
  },
  reportCard: {
    title: "Découvrez notre rapport d'impact",
    href: "/nos-solutions/notre-impact",
    tint: "report" as const,
  },
  downloadCta: {
    label: "Télécharger notre rapport d'impact",
    /** Placer le PDF dans public/ avec ce nom */
    href: "/rapport-impact-bepas.pdf",
  },
  solution: {
    title: "Notre impact",
    description:
      "Inclusion par le crédit, emplois locaux et urbanisation planifiée : découvrez comment BEPAS fait bouger les lignes en RDC.",
    href: "/nos-solutions/notre-impact",
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
    title: "Aménagement et viabilisation",
    description:
      "Des quartiers pensés pour l'avenir, avec les infrastructures nécessaires à votre projet.",
    href: "/nos-solutions/amenagement-et-viabilisation",
  },
  homeNotreImpact.solution,
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

/** CTA accueil — après Notre impact (achat avant construction) */
export const homeParcellesCta = {
  titleBefore: "Vous cherchez un terrain ",
  titleHighlight: "pour bâtir ?",
  description:
    "BEPAS vous propose des parcelles dans nos communes d'avenir, un paiement adapté à vos moyens et un accompagnement jusqu'à la construction de votre projet immobilier.",
  cta: {
    label: "Découvrir nos parcelles",
    href: "/nos-solutions/vente-de-parcelles",
  },
  slideIntervalMs: 8_000,
  slides: [
    {
      src: "/terrain_const.jpg",
      alt: "Terrain prêt pour la construction — parcelle BEPAS",
      width: 735,
      height: 571,
    },
    {
      src: "/un_toit_pt1_or.jpg",
      alt: "Construction d'une maison avec toiture — projet BEPAS",
      width: 640,
      height: 640,
    },
    {
      src: "/un_toit_pt2_or.jpg",
      alt: "Avancement des travaux de toiture sur parcelle BEPAS",
      width: 736,
      height: 750,
    },
  ],
  faq: {
    title: "As-tu des questions ?",
    items: [
      {
        question:
          "Puis-je acheter une parcelle chez BEPAS avec un paiement échelonné ?",
        answer:
          "Oui. Chez BEPAS, tu bénéficies d'un crédit souple : tu avances sur ta parcelle selon tes moyens, avec un paiement échelonné adapté à ton budget. Notre équipe t'explique les modalités (acompte, échéances, commune choisie) dès ta prise de contact.",
      },
      {
        question:
          "Quelles sont les conditions pour acheter une parcelle chez BEPAS ?",
        answer:
          "Pour devenir propriétaire chez BEPAS : choisir une commune (Maluku, N'sele ou Mont Ngafula), constituer ton dossier, respecter les étapes prévues à ton contrat et bénéficier de l'accompagnement de nos équipes jusqu'à la sécurisation de ton foncier. Contacte-nous pour les pièces à fournir et le détail des conditions selon le site visé.",
      },
      {
        question:
          "Puis-je acheter une parcelle chez BEPAS si je vis à l'étranger ou hors de Kinshasa ?",
        answer:
          "Oui. BEPAS accompagne les Congolais en RDC, à l'étranger ou dans d'autres villes (Lubumbashi, etc.). Tu peux lancer ton projet à distance : informations, choix de parcelle et suivi administratif avec notre équipe à Kinshasa.",
      },
      {
        question:
          "Quelles parcelles sont disponibles à Kinshasa ?",
        answer:
          "BEPAS propose des parcelles viabilisées à Kinshasa, notamment à Maluku (Menkao), N'sele (Bel Air) et Mont Ngafula (Kimwenza Gare), avec des formats adaptés (15×20 m², 20×20 m² selon les sites). La disponibilité évolue : consulte la page Vente de parcelles ou contacte-nous pour le détail des sites ouverts.",
      },
      {
        question:
          "Comment BEPAS sécurise-t-elle mon investissement jusqu'au titre foncier ?",
        answer:
          "BEPAS t'accompagne sur la sécurisation foncière : contrôle du projet, démarches liées à ton acquisition et objectif de titre foncier dans les conditions prévues à ton contrat. L'objectif est de transformer ton achat en patrimoine durable et sécurisé.",
      },
      {
        question: "Puis-je construire sur ma parcelle après l'achat chez BEPAS ?",
        answer:
          "Oui. Chez BEPAS, dès que tu verses ton acompte, nous te faisons visiter ta parcelle et tu peux déjà entamer tes travaux de construction. Notre équipe t'accompagne pour la suite de ton projet immobilier.",
      },
    ],
  },
} as const

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
