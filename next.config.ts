import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/BodaCaroSergio',
  assetPrefix: '/BodaCaroSergio',
};

export default nextConfig;
