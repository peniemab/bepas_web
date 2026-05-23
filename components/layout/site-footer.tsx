import Link from "next/link"
import { MailIcon, PhoneIcon } from "lucide-react"

import { Logo } from "@/components/layout/logo"
import { SocialLinks } from "@/components/layout/social-links"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/site-config"

function FooterLinkGroup({
  title,
  links,
}: {
  title: string
  links: ReadonlyArray<{ title: string; href: string }>
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Logo showTagline />
            <p className="max-w-sm text-sm leading-relaxed text-foreground">
              {siteConfig.description}
            </p>
          </div>

          <FooterLinkGroup
            title="Qui sommes-nous"
            links={siteConfig.quiSommesNousNav}
          />

          <FooterLinkGroup
            title={siteConfig.nosSolutionsLabel}
            links={siteConfig.nosSolutionsNav}
          />

          <FooterLinkGroup
            title={siteConfig.vousVoulezLabel}
            links={siteConfig.vousVoulezNav}
          />

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-foreground">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-foreground">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <MailIcon />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <PhoneIcon />
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
            <SocialLinks className="pt-1" />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>{siteConfig.fullName}</p>
        </div>
      </div>
    </footer>
  )
}
