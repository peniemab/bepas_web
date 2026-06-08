export const actualitesPage = {
  meta: {
    title: "Actualités & Blog",
    description:
      "Suivez le développement de nos cités, l'inauguration des infrastructures et découvrez nos conseils d'acquisition foncière à Kinshasa.",
  },
  hero: {
    title: "L'actualité foncière de BEPAS",
    taglineAlt:
      "Évolution de nos concessions, infrastructures et conseils pour acquéreurs en RDC",
    image: {
      src: "/heroAccueil10.jpg",
      alt: "Actualités et blog BEPAS — Kinshasa",
    },
  },
  featuredLabel: "Article à la une",
  latestLabel: "Nos derniers articles",
  filterLabel: "Parcourir par thématique",
  newsletter: {
    title: "Restez informé de nos futurs lotissements",
    lead: "Nous préparons de nouvelles concessions à crédit dans des zones à forte valorisation. Ne manquez pas l'ouverture des réservations !",
    ctaLabel: "S'abonner aux alertes parcelles",
    ctaHref: "/contact?subject=Inscription%20Newsletter",
  },
} as const

export const actualitesHeroBreadcrumb = [
  { label: "Accueil", href: "/" },
  { label: "Actualités", href: "/actualites" },
] as const

export const articleCategoryDefs = [
  { slug: "evenements", label: "Événements" },
  { slug: "infrastructures", label: "Infrastructures" },
  { slug: "conseils", label: "Conseils" },
  { slug: "bepas", label: "BEPAS" },
] as const

export type ArticleCategorySlug = (typeof articleCategoryDefs)[number]["slug"]

export function getArticleCategoryLabel(slug: string) {
  return (
    articleCategoryDefs.find((c) => c.slug === slug)?.label ?? slug
  )
}

export const actualitesEmptyState = {
  title: "Aucun article publié pour le moment",
  lead: "Revenez bientôt : nos actualités seront publiées ici par l'équipe communication BEPAS.",
} as const
