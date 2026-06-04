import {
  FileText,
  MapPinned,
  UsersRound,
  Venus,
  type LucideIcon,
} from "lucide-react"

import type { ImpactStatIcon } from "@/lib/impact-stats"
import { cn } from "@/lib/utils"

const ICONS: Record<ImpactStatIcon, LucideIcon> = {
  families: UsersRound,
  women: Venus,
  sites: MapPinned,
  report: FileText,
}

const ICON_LABELS: Record<ImpactStatIcon, string> = {
  families: "Familles",
  women: "Femmes propriétaires",
  sites: "Répartition par site",
  report: "Rapport d'impact",
}

export function ImpactStatIconBadge({
  icon,
  className,
}: {
  icon: ImpactStatIcon
  className?: string
}) {
  const Icon = ICONS[icon]

  return (
    <div
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:size-14",
        className
      )}
      aria-hidden
    >
      <Icon className="size-6 text-primary sm:size-7" strokeWidth={1.75} />
      <span className="sr-only">{ICON_LABELS[icon]}</span>
    </div>
  )
}
