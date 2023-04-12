import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter, createContext } from '@zodive/api'

export default createNextApiHandler({
    router: appRouter,
    createContext(opts) {
        return createContext({
            ...opts
        })
    }
})
