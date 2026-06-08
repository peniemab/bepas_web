import { cn } from "@/lib/utils"

export type TarifDetails = {
  total: number
  acompte: number
  mensualite: number
}

export type TarifStructure = {
  [site: string]: {
    [dimension: string]: TarifDetails
  }
}

export const TARIFS_OFFICIELS: TarifStructure = {
  "NSELE / EXPLOIT": {
    "15x20 Lot 26": { total: 2600, acompte: 500, mensualite: 87 },
    "15x20 Lot 27": { total: 2700, acompte: 500, mensualite: 91 },
    "20x20": { total: 3000, acompte: 1000, mensualite: 83 },
  },
  "MALUKU / MENKAO / Marie José": {
    "20x20": { total: 2500, acompte: 500, mensualite: 83 },
  },
  "MONT NGAFULA / MBEKANA / FAVEUR 2": {
    "20x20": { total: 5000, acompte: 1500, mensualite: 145 },
  },
  "MONT NGAFULA / BISEKA / FAVEUR 3": {
    "20x20": { total: 2300, acompte: 500, mensualite: 75 },
  },
  "MONT NGAFULA / KIMBIMBI / FAVEUR 1": {
    "20x20 Lot 45": { total: 4500, acompte: 1500, mensualite: 125 },
    "20x20 Lot 35": { total: 3500, acompte: 1500, mensualite: 83 },
  },
}

export type CommuneTarifZone = "nsele" | "maluku" | "mont-ngafula"

export const communeTarifSiteColorClass: Record<CommuneTarifZone, string> = {
  nsele:
    "bg-gradient-to-r from-[oklch(78.9%_0.154_211.53)] to-[oklch(62%_0.14_211.53)] bg-clip-text text-transparent",
  maluku:
    "bg-gradient-to-r from-[oklch(79.5%_0.184_86.047)] to-[oklch(62%_0.16_86.047)] bg-clip-text text-transparent",
  "mont-ngafula":
    "bg-gradient-to-r from-[oklch(76.5%_0.177_163.223)] to-[oklch(59.6%_0.145_163.223)] bg-clip-text text-transparent",
}

export const communeTarifPrixBarreClass: Record<CommuneTarifZone, string> = {
  nsele:
    "text-[oklch(62%_0.14_211.53)] decoration-[oklch(62%_0.14_211.53)]",
  maluku:
    "text-[oklch(62%_0.16_86.047)] decoration-[oklch(62%_0.16_86.047)]",
  "mont-ngafula":
    "text-[oklch(59.6%_0.145_163.223)] decoration-[oklch(59.6%_0.145_163.223)]",
}

export const communeTarifBarSeparatorClass: Record<CommuneTarifZone, string> = {
  nsele: "bg-[oklch(62%_0.14_211.53)]",
  maluku: "bg-[oklch(62%_0.16_86.047)]",
  "mont-ngafula": "bg-[oklch(59.6%_0.145_163.223)]",
}

export const communeTarifBulletBgClass: Record<CommuneTarifZone, string> = {
  nsele: "bg-[oklch(62%_0.14_211.53)]",
  maluku: "bg-[oklch(62%_0.16_86.047)]",
  "mont-ngafula": "bg-[oklch(59.6%_0.145_163.223)]",
}

export const communeTarifTopBandClass: Record<CommuneTarifZone, string> = {
  nsele: "border-t-[oklch(62%_0.14_211.53)]",
  maluku: "border-t-[oklch(62%_0.16_86.047)]",
  "mont-ngafula": "border-t-[oklch(59.6%_0.145_163.223)]",
}

export const communeTarifRoleHoverClass: Record<CommuneTarifZone, string> = {
  nsele: "hover:bg-[oklch(78.9%_0.154_211.53)]/12",
  maluku: "hover:bg-[oklch(79.5%_0.184_86.047)]/12",
  "mont-ngafula": "hover:bg-[oklch(76.5%_0.177_163.223)]/12",
}

export const communeTarifButtonClass: Record<CommuneTarifZone, string> = {
  nsele:
    "border-[oklch(62%_0.14_211.53)] bg-white text-[oklch(52%_0.14_211.53)] hover:!bg-transparent hover:border-[oklch(62%_0.14_211.53)]",
  maluku:
    "border-[oklch(62%_0.16_86.047)] bg-white text-[oklch(52%_0.16_86.047)] hover:!bg-transparent hover:border-[oklch(62%_0.16_86.047)]",
  "mont-ngafula":
    "border-[oklch(59.6%_0.145_163.223)] bg-white text-[oklch(48%_0.12_163)] hover:!bg-transparent hover:border-[oklch(59.6%_0.145_163.223)]",
}

export const communeTarifButtonLiquidColors: Record<
  CommuneTarifZone,
  { from: string; to: string }
> = {
  nsele: {
    from: "oklch(78.9% 0.154 211.53)",
    to: "oklch(62% 0.14 211.53)",
  },
  maluku: {
    from: "oklch(79.5% 0.184 86.047)",
    to: "oklch(62% 0.16 86.047)",
  },
  "mont-ngafula": {
    from: "oklch(76.5% 0.177 163.223)",
    to: "oklch(59.6% 0.145 163.223)",
  },
}

