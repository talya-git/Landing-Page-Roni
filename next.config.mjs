/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // every page becomes folder/index.html, so /accessibility/ works on any static host
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
