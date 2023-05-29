'use client'

import { PropsWithChildren, useState } from 'react'

import { DateProvider } from './contexts/DateContext'
import { SettingsProvider } from './contexts/SettingsContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/react-query'
import { AlertsProvider, ModalsProvider } from '@zodive/ui'
import { SessionProvider } from 'next-auth/react'
import superjson from 'superjson'
import { api } from '~/lib/api'

function getBaseUrl() {
    if (typeof window !== 'undefined') return ''
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
    return 'http://localhost:3000'
}

export default function Providers({ children }: PropsWithChildren) {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() =>
        api.createClient({
            links: [
                loggerLink({
                    enabled: (opts) =>
                        process.env.NODE_ENV === 'development' ||
                        (opts.direction === 'down' && opts.result instanceof Error)
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
                <QueryClientProvider client={queryClient}>
                    <SettingsProvider>
                        <ModalsProvider>
                            <AlertsProvider>
                                <DateProvider>
                                    <>{children}</>
                                </DateProvider>
                            </AlertsProvider>
                        </ModalsProvider>
                    </SettingsProvider>
                </QueryClientProvider>
            </api.Provider>
        </SessionProvider>
    )
}