export const tarifNotebookLineClass =
  "border-[oklch(90%_0.038_234)]/42"

export function getCommuneTarifNotebookCellClass(index: number, total: number) {
  const isLast = index === total - 1
  const isLastRowSm = index >= total - 2
  const isLastRowLg = index >= total - 2

  return cn(
    tarifNotebookLineClass,
    !isLast && "border-b",
    isLastRowSm && "sm:border-b-0",
    isLastRowLg && "lg:border-b-0",
    index % 2 === 0 && "sm:border-r",
    index % 2 === 1 && "sm:border-r-0",
    index % 3 !== 2 && "lg:border-r",
    index % 3 === 2 && "lg:border-r-0"
  )
}

export function getCommuneAcheterNotebookCellClass(index: number, total: number) {
  const isLast = index === total - 1

  return cn(
    tarifNotebookLineClass,
    !isLast && "border-b",
    "md:border-b-0",
    index % 3 !== 2 && "md:border-r",
    index % 3 === 2 && "md:border-r-0"
  )
}

export const tarifSiteImages: Record<string, string> = {
  "NSELE / EXPLOIT": "/nsele.jpg",
  "MALUKU / MENKAO / Marie José": "/menkao.jpg",
  "MONT NGAFULA / MBEKANA / FAVEUR 2": "/kimwenzaf2.jpg",
  "MONT NGAFULA / KIMBIMBI / FAVEUR 1": "/kimwenzaf1.jpg",
  "MONT NGAFULA / BISEKA / FAVEUR 3": "/parcmtngafula.jpg",
}

export type ParcelleTarifCard = {
  id: string
  site: string
  dimension: string
  communeLabel: string
  siteLabel: string
  communeZone: CommuneTarifZone
  subtitle: string
  image: string
  imageAlt: string
  total: number
  acompte: number
  mensualite24: number
  soldeUneTranche: number
  prixBarre: number
}

function formatSitePartLabel(part: string) {
  return part
    .split(" ")
    .map((word) => {
      if (word.length <= 2 && /^\d+$/.test(word)) return word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(" ")
}

function parseSiteLabels(site: string): {
  communeLabel: string
  siteLabel: string
  communeZone: CommuneTarifZone
} {
  const parts = site.split(" / ").map((part) => part.trim())
  const communeKey = parts[0]?.toUpperCase() ?? ""

  if (communeKey.includes("NSELE")) {
    return {
      communeLabel: "N'sele",
      siteLabel: parts.slice(1).map(formatSitePartLabel).join(", "),
      communeZone: "nsele",
    }
  }

  if (communeKey.includes("MALUKU")) {
    return {
      communeLabel: "Maluku",
      siteLabel: parts.slice(1).map(formatSitePartLabel).join(", "),
      communeZone: "maluku",
    }
  }

  if (communeKey.includes("MONT NGAFULA")) {
    return {
      communeLabel: "Mont Ngafula",
      siteLabel: parts.slice(1).map(formatSitePartLabel).join(", "),
      communeZone: "mont-ngafula",
    }
  }

  return {
    communeLabel: formatSitePartLabel(parts[0] ?? site),
    siteLabel: parts.slice(1).map(formatSitePartLabel).join(", "),
    communeZone: "nsele",
  }
}

function formatDimensionLabel(dimension: string) {
  const dimensionOnly = dimension.replace(/\s+Lot\s+\d+$/i, "").trim()
  return dimensionOnly.replace(/x/gi, "×")
}

export function formatTarifUsd(amount: number) {
  return `${amount.toLocaleString("fr-FR")} $`
}

/** Prix barré affiché = double du prix total BEPAS */
export function getPrixBarre(total: number) {
  return total * 2
}

export function buildParcelleTarifCards(): ParcelleTarifCard[] {
  const cards: ParcelleTarifCard[] = []

  for (const [site, dimensions] of Object.entries(TARIFS_OFFICIELS)) {
    for (const [dimension, tarif] of Object.entries(dimensions)) {
      const reste = Math.max(0, tarif.total - tarif.acompte)
      const { communeLabel, siteLabel, communeZone } = parseSiteLabels(site)
      const imageAlt = siteLabel
        ? `${communeLabel}, ${siteLabel}`
        : communeLabel
      cards.push({
        id: `${site}__${dimension}`,
        site,
        dimension,
        communeLabel,
        siteLabel,
        communeZone,
        subtitle: formatDimensionLabel(dimension),
        image: tarifSiteImages[site] ?? "/parcmtngafula.jpg",
        imageAlt,
        total: tarif.total,
        acompte: tarif.acompte,
        mensualite24: tarif.mensualite,
        soldeUneTranche: reste,
        prixBarre: getPrixBarre(tarif.total),
      })
    }
  }

  return cards
}

export const parcelleTarifCards = buildParcelleTarifCards()
