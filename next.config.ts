import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/nos-solutions/securisation-fonciere",
        destination: "/nos-solutions#faq",
        permanent: true,
      },
      {
        source: "/nos-solutions/vente-de-parcelles",
        destination: "/nos-solutions#vente-de-parcelles",
        permanent: true,
      },
      {
        source: "/on-vous-aide/acheter-une-parcelle",
        destination: "/nos-solutions#vente-de-parcelles",
        permanent: true,
      },
      {
        source: "/on-vous-aide/construire-votre-parcelle",
        destination: "/nos-solutions#construire-votre-parcelle",
        permanent: true,
      },
      {
        source: "/nos-solutions/notre-impact",
        destination: "/#notre-impact",
        permanent: true,
      },
      {
        source: "/projets/cite-exploit-3-maluku",
        destination: "/projets/maluku/cite-exploit-3-maluku",
        permanent: true,
      },
      {
        source: "/projets/cite-exploit-2-mont-ngafula",
        destination: "/projets/mont-ngafula/cite-exploit-2-mont-ngafula",
        permanent: true,
      },
      {
        source: "/projets/cite-c-possible-maluku",
        destination: "/projets/maluku/cite-c-possible-maluku",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
