import { NextPage } from 'next'
import { BuiltInProviderType } from 'next-auth/providers'
import { ClientSafeProvider, LiteralUnion, getProviders, signIn } from 'next-auth/react'

import { Button } from '@zodive/ui'

interface Props {
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}

const SignInPage: NextPage<Props> = ({ providers }) => {
    return (
        <div className="flex flex-col justify-center items-center text-center h-screen">
            <div className="w-80">
                <h1>Sign in</h1>

                <div className="w-full mt-8">
                    {Object.values(providers).map(
                        (provider) =>
                            provider.id !== 'email' && (
                                <div key={provider.name} className="mb-2 w-full">
                                    <Button
                                        fullWidth
                                        onClick={() =>
                                            signIn(provider.id, {
                                                callbackUrl: '/dashboard'
                                            })
                                        }
                                    >
                                        with {provider.name}
                                    </Button>
                                </div>
                            )
                    )}
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
