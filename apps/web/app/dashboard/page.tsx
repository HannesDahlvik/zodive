import { Metadata } from 'next'

import { H2 } from '@zodive/ui'

export const metadata: Metadata = {
    title: 'Dashboard'
}

export default function DashboardHomePage() {
    return (
        <div className="p-8">
            <H2>Dashboard home</H2>
        </div>
    )
}
