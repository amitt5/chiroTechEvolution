import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.bayshorechiropractic.com' },
      { protocol: 'https', hostname: 'cdcssl.ibsrv.net' },
      { protocol: 'https', hostname: 'www.bettendorfchiropractic.com' },
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
    ],
  },
};

export default nextConfig;
