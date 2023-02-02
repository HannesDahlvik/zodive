const { env } = require('./src/server/env')

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@zodive/ui'],
    experimental: {
        fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }]
    },
    publicRuntimeConfig: {
        NODE_ENV: env.NODE_ENV
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'googleusercontent.com',
                port: ''
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/dashboard',
                destination: '/dashboard/home',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
