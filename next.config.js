const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: [],
  },
  eslint: {
    dirs: ['src'],
  },
  // Configuración optimizada para desarrollo
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  // Habilitar Fast Refresh explícitamente
  experimental: {
    fastRefresh: true,
  },
}

module.exports = nextConfig