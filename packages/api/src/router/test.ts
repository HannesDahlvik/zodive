import { procedure, router } from '../trpc'

export const testRouter = router({
    test: procedure.query(() => {
        return 'Test route'
    }),
    ok: procedure.mutation(({ ctx }) => {
        return true
    })
})
