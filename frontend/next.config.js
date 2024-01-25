/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	reactStrictMode: false,
	// swcMinify: true,
	/* experimental: {
    typedRoutes: true,
  }, */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "shusha.gov.az",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "a0.muscache.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.gstatic.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	// output: { path: path.resolve(__dirname, "static") },
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.pdf/,
			type: "asset/resource",
			generator: {
				filename: "static/[hash][ext]",
			},
		});

		return config;
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
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
