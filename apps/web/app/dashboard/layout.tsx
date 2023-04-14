import { PropsWithChildren, use } from 'react'

import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { authOptions } from '@zodive/auth'
import { getServerSession } from 'next-auth'
import DashboardSidebar from '~/components/dashboard/Sidebar'

export const metadata: Metadata = {
    title: {
        default: 'Dashboard Zodive',
        template: '%s | Zodive Dashboard'
    }
}

export default function DashboardLayout({ children }: PropsWithChildren) {
    const session = use(getServerSession(authOptions))

    if (!session) return redirect('/signin')

    return (
        <div className="grid grid-cols-[300px_1fr] min-h-screen">
            <DashboardSidebar />

            <main className="h-full">{children}</main>
        </div>
    )
}
