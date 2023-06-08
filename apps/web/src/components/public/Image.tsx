'use client'

import { useEffect, useRef, useState } from 'react'

import { cn, useTheme } from '@zodive/ui'

interface Props {
    alt: string
    className?: string
    darkSrc?: string
    lightSrc?: string
}

export default function HomeImage({ alt, className, darkSrc, lightSrc }: Props) {
    const { theme } = useTheme()

    const imageRef = useRef<HTMLImageElement>(null)
    const [changed, setChanged] = useState(true)

    useEffect(() => {
        const imageY = imageRef.current?.y as number
        window.addEventListener('scroll', () => {
            if (window.scrollY < imageY - 300) {
                setChanged(true)
            } else {
                setChanged(false)
            }
        })
    }, [])

    return (
        <img
            className={cn(
                'border-2 border-border rounded-3xl transition-all duration-500 z-20',
                className,
                changed ? 'scale-90 opacity-50' : 'scale-100 opacity-90'
            )}
            src={theme === 'dark' ? darkSrc : lightSrc}
            alt={alt}
            ref={imageRef}
        />
    )
}
