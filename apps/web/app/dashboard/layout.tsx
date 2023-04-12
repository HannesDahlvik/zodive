import { PropsWithChildren } from 'react'

import { redirect } from 'next/navigation'

import { authOptions } from '@zodive/auth'
import { getServerSession } from 'next-auth'

export default async function DashboardLayout({ children }: PropsWithChildren) {
    const session = await getServerSession(authOptions)

    if (!session) return redirect('/signin')

    return (
        <div className="grid grid-cols-[300px_1fr]">
            <div></div>

            {children}
        </div>
    )
}
