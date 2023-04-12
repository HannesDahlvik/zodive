'use client'

import { useRouter } from 'next/navigation'

import { IconContext } from '@phosphor-icons/react'
import { P, cn } from '@zodive/ui'

interface Props {
    title: string
    icon: any
    active?: boolean
    href?: string
    onClick?: () => void
}

export default function SidebarLink({ active, icon, title, href, onClick }: Props) {
    const router = useRouter()

    const handleClick = () => {
        if (onClick) {
            onClick()
        } else if (href) {
            router.push(`/dashboard/${href}`)
        }
    }

    return (
        <div
            className={cn(
                'flex items-center gap-4 cursor-pointer p-3 rounded-xl duration-200',
                'hover:bg-primary-900 hover:text-white dark:hover:bg-primary-100 dark:hover:text-black',
                active && 'bg-primary-900 text-white dark:bg-primary-100 dark:text-black'
            )}
            onClick={handleClick}
        >
            <IconContext.Provider
                value={{
                    weight: active ? 'fill' : 'regular',
                    size: 26
                }}
            >
                {icon}
            </IconContext.Provider>

            <P className="font-bold !mt-0">{title}</P>
        </div>
    )
}
