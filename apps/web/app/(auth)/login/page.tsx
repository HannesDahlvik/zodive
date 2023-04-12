import { Metadata } from 'next'

import { ButtonLink, H2 } from '@zodive/ui'
import AuthProviders from '~/components/auth/AuthProviders'
import LoginForm from '~/components/auth/LoginForm'

export const metadata: Metadata = {
    title: 'Login'
}

export default function LoginPage() {
    return (
        <>
            <H2 className="mb-6 pb-0">Login</H2>

            <LoginForm />

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

            <AuthProviders />

            <ButtonLink href="/signup" variant="link">
                Don't have an account? Sign up
            </ButtonLink>
        </>
    )
}
