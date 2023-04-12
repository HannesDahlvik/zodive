import { appRouter, createContext, getSession } from '@zodive/api'
import superjson from 'superjson'
import { createTRPCNextLayout } from '~/components/createTRPCNextLayout'

export const rsc = createTRPCNextLayout({
    router: appRouter,
    transformer: superjson,
    createContext() {
        return createContext({
            type: 'rsc',
            session: getSession()
        })
    }
})
