/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: [
    //   "picsum.photos",
    // ],
    unoptimized : true
  },
  distDir:"build",
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || "http://localhost:1337",
  },
  output: 'export',
}

module.exports = nextConfig
