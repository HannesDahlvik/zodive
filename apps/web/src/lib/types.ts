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

export const dashboardHomeChartTypes = ['all', 'year', 'month', 'week'] as const
export type DashboardHomeChartTypes = (typeof dashboardHomeChartTypes)[number]
