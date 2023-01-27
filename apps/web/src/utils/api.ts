import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import type { AppRouter } from '../server/routers/_app'
import SuperJSON from 'superjson'

function getBaseUrl() {
    if (typeof window !== 'undefined') return ''

    return `http://localhost:3000`
}

export const api = createTRPCNext<AppRouter>({
    config() {
        return {
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`
                })
            ],
            transformer: SuperJSON
        }
    },
    ssr: false
})
