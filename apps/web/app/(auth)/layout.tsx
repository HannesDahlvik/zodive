'use client'

import { PropsWithChildren } from 'react'

import Link from 'next/link'

import { CaretLeft } from '@phosphor-icons/react'
import { Button, ButtonLink, buttonVariants, cn } from '@zodive/ui'
import { signOut, useSession } from 'next-auth/react'

export default function AuthLayout({ children }: PropsWithChildren) {
    const session = useSession()

    if (session.data?.user)
        return (
            <div className="relative h-min-screen">
                <div className="flex justify-center items-center h-screen">
                    <div className="flex items-center flex-col gap-6 w-[90%] sm:w-[450px] bg-card border border-border p-6 sm:p-12 rounded-md text-center">
                        <h5>You are already signed in</h5>
                        <div className="flex gap-2">
                            <ButtonLink href="/dashboard">Dashboard</ButtonLink>
                            <Button onClick={() => signOut()}>Sign out</Button>
                        </div>
                    </div>
                </div>
            </div>
        )

    return (
        <div className="relative h-min-screen">
            <Link
                href="/"
                className={cn(
                    buttonVariants({
                        variant: 'link',
                        className: 'absolute top-4 left-2 flex items-center gap-2'
                    })
                )}
            >
                <CaretLeft weight="bold" /> Back
            </Link>

            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col gap-6 w-[90%] sm:w-[450px] bg-card border border-border p-6 sm:p-12 rounded-md text-center">
                    {children}
                </div>
            </div>
        </div>
    )
}
