/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    transpilePackages: ['@zd/ui']
}

module.exports = nextConfig
