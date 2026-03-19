import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.bayshorechiropractic.com' },
      { protocol: 'https', hostname: 'cdcssl.ibsrv.net' },
    ],
  },
};

export default nextConfig;
