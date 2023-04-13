'use client'

import { PropsWithChildren, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/react-query'
import { SessionProvider } from 'next-auth/react'
import superjson from 'superjson'
import { api } from '~/lib/api'

function getBaseUrl() {
    if (typeof window !== 'undefined') return ''
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
    return `http://localhost:${process.env.PORT ?? 3000}`
}

export default function Providers({ children }: PropsWithChildren) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false
                    }
                }
            })
    )
    const [trpcClient] = useState(() =>
        api.createClient({
            links: [
                loggerLink({
                    enabled: () => process.env.NODE_ENV === 'development'
                }),
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`
                })
            ],
            transformer: superjson
        })
    )
    return (
        <SessionProvider>
            <api.Provider client={trpcClient} queryClient={queryClient}>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </api.Provider>
        </SessionProvider>
    )
}
