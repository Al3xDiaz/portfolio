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
    API_URL: process.env.API_URL,
  },
}

module.exports = nextConfig
