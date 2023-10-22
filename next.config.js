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
    API_URL: process.env.API_URL,
  },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
