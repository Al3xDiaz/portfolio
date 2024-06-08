/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		// domains: [
		//	 "picsum.photos",
		// ],
		unoptimized : true
	},
	distDir:"build",
	publicRuntimeConfig: {
		API_URL: process.env.API_URL,
		BASE_URL: process.env.BASE_URL || "",
		DASH_URL: process.env.DASH_URL || "",
	},
	output: 'export',
	trailingSlash: true,
	skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
