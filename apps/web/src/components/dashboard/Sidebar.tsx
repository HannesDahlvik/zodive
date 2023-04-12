'use client'

import { usePathname, useRouter } from 'next/navigation'

import SidebarLink from './SidebarLink'
import { House, IconContext, Moon, SignOut, Sun } from '@phosphor-icons/react'
import { ButtonLink } from '@zodive/ui'
import { signOut } from 'next-auth/react'
import { useTheme } from '~/hooks/useTheme'
import { DashboardSidebarLink } from '~/lib/types'

const links: DashboardSidebarLink[] = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <House />
    }
]

export default function DashboardSidebar() {
    const { theme, toggleTheme } = useTheme()

    const router = useRouter()
    const pathname = usePathname()

    return (
        <div className="flex flex-col h-screen bg-white dark:bg-surface-800 border-r border-border-light dark:border-border-dark">
            <div className="p-8 text-center">
                <ButtonLink href="/" variant="link" className="text-2xl">
                    Zodive
                </ButtonLink>
            </div>

            <div className="flex flex-col gap-3 p-8 pt-0">
                {links.map((link) => {
                    const active = pathname === link.path

                    return (
                        <SidebarLink
                            key={link.path}
                            active={active}
                            icon={link.icon}
                            title={link.title}
                            onClick={() => router.push(link.path)}
                        />
                    )
                })}
            </div>

            <div className="flex flex-col gap-3 p-8 mt-auto">
                <IconContext.Provider
                    value={{
                        weight: 'fill',
                        size: 26
                    }}
                >
                    <SidebarLink
                        icon={theme === 'dark' ? <Sun /> : <Moon />}
                        onClick={toggleTheme}
                        title="Toggle theme"
                    />

                    <SidebarLink icon={<SignOut />} title="Sign out" onClick={() => signOut()} />
                </IconContext.Provider>
            </div>
        </div>
    )
}
