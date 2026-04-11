import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces `.next/standalone/` for cPanel Node.js / VPS / Docker deployments.
  output: "standalone",
};

export default nextConfig;
