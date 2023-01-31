const { env } = require('./src/server/env')

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@zodive/ui'],
    experimental: {
        fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }]
    },
    publicRuntimeConfig: {
        NODE_ENV: env.NODE_ENV
    }
}

module.exports = nextConfig
