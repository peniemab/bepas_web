export type ProjetCommuneSlug = "all" | "maluku" | "mont-ngafula" | "nsele"

export const projetCommuneSlugs = ["maluku", "mont-ngafula", "nsele"] as const

export type CommuneSlug = (typeof projetCommuneSlugs)[number]

export function isCommuneSlug(value: string): value is CommuneSlug {
  return projetCommuneSlugs.includes(value as CommuneSlug)
}

export const projetsPage = {
  hero: {
    title: "Tous les projets",
    subtitle:
      "Découvrez nos cités et lotissements structurés à Kinshasa — parcelles viabilisées, sécurisées et prêtes à bâtir.",
    image: {
      src: "/heroAccueil10.jpg",
      alt: "Cités et lotissements BEPAS à Kinshasa",
    },
    breadcrumb: [
      { label: "Accueil", href: "/" },
      { label: "Projets", href: "/projets" },
    ],
  },
  communeHero: {
    subtitle: "Explorez nos cités et lotissements dans cette commune.",
  },
  filters: {
    allLabel: "Tous",
  },
  featuredTitle: "Projets à la une",
  methodology: {
    title: "Pourquoi choisir une cité structurée par BEPAS ?",
    lead:
      "À Kinshasa, acheter un terrain simple comporte souvent des risques d'empiètement, d'enclavement ou de conflits. BEPAS élimine ces risques en amont.",
    image: {
      src: "/heroAccueil11.jpg",
      alt: "Chantier de viabilisation BEPAS à Kinshasa",
    },
    points: [
      {
        title: "Sécurisation juridique",
        description:
          "Nous vérifions les titres cadastraux en profondeur avant toute acquisition de concession.",
      },
      {
        title: "Aménagement ordonné",
        description:
          "Nos avenues font au minimum 10 mètres de large pour permettre l'accès facile aux véhicules d'urgence et de livraison.",
      },
      {
        title: "Infrastructures durables",
        description:
          "Nous intégrons des équipements sociaux collectifs (eau par forage, réserves d'espace pour écoles ou cliniques).",
      },
    ],
  },
} as const

export const projetCommunes = [
  {
    slug: "maluku" as const,
    name: "Maluku",
    description:
      "Lotissements viabilisés à Menkao — le pôle de développement futur de Kinshasa.",
    image: {
      src: "/parcmaluku.jpg",
      alt: "Parcelles et cités à Maluku — BEPAS",
    },
  },
  {
    slug: "mont-ngafula" as const,
    name: "Mont Ngafula",
    description:
      "Cités structurées sur les collines de Kimwenza — calme, fraîcheur et fort potentiel.",
    image: {
      src: "/parcmtngafula.jpg",
      alt: "Parcelles et cités à Mont Ngafula — BEPAS",
    },
  },
  {
    slug: "nsele" as const,
    name: "N'sele",
    description:
      "Terrains spacieux à Bel Air — investissement accessible à proximité de Ndjili.",
    image: {
      src: "/parc_nsele.jpg",
      alt: "Parcelles à N'sele — BEPAS",
    },
  },
] as const

export const projets = [
  {
    id: "exploit-3",
    slug: "cite-exploit-3-maluku",
    name: "Cité Exploit 3",
    fullName: "Maluku — Cité Exploit 3",
    commune: "Maluku",
    communeSlug: "maluku" as const,
    location: "Route principale Menkao, RDC",
    image: {
      src: "/heroAccueil10.jpg",
      alt: "Cité Exploit 3 — Maluku Menkao",
    },
    tagline: "Le pôle de développement futur de Kinshasa",
    summary:
      "Concession rigoureusement structurée avec avenues tracées, forage collectif et équipements sociaux prévus.",
    dimensions: "20 m × 20 m (400 m²) ou 15 m × 20 m (300 m²)",
    amenities: [
      "Forage collectif à grand débit",
      "Avenues de 10 m de large tracées",
      "Équipements prévus : école, dispensaire médical",
      "Sécurisation foncière totale garantie",
    ],
    status: "Disponible à la vente",
    linkSubject: "Intérêt pour Maluku - Cité Exploit 3",
    featured: true,
  },
  {
    id: "exploit-2",
    slug: "cite-exploit-2-mont-ngafula",
    name: "Cité Exploit 2",
    fullName: "Mont Ngafula — Cité Exploit 2",
    commune: "Mont Ngafula",
    communeSlug: "mont-ngafula" as const,
    location: "Avenue IBIMI, quartier Kimwenza, Kinshasa",
    image: {
      src: "/heroAccueil11.jpg",
      alt: "Cité Exploit 2 — Mont Ngafula",
    },
    tagline: "Le calme et la fraîcheur des collines de Kimwenza",
    summary:
      "Zone résidentielle recherchée, accès carrossable et bornage cadastral approuvé.",
    dimensions: "20 m × 20 m (400 m²)",
    amenities: [
      "Proximité de la gare de Kimwenza et des écoles",
      "Accès carrossable et environnement boisé",
      "Zone résidentielle recherchée",
      "Bornage et limites cadastrales approuvés",
    ],
    status: "Dernières opportunités",
    linkSubject: "Intérêt pour Mont Ngafula - Cité Exploit 2",
    featured: true,
  },
  {
    id: "c-possible",
    slug: "cite-c-possible-maluku",
    name: "Cité C'Possible",
    fullName: "Maluku — Cité C'Possible",
    commune: "Maluku",
    communeSlug: "maluku" as const,
    location: "Route nationale n° 1, Menkao, Kinshasa",
    image: {
      src: "/heroAccueil1.jpg",
      alt: "Cité C'Possible — Maluku Menkao",
    },
    tagline: "Un investissement résidentiel ultra-accessible",
    summary:
      "Terrain plat idéal pour constructions immédiates, accès direct depuis la route nationale n° 1.",
    dimensions: "20 m × 20 m (400 m²)",
    amenities: [
      "Terrain plat idéal pour constructions immédiates",
      "Accès direct depuis la route nationale n°1",
      "Forage d'eau en cours d'installation",
      "Échelonnement souple sans intérêt",
    ],
    status: "Disponible à la vente",
    linkSubject: "Intérêt pour Maluku - Cité C'Possible",
    featured: true,
  },
] as const

export type Projet = (typeof projets)[number]

export const featuredProjets = projets.filter((projet) => projet.featured)

export function getProjetBySlug(slug: string): Projet | undefined {
  return projets.find((projet) => projet.slug === slug)
}

export function getProjetCommune(slug: ProjetCommuneSlug) {
  if (slug === "all") return undefined
  return projetCommunes.find((commune) => commune.slug === slug)
}

export function getProjetsByCommune(communeSlug: ProjetCommuneSlug) {
  if (communeSlug === "all") return [...projets]
  return projets.filter((projet) => projet.communeSlug === communeSlug)
}

export function getCommuneHref(communeSlug: CommuneSlug) {
  return `/projets/${communeSlug}` as const
}

export function getProjetHref(projet: Projet) {
  return `/projets/${projet.communeSlug}/${projet.slug}` as const
}

export function getProjetByCommuneAndSlug(
  communeSlug: string,
  projetSlug: string
): Projet | undefined {
  const projet = getProjetBySlug(projetSlug)
  if (!projet || projet.communeSlug !== communeSlug) return undefined
  return projet
}
