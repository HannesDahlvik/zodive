'use client'

import { PropsWithChildren, useEffect, useState } from 'react'

import { SkeletonTheme } from './Skeleton'

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

    return (
        <SkeletonTheme
            baseColor={theme === 'light' ? '#EEEEEE' : '#333333'}
            highlightColor={theme === 'light' ? '#F5F5F5' : '#4D4D4D'}
        >
            {children}
        </SkeletonTheme>
    )
}
