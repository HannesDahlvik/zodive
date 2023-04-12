const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    transpilePackages: ['@zodive/api', '@zodive/auth', '@zodive/db', '@zodive/ui'],
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.plugins = [...config.plugins, new PrismaPlugin()]
        }

        return config
    }
}

module.exports = nextConfig
