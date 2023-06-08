import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { ChartTypes, prisma } from '@zodive/db'
import { env } from '@zodive/env'
import { type DefaultUser, type DefaultSession, type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string
            defaultChart: ChartTypes
        } & DefaultSession['user']
    }

    interface User extends DefaultUser {
        defaultChart: ChartTypes
    }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/signin'
    },
    callbacks: {
        session({ session, user, trigger, newSession }) {
            if (trigger === 'update' && newSession) {
                session.user = newSession
            }

            if (session.user) {
                session.user.id = user.id
                session.user.defaultChart = user.defaultChart
            }

            return session
        }
    },
    providers: [
        GithubProvider({
            clientId: env.GITHUB_CLIENT_ID,
            clientSecret: env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        })
    ]
}
