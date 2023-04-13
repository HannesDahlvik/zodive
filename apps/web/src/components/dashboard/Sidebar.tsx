'use client'

import { usePathname, useRouter } from 'next/navigation'

import SidebarLink from './SidebarLink'
import { GearSix, House, IconContext, Moon, SignOut, Sun } from '@phosphor-icons/react'
import { Button, ButtonLink } from '@zodive/ui'
import { signOut, useSession } from 'next-auth/react'
import { useTheme } from '~/hooks/useTheme'
import { DashboardSidebarLink } from '~/lib/types'

const links: DashboardSidebarLink[] = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <House />
    },
    {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <GearSix />
    }
]

export default function DashboardSidebar() {
    const { theme, toggleTheme } = useTheme()

    const { data: session } = useSession()

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

            <div className="flex flex-col items-center p-8 mt-auto text-center">
                <IconContext.Provider
                    value={{
                        weight: 'fill',
                        size: 22
                    }}
                >
                    <img
                        src={session?.user.image as string}
                        alt={session?.user.name as string}
                        width={64}
                        height={64}
                        className="rounded-full"
                    />

                    <div className="mt-2">
                        <p className="font-bold">{session?.user.name}</p>
                        <p className="text-xs text-surface-300 dark:text-surface-200">
                            {session?.user.email}
                        </p>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <Button onClick={toggleTheme}>
                            {theme === 'dark' ? <Sun /> : <Moon />}
                        </Button>

                        <Button onClick={() => signOut()}>
                            <SignOut />
                        </Button>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}
