import { Metadata } from 'next'

import { H2 } from '@zodive/ui'

export const metadata: Metadata = {
    title: 'Dashboard'
}

export default function DashboardHome() {
    return <H2>Dashboard home</H2>
}
