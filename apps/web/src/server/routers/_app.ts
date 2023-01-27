import { procedure, router } from '../trpc'

export const appRouter = router({
    check: procedure.query(() => 'ok!')
})

export type AppRouter = typeof appRouter
