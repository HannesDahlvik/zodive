import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@zodive/db'
import { type DefaultSession, type NextAuthOptions } from 'next-auth'

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string
        } & DefaultSession['user']
    }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/login'
    },
    callbacks: {
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        }
    },
    providers: []
}
