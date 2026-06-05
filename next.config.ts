import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/nos-solutions/securisation-fonciere",
        destination: "/on-vous-aide/acheter-une-parcelle#faq",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
