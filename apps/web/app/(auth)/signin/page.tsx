import { Metadata } from 'next'

import { H2 } from '@zodive/ui'
import { getProviders } from 'next-auth/react'
import AuthProviders from '~/components/auth/AuthProviders'
import SigninForm from '~/components/auth/SigninForm'

export const metadata: Metadata = {
    title: 'Signin'
}

export default async function SigninPage() {
    const providers = await getProviders()

    return (
        <>
            <H2 className="mb-6 pb-0">Signin</H2>

            <SigninForm />

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-300 dark:border-surface-500" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-slate-50 dark:bg-surface-800 px-2 text-slate-600 dark:text-surface-100">
                        Or continue with
                    </span>
                </div>
            </div>

            {providers && <AuthProviders providers={providers} />}
        </>
    )
}
