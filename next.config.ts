import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Temporary SVG placeholders until real photography is supplied.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/programs",
        destination: "https://www.showtimebasketballacademy.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
