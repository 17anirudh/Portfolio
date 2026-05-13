import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com"
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "www.ndimdelhi.org"
      },
      {
        protocol: "https",
        hostname: "tenor.com"
      },
      {
        protocol: "https",
        hostname: "media1.tenor.com"
      }
    ]
  }
};

export default nextConfig;
