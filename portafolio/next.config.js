/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "picsum.photos",
    ],
  },
  distDir:"build",
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || "http://localhost:1337",
  },
}

module.exports = nextConfig
