'use client'

import { usePathname, useRouter } from 'next/navigation'

import { IconContext, Layout, UserCircle } from '@phosphor-icons/react'
import { cn } from '@zodive/ui'
import { DashboardSidebarLink } from '~/lib/types'

const links: DashboardSidebarLink[] = [
    {
        title: 'My details',
        path: '/dashboard/settings/my-details',
        icon: <UserCircle />
    },
    {
        title: 'Dashboard',
        path: '/dashboard/settings/dashboard',
        icon: <Layout />
    }
]

export default function DashboardSettingsSidebar() {
    const router = useRouter()
    const pathname = usePathname()

    const handleNavigation = (link: DashboardSidebarLink) => {
        router.push(link.path)
    }

    return (
        <div className="flex flex-col gap-8 border-r border-r-border p-8">
            <h2 className="!p-0">Settings</h2>

            <div className="flex flex-col gap-2">
                <IconContext.Provider
                    value={{
                        size: 26,
                        weight: 'fill'
                    }}
                >
                    {links.map((link) => (
                        <div
                            className={cn(
                                'flex items-center gap-2 p-2 rounded-xl font-bold cursor-pointer transition-colors hover:bg-muted/50',
                                pathname?.includes(link.path) && 'bg-muted hover:bg-muted'
                            )}
                            key={link.title}
                            onClick={() => handleNavigation(link)}
                        >
                            {link.icon}
                            <p className="!mt-0">{link.title}</p>
                        </div>
                    ))}
                </IconContext.Provider>
            </div>
        </div>
    )
}
