'use client'

import { PropsWithChildren } from 'react'

import Link from 'next/link'

import { CaretLeft } from '@phosphor-icons/react'
import { buttonVariants, cn } from '@zodive/ui'

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

            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col gap-6 w-[90%] sm:w-[450px] bg-white border border-slate-300 p-6 sm:p-12 rounded-md text-center dark:bg-surface-800 dark:border-surface-700">
                    {children}
                </div>
            </div>
        </div>
    )
}
