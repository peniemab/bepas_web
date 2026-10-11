import { unstable_cache } from "next/cache"

import { homeNotreImpact } from "@/lib/home-content"
import { getSupabasePublicClient, isSupabaseConfigured } from "@/lib/supabase/public"

export type ImpactStatIcon = "families" | "women"

export type ImpactStatTint = "families" | "women"

export type ImpactStat = {
  value: string
  label: string
  icon: ImpactStatIcon
  tint: ImpactStatTint
}

export type ActiveSiteZone = {
  name: string
  count: number
  active: boolean
}

export type ImpactActiveSites = {
  title: string
  zones: ActiveSiteZone[]
}

export type ImpactStatsPayload = {
  stats: ImpactStat[]
  activeSites: ImpactActiveSites
  subtitle: string
  source: "live" | "fallback"
}

type ImpactStatsRow = {
  site: string | null
  genre: string | null
  total: number | string
}

type SiteZone ="N'sele" | "Maluku" | "Mont Ngafula" | "Autre"

const ZONE_ORDER: SiteZone[] = ["Maluku", "N'sele", "Mont Ngafula", "Autre"]

function mapSiteToZone(site: string | null): SiteZone {
  const normalized = (site ?? "").toUpperCase()
  if (normalized.includes("NSELE")) return "N'sele"
  if (normalized.includes("MALUKU")) return "Maluku"
  if (normalized.includes("MONT NGAFULA")) return "Mont Ngafula"
  return "Autre"
}

function formatCount(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value)
}

function formatPercent(value: number) {
  return `${value.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} %`
}

function formatUpdatedSubtitle(date: Date) {
  const label = date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return `Chiffres clés mis à jour le ${label}`
}

function buildActiveSites(zoneCounts: Map<SiteZone, number>): ImpactActiveSites {
  const { sitesBlock } = homeNotreImpact

  return {
    title: sitesBlock.title,
    zones: (["Maluku", "N'sele", "Mont Ngafula"] as const).map((name) => ({
      name,
      count: zoneCounts.get(name) ?? 0,
      active: (zoneCounts.get(name) ?? 0) > 0,
    })),
  }
}

async function fetchImpactStatsLive(): Promise<ImpactStatsPayload> {
  const supabase = getSupabasePublicClient()

  // Comptages agrégés uniquement (voir supabase/migrations/002_public_impact_stats.sql)
  const { data, error } = await supabase.rpc("public_impact_stats")

  if (error) {
    throw new Error(error.message)
  }

  const rows = (data ?? []) as ImpactStatsRow[]
  const total = rows.reduce((sum, row) => sum + Number(row.total), 0)

  const withGenre = rows
    .filter((row) => row.genre === "F" || row.genre === "M")
    .reduce((sum, row) => sum + Number(row.total), 0)
  const womenCount = rows
    .filter((row) => row.genre === "F")
    .reduce((sum, row) => sum + Number(row.total), 0)
  const womenPercent = withGenre > 0 ? (womenCount / withGenre) * 100 : 0

  const zoneCounts = new Map<SiteZone, number>()
  for (const zone of ZONE_ORDER) {
    zoneCounts.set(zone, 0)
  }
  for (const row of rows) {
    const zone = mapSiteToZone(row.site)
    zoneCounts.set(zone, (zoneCounts.get(zone) ?? 0) + Number(row.total))
  }

  return {
    stats: [
      {
        value: formatCount(total),
        label: "Familles accompagnées",
        icon: "families",
        tint: "families",
      },
      {
        value: formatPercent(womenPercent),
        label: "de femmes propriétaires",
        icon: "women",
        tint: "women",
      },
    ],
    activeSites: buildActiveSites(zoneCounts),
    subtitle: formatUpdatedSubtitle(new Date()),
    source: "live",
  }
}

function fallbackPayload(): ImpactStatsPayload {
  return {
    stats: homeNotreImpact.stats.map((stat) => ({ ...stat })),
    activeSites: {
      title: homeNotreImpact.sitesBlock.title,
      zones: [
        { name: "Maluku", count: 0, active: false },
        { name: "N'sele", count: 0, active: false },
        { name: "Mont Ngafula", count: 0, active: false },
      ],
    },
    subtitle: homeNotreImpact.subtitle,
    source: "fallback",
  }
}

const getCachedLiveStats = unstable_cache(
  async () => fetchImpactStatsLive(),
  ["bepas-public-impact-stats"],
  { revalidate: 300 }
)

/** Stats affichées sur l'accueil — live Supabase ou repli statique */
export async function getImpactStats(): Promise<ImpactStatsPayload> {
  if (!isSupabaseConfigured()) {
    return fallbackPayload()
  }

  try {
    return await getCachedLiveStats()
  } catch (err) {
    console.error("[impact-stats]", err)
    return fallbackPayload()
  }
}
