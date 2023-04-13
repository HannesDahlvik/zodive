const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin')
const { env } = require('@zodive/env')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        appDir: true
    },
    publicRuntimeConfig: {
        NODE_ENV: env.NODE_ENV
    },
    transpilePackages: ['@zodive/api', '@zodive/auth', '@zodive/db', '@zodive/env', '@zodive/ui'],
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.plugins = [...config.plugins, new PrismaPlugin()]
        }

        return config
    }
}

module.exports = nextConfig
