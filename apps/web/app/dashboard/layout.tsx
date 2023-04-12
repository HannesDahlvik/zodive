import { PropsWithChildren, use } from 'react'

import { redirect } from 'next/navigation'

import { authOptions } from '@zodive/auth'
import { getServerSession } from 'next-auth'
import DashboardSidebar from '~/components/dashboard/Sidebar'

export default function DashboardLayout({ children }: PropsWithChildren) {
    const session = use(getServerSession(authOptions))

    if (!session) return redirect('/signin')

    return (
        <div className="grid grid-cols-[300px_1fr] min-h-screen">
            <DashboardSidebar />

            <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
        </div>
    )
}
