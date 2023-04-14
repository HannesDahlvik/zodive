import { Metadata } from 'next'

import { H2 } from '@zodive/ui'

export const metadata: Metadata = {
    title: 'Settings'
}

export default function DashboardSettingsPage() {
    return (
        <div className="p-8">
            <H2>Dashboard settings</H2>
        </div>
    )
}
