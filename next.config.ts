import type { NextConfig } from "next";

// Vercel sets `VERCEL=1` during builds. Standalone output is for cPanel/Docker only;
// the Vercel platform uses the default Next.js build output.
const isVercel = Boolean(process.env.VERCEL);

const nextConfig: NextConfig = {
  // On Vercel, use the default image pipeline. Elsewhere (e.g. portable cPanel zip),
  // avoid sharp platform binaries when building on a different OS than the server.
  images: {
    unoptimized: !isVercel,
  },
};

if (!isVercel) {
  nextConfig.output = "standalone";
}

export default nextConfig;
