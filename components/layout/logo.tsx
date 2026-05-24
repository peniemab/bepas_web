import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const logoSrc = "/bepas.svg"
const logoWidth = 1500
const logoHeight = 1500

type LogoProps = {
  className?: string
  showTagline?: boolean
  centered?: boolean
}

export function Logo({
  className,
  showTagline = false,
  centered = false,
}: LogoProps) {
  if (centered) {
    return (
      <Link
        href="/"
        className={cn(
          "flex min-w-0 items-center gap-2 transition-opacity hover:opacity-90",
          className
        )}
      >
        <Image
          src={logoSrc}
          alt={`Logo ${siteConfig.name}`}
          width={logoWidth}
          height={logoHeight}
          className="h-8 w-auto shrink-0 object-contain"
          priority
        />
        <span className="min-w-0 text-[0.625rem] leading-tight text-muted-foreground sm:text-xs">
          {siteConfig.fullName}
        </span>
      </Link>
    )
  }

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 transition-opacity hover:opacity-90", className)}
    >
      <Image
        src={logoSrc}
        alt={`Logo ${siteConfig.name}`}
        width={logoWidth}
        height={logoHeight}
        className="h-10 w-auto object-contain"
        priority
      />
      {showTagline ? (
        <span className="hidden max-w-xs text-xs leading-snug text-muted-foreground sm:block">
          {siteConfig.fullName}
        </span>
      ) : null}
    </Link>
  )
}
