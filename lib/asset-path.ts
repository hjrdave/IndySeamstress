// next/image doesn't auto-prefix basePath for local sources in this setup
// (confirmed against a build with SITE_BASE_PATH set — the deployed GitHub
// Pages site under /IndySeamstress/ 404'd on every image). Runs at
// build/render time in Server Components, so process.env is safe to read
// directly here without a NEXT_PUBLIC_ prefix.
const basePath = process.env.SITE_BASE_PATH || "";

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}
