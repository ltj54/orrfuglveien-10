import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES === "true" ? "/orrfuglveien-10" : "",
  images: { unoptimized: true },
};

export default nextConfig;
