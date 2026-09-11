import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/shop", destination: "/#models", permanent: false },
      { source: "/build-your-bike", destination: "/product/apex-7", permanent: false },
      { source: "/accessories", destination: "/product/stealth-r", permanent: false },
      { source: "/store-locator", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
