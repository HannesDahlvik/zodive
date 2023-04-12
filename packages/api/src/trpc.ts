import { createContext } from './context'
import { TRPCError, initTRPC } from '@trpc/server'
import superjson from 'superjson'

const t = initTRPC.context<typeof createContext>().create({
    transformer: superjson
})

const isAuthed = t.middleware(({ ctx, next }) => {
    if (!ctx.session?.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'You are not authorized' })
    }

    return next({
        ctx: {
            session: ctx.session
        }
    })
})

export const router = t.router

export const procedure = t.procedure
export const authedProcedure = t.procedure.use(isAuthed)
