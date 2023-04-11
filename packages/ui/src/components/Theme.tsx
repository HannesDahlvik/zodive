'use client'

import { PropsWithChildren, useEffect } from 'react'

export function Theme({ children }: PropsWithChildren) {
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return <>{children}</>
}
