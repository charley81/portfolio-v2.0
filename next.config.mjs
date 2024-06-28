/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ hostname: 'utfs.io' }]
  },
  productionBrowserSourceMaps: true
}

export default nextConfig
