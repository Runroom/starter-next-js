// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
        pathname: '/data/**'
      }
    ]
  },
  trailingSlash: true,
  reactStrictMode: true,
  output: 'standalone'
};

module.exports = nextConfig;
