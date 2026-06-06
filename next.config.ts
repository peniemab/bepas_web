import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/nos-solutions/securisation-fonciere",
        destination: "/on-vous-aide/acheter-une-parcelle#faq",
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
