// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: []
  },
  trailingSlash: true,
  reactStrictMode: true,
  output: 'standalone'
};

module.exports = nextConfig;
