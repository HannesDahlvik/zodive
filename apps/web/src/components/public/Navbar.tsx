'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { GithubLogo, IconContext, Moon, Sun } from '@phosphor-icons/react'
import { Button, ButtonLink, cn, useTheme } from '@zodive/ui'

export default function PublicNavbar() {
    const { theme, toggleTheme } = useTheme()

    const [transparent, setTransparent] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 50) {
                setTransparent(true)
            } else {
                setTransparent(false)
            }
        })
    }, [])

    return (
        <nav
            className={cn(
                'sticky top-0 flex justify-center items-center h-20 w-full border-b z-50',
                transparent
                    ? 'border-b-transparent'
                    : 'bg-background/50 backdrop-blur-md border-b-border'
            )}
        >
            <div className="container flex justify-between items-center">
                <Link href="/" className="font-bold text-lg text-black dark:text-white">
                    Zodive
                </Link>

                <div className="flex items-center gap-3">
                    <IconContext.Provider
                        value={{
                            weight: 'fill',
                            size: 18
                        }}
                    >
                        <ButtonLink
                            className="px-3"
                            href="https://github.com/HannesDahlvik/zodive"
                            target="_blank"
                        >
                            <GithubLogo />
                        </ButtonLink>

                        <Button className="px-3" onClick={toggleTheme}>
                            {theme === 'dark' ? <Sun /> : <Moon />}
                        </Button>
                    </IconContext.Provider>
                </div>
            </div>
        </nav>
    )
}
