/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    transpilePackages: ['@zodive/ui']
}

module.exports = nextConfig
