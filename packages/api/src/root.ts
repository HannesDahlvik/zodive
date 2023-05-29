import { settingsRouter } from './routers/settings'
import { transactionsRouter } from './routers/transactions'
import { procedure, router } from './trpc'

export const appRouter = router({
    whoami: procedure.query(({ ctx }) => ctx.user),
    transactions: transactionsRouter,
    settings: settingsRouter
})

export type AppRouter = typeof appRouter
