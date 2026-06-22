"use client"

import Link from "next/link"
import { MailIcon, PhoneIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const panelLinkClass =
  "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-foreground transition-colors hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"

function ContactTriggerIcons() {
  return (
    <span className="relative inline-block h-6 w-7 shrink-0" aria-hidden>
      <MailIcon
        className="absolute bottom-0 left-0 size-5"
        strokeWidth={1.5}
      />
      <PhoneIcon
        className="absolute top-0 right-0 size-4"
        strokeWidth={2.25}
      />
    </span>
  )
}

export function HeaderContactButton() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`
  const mailHref = `mailto:${siteConfig.contact.email}`

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Ouvrir les informations de contact"
        render={
          <Button
            liquid={false}
            className={cn(
              "size-9 shrink-0 gap-2 border-0 bg-background p-0 text-primary shadow-none",
              "hover:bg-muted hover:text-primary active:translate-y-0",
              "md:h-8 md:w-auto md:border-transparent md:bg-gradient-to-r md:from-[var(--brand-from)] md:to-[var(--brand-to)] md:px-3 md:text-primary-foreground",
              "md:hover:brightness-[0.92] md:hover:bg-gradient-to-r md:hover:text-primary-foreground"
            )}
          />
        }
      >
        <ContactTriggerIcons />
        <span className="hidden md:inline">Contact</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={8} className="w-72 p-0">
        <div className="border-b border-border px-4 py-3">
          <p className="text-sm font-semibold text-foreground">
            Nous sommes là pour vous !
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Lundi – samedi, 8h à 17h
          </p>
        </div>

        <ul className="flex flex-col gap-0.5 p-2">
          <li>
            <a href={phoneHref} className={panelLinkClass}>
              <PhoneIcon className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              <span>{siteConfig.contact.phone}</span>
            </a>
          </li>
          <li>
            <a href={mailHref} className={panelLinkClass}>
              <MailIcon className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              <span className="truncate">{siteConfig.contact.email}</span>
            </a>
          </li>
          <li>
            <Link href="/contact" className={panelLinkClass}>
              <MailIcon className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              <span>Nous écrire un e-mail</span>
            </Link>
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
