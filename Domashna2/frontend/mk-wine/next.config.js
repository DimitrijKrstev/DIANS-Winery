/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["media.discordapp.net", "cdn.discordapp.com", "cdn.midjourney.com"],
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
