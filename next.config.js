/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [ 'bcrypt' ],
  },
}

module.exports = nextConfig
