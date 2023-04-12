import { Button, ButtonLink, H2, Input } from '@zd/ui'
import AuthProviders from '~/components/auth/AuthProviders'

export default function LoginPage() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col gap-6 w-[90%] sm:w-[450px] bg-slate-50 border border-slate-200 p-6 sm:p-12 rounded-md text-center dark:bg-surface-800 dark:border-surface-700">
                <H2 className="mb-6 pb-0">Login</H2>

                <form className="flex flex-col gap-4">
                    <Input label="Email" type="email" placeholder="name@example.com" required />

                    <Input label="Password" type="password" placeholder="********" required />

                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>

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
            </div>
        </div>
    )
}
