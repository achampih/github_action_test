import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/github_action_test" : "",
  // basePath: "/github_action_test",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
