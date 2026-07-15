/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['grainy-gradients.vercel.app'],
  },
}

module.exports = nextConfig