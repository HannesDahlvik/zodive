'use client'

import { Fragment } from 'react'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import SidebarLink from './SidebarLink'
import { GearSix, House, IconContext, Moon, SignOut, Sun, Wallet } from '@phosphor-icons/react'
import { Button, ButtonLink, useTheme } from '@zodive/ui'
import { signOut, useSession } from 'next-auth/react'
import { DashboardSidebarLink } from '~/lib/types'

const links: DashboardSidebarLink[] = [
    {
        title: 'Home',
        path: '/dashboard/home',
        icon: <House />
    },
    {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <Wallet />
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

    const handleSignout = () => {
        router.replace('/')
        signOut()
    }

    return (
        <div className="flex flex-col w-[300px] h-screen bg-card border-r border-border">
            <div className="p-8 text-center">
                <Link href="/" className="text-2xl text-black dark:text-white">
                    Zodive
                </Link>
            </div>

            <div className="flex flex-col gap-3 p-8 pt-0">
                {links.map((link) => {
                    const active = pathname?.includes(link.path)

                    return (
                        <Fragment key={link.path}>
                            <SidebarLink
                                active={active}
                                icon={link.icon}
                                title={link.title}
                                onClick={() => router.push(link.path)}
                            />
                        </Fragment>
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
                        <p className="!mt-0 text-xs text-muted-foreground">{session?.user.email}</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <Button onClick={toggleTheme}>
                            {theme === 'dark' ? <Sun /> : <Moon />}
                        </Button>

                        <Button onClick={handleSignout}>
                            <SignOut />
                        </Button>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}
