import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  
  // Ini adalah kode baru untuk menghilangkan logo "N"
  devIndicators: false,
};

export default nextConfig;