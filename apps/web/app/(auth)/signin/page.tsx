import { Metadata } from 'next'

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
            <h2 className="mb-6 pb-0">Sign in</h2>

            <SigninForm />

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-card-foreground">Or continue with</span>
                </div>
            </div>

            {providers && <AuthProviders providers={providers} />}
        </>
    )
}
