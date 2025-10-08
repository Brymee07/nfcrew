/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    // allow local images
    unoptimized: true
  }
}
module.exports = nextConfig
