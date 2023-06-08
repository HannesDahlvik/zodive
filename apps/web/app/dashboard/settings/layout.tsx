import { PropsWithChildren } from 'react'

import { Metadata } from 'next'

import DashboardSettingsSidebar from '~/components/dashboard/settings/Sidebar'

export const metadata: Metadata = {
    title: 'Settings'
}

export default function DashboardSettingsLayout({ children }: PropsWithChildren) {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-[300px_1fr] h-full">
                <DashboardSettingsSidebar />

                <div className="p-16">{children}</div>
            </div>
        </div>
    )
}
