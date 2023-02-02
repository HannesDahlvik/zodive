import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { BuiltInProviderType } from 'next-auth/providers'
import { ClientSafeProvider, LiteralUnion, getProviders, signIn } from 'next-auth/react'
import { errors } from '../components/SignInError'

import { Button } from '@zodive/ui'
import SignInError from '~/components/SignInError'

interface Props {
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}

const SignInPage: NextPage<Props> = ({ providers }) => {
    const { error } = useRouter().query

    return (
        <div className="flex flex-col justify-center items-center text-center h-screen">
            <div className="w-80">
                <h1 className="mb-6">Sign in</h1>

                {error && <SignInError error={error as keyof typeof errors} />}

                <div className="w-full mt-8">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name} className="mb-2 w-full">
                            <Button
                                fullWidth
                                onClick={() =>
                                    signIn(provider.id, {
                                        callbackUrl: '/dashboard'
                                    })
                                }
                            >
                                With {provider.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SignInPage

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers }
    }
}
