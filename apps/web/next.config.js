const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin')
!process.env.SKIP_ENV_VALIDATION && require('@zodive/env')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        appDir: true,
        swcPlugins: [['next-superjson-plugin', {}]]
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
