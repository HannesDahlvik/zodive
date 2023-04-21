'use client'

import { PropsWithChildren, useEffect, useState } from 'react'

export function Theme({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }, [])

    return <>{children}</>
}
