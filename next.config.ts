import type { NextConfig } from "next";

// Empty by default (custom domain / local dev). CI sets SITE_BASE_PATH to
// "/IndySeamstress" for the default GitHub Pages project-subpath deploy.
const basePath = process.env.SITE_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    // next/image optimization needs a server; static export has none.
    unoptimized: true,
  },
};

export default nextConfig;
