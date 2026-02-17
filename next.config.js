/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
  transpilePackages: ['three'],
  async redirects() {
    return [
      { source: '/team', destination: '/about', permanent: true },
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/offerings', destination: '/services', permanent: true },
    ]
  },
}

module.exports = nextConfig
