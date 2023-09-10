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
    
  },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
