import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production'
    ? 'https://firnazluztian.github.io/'
    : '',
  // Optionally, add exportTrailingSlash if you need trailing slashes:
  // exportTrailingSlash: true,
}
