'use client'

import { Button } from '@zodive/ui'
import { BuiltInProviderType } from 'next-auth/providers'
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react'

interface Props {
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}

export default function AuthProviders({ providers }: Props) {
    return (
        <div className="flex flex-col gap-2">
            {Object.values(providers).map((provider) => (
                <div key={provider.name} className="flex flex-col">
                    <Button
                        variant="outline"
                        onClick={() =>
                            signIn(provider.id, {
                                callbackUrl: '/dashboard'
                            })
                        }
                    >
                        {provider.name}
                    </Button>
                </div>
            ))}
        </div>
    )
}
