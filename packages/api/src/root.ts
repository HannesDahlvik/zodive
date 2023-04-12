import { testRouter } from './router/test'
import { procedure, router } from './trpc'

export const appRouter = router({
    test: testRouter,
    whoami: procedure.query(({ ctx }) => ctx.session)
})

export type AppRouter = typeof appRouter
