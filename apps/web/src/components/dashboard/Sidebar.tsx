import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSession, signOut } from 'next-auth/react'

import {
    CalendarBlank,
    ChartPieSlice,
    CreditCard,
    GearSix,
    IconContext,
    Layout,
    SignOut
} from 'phosphor-react'
import { Button, ButtonLink } from '@zodive/ui'
import Image from 'next/image'

const links = [
    {
        title: 'Dashboard',
        path: 'home',
        icon: <Layout />
    },
    {
        title: 'Charts',
        path: 'charts',
        icon: <ChartPieSlice />
    },
    {
        title: 'Cards',
        path: 'cards',
        icon: <CreditCard />
    },
    {
        title: 'Calendar',
        path: 'calendar',
        icon: <CalendarBlank />
    }
]

const DashboardSidebar: React.FC = () => {
    const router = useRouter()

    const { data: user } = useSession()

    return (
        <IconContext.Provider
            value={{
                size: 24,
                weight: 'fill'
            }}
        >
            <div className="flex flex-col w-[275px] p-4 pt-8 bg-surface-800 text-white border-r border-r-surface-600">
                <div className="text-center">
                    <p className="font-bold text-3xl">
                        <Link href="/">Zodive</Link>
                    </p>
                </div>

                <div className="flex flex-col gap-2 mt-8">
                    {links.map((link, i) => (
                        <div
                            className={`flex items-center p-4 cursor-pointer rounded-xl duration-300 ${
                                router.pathname === `/dashboard/${link.path}`
                                    ? 'bg-white text-black'
                                    : 'hover:bg-white hover:bg-opacity-25'
                            }`}
                            key={i}
                            onClick={() => router.push(`/dashboard/${link.path}`)}
                        >
                            {link.icon}
                            <p className="ml-2 font-bold">{link.title}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center mt-auto text-center">
                    <Image
                        src={user?.user?.image as string}
                        alt={user?.user?.name as string}
                        width={64}
                        height={64}
                        className="rounded-full"
                    />

                    <div className="mt-2">
                        <p className="font-bold">{user?.user?.name}</p>
                        <p className="text-xs text-surface-200">{user?.user?.email}</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <ButtonLink href="/dashboard/settings" size="xs" color="surface">
                            <GearSix />
                        </ButtonLink>

                        <Button size="xs" color="surface" onClick={() => signOut()}>
                            <SignOut />
                        </Button>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default DashboardSidebar
