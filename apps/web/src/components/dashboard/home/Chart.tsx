'use client'

import { useEffect, useState } from 'react'

import DashboardHomeChartAll from './ChartAll'
import DashboardHomeChartMonth from './ChartMonth'
import DashboardHomeChartWeek from './ChartWeek'
import DashboardHomeChartYear from './ChartYear'
import { CaretLeft, CaretRight, IconContext } from '@phosphor-icons/react'
import { ChartTypes, Transaction } from '@zodive/db'
import { Badge, cn } from '@zodive/ui'
import { useDate } from '~/contexts/DateContext'
import { useSettings } from '~/contexts/SettingsContext'
import { dashboardHomeChartTypes } from '~/lib/types'

interface Props {
    transactions: Transaction[]
}

export default function DashboardHomeChart({ transactions }: Props) {
    const { settings } = useSettings()
    const { date, nextYear, nextMonth, nextWeek, prevYear, prevMonth, prevWeek, resetDate } =
        useDate()
    const [chartType, setChartType] = useState<ChartTypes>('year')

    useEffect(() => {
        if (settings?.defaultChart) {
            setChartType(settings.defaultChart)
        }
    }, [settings])

    return (
        <div className="grid grid-rows-[30px_1fr] gap-4 h-full">
            <div className="flex items-center">
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

                <div className="grid grid-cols-[20px_150px_20px]">
                    <IconContext.Provider
                        value={{
                            size: 20,
                            cursor: 'pointer'
                        }}
                    >
                        {chartType === 'year' ? (
                            <>
                                <CaretLeft onClick={prevYear} />
                                <p
                                    className="!mt-0 cursor-pointer text-center select-none"
                                    onClick={resetDate}
                                >
                                    {date?.year()}
                                </p>
                                <CaretRight onClick={nextYear} />
                            </>
                        ) : chartType === 'month' ? (
                            <>
                                <CaretLeft onClick={prevMonth} />
                                <p
                                    className="!mt-0 cursor-pointer text-center select-none"
                                    onClick={resetDate}
                                >
                                    {date?.format('MMMM YYYY')}
                                </p>
                                <CaretRight onClick={nextMonth} />
                            </>
                        ) : chartType === 'week' ? (
                            <>
                                <CaretLeft onClick={prevWeek} />
                                <p
                                    className="!mt-0 cursor-pointer text-center select-none"
                                    onClick={resetDate}
                                >
                                    Week {date?.week()}, {date?.format('YYYY')}
                                </p>
                                <CaretRight onClick={nextWeek} />
                            </>
                        ) : null}
                    </IconContext.Provider>
                </div>
            </div>

            <div>
                {chartType === 'all' ? (
                    <DashboardHomeChartAll transactions={transactions} data-superjson />
                ) : chartType === 'year' ? (
                    <DashboardHomeChartYear transactions={transactions} data-superjson />
                ) : chartType === 'month' ? (
                    <DashboardHomeChartMonth transactions={transactions} data-superjson />
                ) : (
                    <DashboardHomeChartWeek transactions={transactions} data-superjson />
                )}
            </div>
        </div>
    )
}
