import React from 'react'

import Error from 'next/error'

export interface DashboardSidebarLink {
    title: string
    path: string
    icon: React.ReactNode
}

export interface ErrorProps {
    error: Error
    reset: () => void
}
