import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // todo remove in prod if not needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: 'https',
        hostname: "avatar.vercel.sh",
      },
    ],
  },
};

export default nextConfig;
