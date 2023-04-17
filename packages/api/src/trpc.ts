import { createContext } from './context'
import { TRPCError, initTRPC } from '@trpc/server'
import superjson from 'superjson'

const t = initTRPC.context<typeof createContext>().create({
    transformer: superjson
})

export const router = t.router

export const procedure = t.procedure
export const authedProcedure = t.procedure.use(({ ctx, next }) => {
    if (!ctx.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'You are not authorized' })
    }

    return next({
        ctx: {
            user: ctx.user
        }
    })
})
