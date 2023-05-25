'use client'

import { useState } from 'react'

import DashboardHomeChartAll from './ChartAll'
import DashboardHomeChartMonth from './ChartMonth'
import DashboardHomeChartWeek from './ChartWeek'
import DashboardHomeChartYear from './ChartYear'
import { Transaction } from '@zodive/db'
import { Badge, cn } from '@zodive/ui'
import { DashboardHomeChartTypes, dashboardHomeChartTypes } from '~/lib/types'

interface Props {
    transactions: Transaction[]
}

export default function DashboardHomeChart({ transactions }: Props) {
    const [chartType, setChartType] = useState<DashboardHomeChartTypes>('year')

    return (
        <div className="grid grid-rows-[30px_1fr] gap-4 h-full">
            <div>
                {dashboardHomeChartTypes.map((row) => (
                    <Badge
                        className={cn(
                            'mr-2 capitalize cursor-pointer',
                            row === chartType && 'bg-border'
                        )}
                        variant="outline"
                        size="md"
                        onClick={() => setChartType(row)}
                        key={row}
                    >
                        {row}
                    </Badge>
                ))}
            </div>

            <div>
                {chartType === 'all' ? (
                    <DashboardHomeChartAll />
                ) : chartType === 'year' ? (
                    <DashboardHomeChartYear transactions={transactions} data-superjson />
                ) : chartType === 'month' ? (
                    <DashboardHomeChartMonth />
                ) : (
                    <DashboardHomeChartWeek />
                )}
            </div>
        </div>
    )
}
