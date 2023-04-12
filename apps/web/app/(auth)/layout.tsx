'use client'

import { PropsWithChildren } from 'react'

import Link from 'next/link'

import { CaretLeft } from '@phosphor-icons/react'
import { buttonVariants, cn } from '@zd/ui'

export default function AuthLayout({ children }: PropsWithChildren) {
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

            {children}
        </div>
    )
}
