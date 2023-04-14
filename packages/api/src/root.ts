import { transactionsRouter } from './router/transactions'
import { procedure, router } from './trpc'

export const appRouter = router({
    whoami: procedure.query(({ ctx }) => ctx.user),
    transactions: transactionsRouter
})

export type AppRouter = typeof appRouter
