const { z } = require('zod')

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    NODE_ENV: z.enum(['development', 'production'])
})

const env = envSchema.safeParse(process.env)

if (!env.success) {
    console.error('Invalid environment variables:', JSON.stringify(env.error.format(), null, 4))
    process.exit(1)
}

module.exports.env = env.data
