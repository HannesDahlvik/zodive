import { PropsWithChildren } from 'react'

import { useSession } from 'next-auth/react'

import DashboardSidebar from '~/components/dashboard/Sidebar'

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const { status: sessionStatus } = useSession()

    if (sessionStatus === 'loading') {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />

            {children}
        </div>
    )
}

export default DashboardLayout
