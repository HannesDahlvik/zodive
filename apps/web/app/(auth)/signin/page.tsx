import { Metadata } from 'next'

import { Skeleton } from '@zodive/ui'
import { getProviders } from 'next-auth/react'
import AuthProviders from '~/components/auth/AuthProviders'

export const metadata: Metadata = {
    title: 'Sign in'
}

export default async function SigninPage() {
    const providers = await getProviders()

    return (
        <>
            <h2 className="mb-4 pb-0">Sign in</h2>

            {!providers ? (
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-10" />
                    <Skeleton className="h-10" />
                </div>
            ) : (
                <AuthProviders providers={providers} />
            )}
        </>
    )
}
