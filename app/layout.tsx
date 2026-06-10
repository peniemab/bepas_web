import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";

import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { defaultSeoKeywords, defaultSiteDescription } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

/** Même duo typographique que bestbuilding.co (BBC) */
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "BEPAS SARL — Parcelles à crédit à Kinshasa",
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultSiteDescription,
  keywords: [...defaultSeoKeywords],
  applicationName: siteConfig.companyName,
  openGraph: {
    type: "website",
    locale: "fr_CD",
    siteName: siteConfig.companyName,
    title: "BEPAS SARL — Parcelles à crédit à Kinshasa",
    description: defaultSiteDescription,
    url: getSiteUrl(),
    images: [{ url: "/BEPAS.jpg", alt: siteConfig.companyName }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEPAS SARL — Parcelles à crédit à Kinshasa",
    description: defaultSiteDescription,
    images: ["/BEPAS.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/BEPAS.jpg", type: "image/jpeg" }],
    apple: "/BEPAS.jpg",
  },
  verification: {
    google: "vKtch-pYDC9L8769NGOWLCGpxWd6NZd032zwcoWahEE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        <SiteJsonLd />
        <SkipToContent />
        <SiteHeader />
        <div id="main-content" className="flex flex-1 flex-col">
          {children}
        </div>
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  );
}
