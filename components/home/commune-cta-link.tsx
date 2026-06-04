import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

type CommuneCtaLinkProps = {
  href: string
  label: string
  colorFrom: string
  colorTo: string
  pulseDelay?: number
}

export function CommuneCtaLink({
  href,
  label,
  colorFrom,
  colorTo,
  pulseDelay = 0,
}: CommuneCtaLinkProps) {
  return (
    <Button
      nativeButton={false}
      variant="ghost"
      liquidColors={{ from: colorFrom, to: colorTo }}
      pulseDelay={pulseDelay}
      className="mt-4 h-auto gap-2 border-2 border-[var(--cta-color)] bg-card px-6 py-2.5 text-sm font-semibold text-[var(--cta-color)] hover:bg-card active:translate-y-0"
      render={<Link href={href} />}
    >
      {label}
      <ArrowRightIcon
        className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
        aria-hidden
      />
    </Button>
  )
}
