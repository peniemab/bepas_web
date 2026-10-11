"use client"

import { usePathname } from "next/navigation"

import { whatsAppHref, whatsAppMessageForPath } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.46 3.5 1.34 5.02L2 22l5.12-1.34A10.03 10.03 0 0 0 12.04 22C17.57 22 22 17.52 22 12S17.57 2 12.04 2Zm0 18.3c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.04.8.81-2.96-.2-.31A8.26 8.26 0 0 1 3.76 12c0-4.56 3.72-8.27 8.28-8.27 4.55 0 8.24 3.71 8.24 8.27 0 4.56-3.7 8.3-8.24 8.3Z" />
    </svg>
  )
}

/** Bouton flottant WhatsApp, message pré-rempli selon la page */
export function WhatsAppButton() {
  const pathname = usePathname()
  const href = whatsAppHref(whatsAppMessageForPath(pathname))

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire à BEPAS sur WhatsApp"
      className={cn(
        "group fixed right-4 bottom-6 z-50 flex h-12 items-center gap-2 rounded-full bg-[#25D366] pr-3 pl-3 text-white shadow-lg transition-all sm:right-6",
        "hover:bg-[#1EBE5B] hover:pr-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      )}
    >
      <WhatsAppIcon className="size-6 shrink-0" />
      <span className="hidden text-sm font-semibold whitespace-nowrap md:inline">
        Écrivez-nous
      </span>
    </a>
  )
}
