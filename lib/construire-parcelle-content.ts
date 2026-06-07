export const construireParcellePage = {
  hero: {
    title: "Construisez votre maison à crédit",
    lead:
      "Crédit direct BEPAS sur 0 à 5 ans. Bâtissez sur votre parcelle et étalez vos paiements de travaux sans intermédiaire bancaire.",
    slideIntervalMs: 10_000,
    slides: [
      {
        src: "/terrain_const.jpg",
        alt: "Terrain prêt pour la construction — parcelle BEPAS",
      },
      {
        src: "/constparc2.jpg",
        alt: "Chantier de construction sur parcelle BEPAS — vue 2",
      },
      {
        src: "/constparc3.jpg",
        alt: "Chantier de construction sur parcelle BEPAS — vue 3",
      },
    ],
    ctaPrimary: {
      label: "Demander une étude",
      href: "/contact",
    },
    ctaSecondary: {
      label: "Acheter une parcelle",
      href: "/nos-solutions#vente-de-parcelles",
    },
  },
  intro: {
    headline: "NOUS BÂTISSONS VOTRE",
    headlineLine2: "MAISON",
    headlineAccent: "À CRÉDIT.",
    lead:
      "BEPAS accompagne les familles congolaises et la diaspora : parcelle viabilisée, crédit construction sur 0 à 5 ans et suivi de chantier jusqu'à la remise des clés.",
    cta: {
      label: "Voir nos parcelles",
      href: "/nos-solutions#vente-de-parcelles",
    },
  },
  benefits: {
    title: "Pourquoi construire avec BEPAS ?",
    lead: "Un accompagnement complet, pensé pour Kinshasa et nos communes d'avenir.",
    contactCard: {
      question: "Vous avez un projet ?",
      hint: "Parlons de votre chantier, nos conseillers vous orientent.",
      phoneLabel: "Appelez-nous",
    },
    items: [
      {
        highlight: "0 % — 5 ans",
        title: "Crédit direct longue durée",
        description:
          "Une formule pour étaler le financement de vos travaux de 1 à 5 ans, à Kinshasa.",
        image: {
          src: "/un_toit_pt1_or.jpg",
          alt: "Toiture en cours — crédit construction BEPAS",
        },
      },
      {
        highlight: "Clé en main",
        title: "Prise en charge intégrale",
        description:
          "Du terrassement aux finitions de peinture, BEPAS coordonne l'ensemble du chantier.",
        image: {
          src: "/un_toit_pt2_or.jpg",
          alt: "Avancement toiture — chantier BEPAS",
        },
      },
      {
        highlight: "Qualité RDC",
        title: "Matériaux certifiés",
        description:
          "Béton vibré, charpentes renforcées et finitions sélectionnées avec rigueur.",
        image: {
          src: "/heroAccueil10.jpg",
          alt: "Construction de qualité — projet BEPAS",
        },
      },
      {
        highlight: "Forage",
        title: "Autonomie en eau",
        description:
          "Possibilité d'installer un forage et un système de pompage autonome sur votre site.",
        image: {
          src: "/couturier.jpg",
          alt: "Artisan sur site — accompagnement BEPAS",
        },
      },
    ],
  },
  models: {
    sectionId: "modeles",
    title: "Nos modèles de maisons types",
    lead:
      "Des villas pensées pour un confort de vie optimal tout en maximisant l'utilisation de votre parcelle.",
    items: [
      {
        id: "elikya",
        name: "Modèle ELIKYA (Espoir)",
        type: "F3 — Idéal jeune couple ou investisseur",
        specs: "Superficie : 85 m² | Recommandé pour terrain 15 m × 20 m",
        description:
          "Une maison moderne et optimisée, alliant confort et économie. Parfaite pour un premier projet de construction.",
        image: {
          src: "/heroAccueil11.jpg",
          alt: "Modèle Elikya — maison F3 BEPAS",
        },
        rooms: [
          "2 chambres lumineuses",
          "1 salon convivial",
          "1 cuisine fermée",
          "1 salle de bain moderne",
          "1 véranda",
        ],
      },
      {
        id: "kimia",
        name: "Modèle KIMIA (Paix)",
        type: "F4 — Idéal pour les familles",
        specs: "Superficie : 120 m² | Recommandé pour terrain 20 m × 20 m",
        description:
          "Une villa familiale offrant de beaux volumes et une excellente répartition des pièces.",
        image: {
          src: "/kimwenzaf1.jpg",
          alt: "Modèle Kimia — villa F4 BEPAS",
        },
        rooms: [
          "3 chambres (dont 1 suite parentale)",
          "1 grand salon avec salle à manger",
          "1 cuisine avec garde-manger",
          "2 salles de bain équipées",
          "Terrasse couverte",
        ],
      },
      {
        id: "kembo",
        name: "Modèle KEMBO (Gloire)",
        type: "F5 — Villa premium spacieuse",
        specs: "Superficie : 160 m² | Recommandé pour terrain 20 m × 20 m",
        description:
          "Le summum du confort BEPAS : finitions haut de gamme et qualité de vie incomparable.",
        image: {
          src: "/kimwenzaf2.jpg",
          alt: "Modèle Kembo — villa F5 BEPAS",
        },
        rooms: [
          "4 chambres spacieuses",
          "1 double séjour lumineux",
          "1 cuisine américaine avec îlot",
          "3 salles de bain",
          "Grandes terrasses avant/arrière",
          "Espace de stationnement intégré",
        ],
      },
    ],
  },
  gallery: {
    sectionId: "realisations",
    title: "Chantiers et sites BEPAS",
    lead:
      "Des parcelles viabilisées dans nos communes d'avenir — base idéale pour lancer votre construction.",
    items: [
      {
        highlight: "Maluku",
        title: "Cité Menkao",
        description:
          "Parcelles viabilisées sur la route nationale — environnement adapté à votre projet de maison.",
        image: {
          src: "/menkao.jpg",
          alt: "Site Menkao — Maluku",
        },
      },
      {
        highlight: "N'sele",
        title: "Quartier Bel Air",
        description:
          "Lotissements structurés et accessibles pour construire sereinement à Kinshasa.",
        image: {
          src: "/nsele.jpg",
          alt: "Site N'sele — Bel Air",
        },
      },
      {
        highlight: "Mont Ngafula",
        title: "Kimwenza",
        description:
          "Terrains dimensionnés 15×20 m ou 20×20 m, prêts pour nos modèles Elikya, Kimia et Kembo.",
        image: {
          src: "/parcmaluku.jpg",
          alt: "Site Mont Ngafula — Kimwenza",
        },
      },
    ],
  },
  process: {
    title: "Le processus de construction BEPAS",
    lead:
      "De la conception à la livraison des clés, notre équipe donne vie à votre projet.",
    split: {
      left: {
        eyebrow: "Suivi de chantier",
        title: "NOTRE MÉTHODE,",
        titleLine2: "ÉTAPE PAR ÉTAPE",
        image: {
          src: "/ctaAccueilFamille.jpg",
          alt: "Famille devant son projet immobilier — construction BEPAS",
        },
        stats: [
          { value: "4", label: "Phases" },
          { value: "0–5", label: "Ans crédit" },
          { value: "3", label: "Modèles" },
        ],
      },
      right: {
        eyebrow: "Financement",
        title: "CRÉDIT DIRECT",
        titleLine2: "SANS INTERMÉDIAIRE",
        lead:
          "Étalez vos travaux sur 1 à 5 ans avec BEPAS. Un interlocuteur unique du plan à la remise des clés.",
        cta: {
          label: "Demander une étude",
          href: "/contact",
        },
      },
    },
    items: [
      {
        icon: "home" as const,
        title: "1. Conception et plans",
        description:
          "Choisissez l'un de nos modèles types (Elikya, Kimia, Kembo) ou apportez vos plans. Notre bureau d'études adapte l'architecture à votre terrain.",
      },
      {
        icon: "droplets" as const,
        title: "2. Viabilisation et forage",
        description:
          "Traçage des accès et forage sur place pour l'approvisionnement du chantier en eau potable et électricité temporaire.",
      },
      {
        icon: "hard-hat" as const,
        title: "3. Gros œuvre sécurisé",
        description:
          "Fondations renforcées, élévation des murs en blocs de béton vibrés et pose de la toiture.",
      },
      {
        icon: "hammer" as const,
        title: "4. Second œuvre et finitions",
        description:
          "Plomberie, électricité, revêtements, enduits, peintures et sanitaires. Vous recevez les clés d'une maison clé en main.",
      },
    ],
  },
  faq: {
    title: "Questions sur la construction",
    items: [
      {
        question: "Faut-il avoir acheté ma parcelle chez BEPAS pour construire ?",
        answer:
          "L'accompagnement construction BEPAS est pensé en priorité pour les parcelles acquises chez nous. Vous pouvez aussi nous contacter pour un pack terrain + construction ou pour étudier votre situation.",
      },
      {
        question: "Comment fonctionne le crédit construction chez BEPAS ?",
        answer:
          "BEPAS propose un crédit direct sur une période de 0 à 5 ans, sans intermédiaire bancaire. Les modalités (acompte, échéances, durée) sont définies avec nos conseillers selon votre projet et vos moyens.",
      },
      {
        question: "Quels modèles de maisons propose BEPAS ?",
        answer:
          "Nous proposons trois modèles types — Elikya (F3), Kimia (F4) et Kembo (F5) — adaptés aux parcelles 15 m × 20 m ou 20 m × 20 m. Des plans personnalisés peuvent être étudiés avec notre bureau d'études.",
      },
      {
        question:
          "BEPAS peut-elle construire sur un terrain que j'ai acheté ailleurs ?",
        answer:
          "BEPAS développe son activité de construction à crédit. Pour un terrain hors parcelles BEPAS, les conditions et possibilités sont à étudier au cas par cas avec nos conseillers aux Anciennes Galeries Présidentielles.",
      },
      {
        question: "Que comprend la prise en charge BEPAS sur le chantier ?",
        answer:
          "Selon votre contrat : conception, viabilisation, gros œuvre, second œuvre et finitions. BEPAS coordonne les étapes avec des équipes qualifiées jusqu'à la remise des clés.",
      },
      {
        question: "Puis-je lancer mon projet de construction depuis l'étranger ?",
        answer:
          "Oui. BEPAS accompagne la diaspora : échanges à distance, suivi de chantier et modalités de paiement adaptées. Contactez nos bureaux à Gombe pour organiser votre projet.",
      },
    ],
  },
  finalCta: {
    title: "PRÊT À CONSTRUIRE ?",
    subtitle: "Discutons de votre projet de construction",
    lead:
      "Que vous ayez déjà une parcelle BEPAS ou que vous souhaitiez un pack terrain + construction, notre bureau d'études vous propose une étude de faisabilité et un devis personnalisés.",
    cta: {
      label: "Demander une étude gratuite",
      href: "/contact",
    },
  },
} as const
