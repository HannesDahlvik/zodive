import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '@zodive/api'

export const api = createTRPCReact<AppRouter>({
    unstable_overrides: {
        useMutation: {
            async onSuccess(opts) {
                await opts.originalFn()
                await opts.queryClient.invalidateQueries()
            }
        }
    }
})
