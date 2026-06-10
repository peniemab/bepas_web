import { siteConfig } from "@/lib/site-config"
import { absoluteUrl, getSiteUrl } from "@/lib/site-url"

export function SiteJsonLd() {
  const siteUrl = getSiteUrl()
  const organizationId = `${siteUrl}/#organization`
  const websiteId = `${siteUrl}/#website`

  const sameAs = [
    siteConfig.social.facebook,
    siteConfig.social.tiktok,
    siteConfig.social.youtube,
    siteConfig.social.instagram,
  ].filter(Boolean)

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.companyName,
        alternateName: [siteConfig.name, siteConfig.fullName, "BEPAS"],
        url: siteUrl,
        logo: absoluteUrl("/BEPAS.jpg"),
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone.replace(/\s/g, ""),
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.avenue,
          addressLocality: "Kinshasa",
          addressRegion: "Kinshasa",
          addressCountry: "CD",
        },
        sameAs,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: siteConfig.companyName,
        image: absoluteUrl("/BEPAS.jpg"),
        url: siteUrl,
        telephone: siteConfig.contact.phone.replace(/\s/g, ""),
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address,
          addressLocality: "Kinshasa",
          addressCountry: "CD",
        },
        parentOrganization: { "@id": organizationId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "fr-CD",
        publisher: { "@id": organizationId },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
