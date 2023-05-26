'use client'

import { useEffect, useState } from 'react'

import dayjs from '@zodive/dayjs'
import { Transaction } from '@zodive/db'
import { Skeleton } from '@zodive/ui'
import { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'
import { useDate } from '~/contexts/DateContext'

interface Props {
    transactions: Transaction[]
}

export default function DashboardHomeChartWeek({ transactions }: Props) {
    const { date } = useDate()
    const [series, setSeries] = useState<ApexAxisChartSeries>()
    const [options, setOptions] = useState<ApexOptions>()

    useEffect(() => {
        const weekArr = Array.from<number>({ length: 7 }).fill(0)
        const payments = [...weekArr]
        const receivedPayments = [...weekArr]
        const startOfWeek = date?.startOf('week')
        const endOfWeek = date?.endOf('week')

        transactions.map((transaction) => {
            const transactionDate = dayjs(transaction.date)
            if (transactionDate.isBetween(startOfWeek, endOfWeek)) {
                if (transaction.type === 'PAYMENT')
                    payments[transactionDate.day()] += transaction.amount
                else receivedPayments[transactionDate.day()] += transaction.amount
            }
        })

        setOptions({
            chart: {
                type: 'area',
                foreColor: '#808080',
                toolbar: { show: false },
                zoom: { enabled: false }
            },
            tooltip: {
                enabled: true,
                theme: 'dark'
            },
            dataLabels: { enabled: false },
            xaxis: {
                categories: dayjs.weekdays()
            }
        })
        setSeries([
            {
                name: 'Payments',
                data: payments,
                color: '#ef4444'
            },
            {
                name: 'Received payments',
                data: receivedPayments,
                color: '#22c55e'
            }
        ])
    }, [transactions, date])

    if (!series && !options) return <Skeleton className="h-full" />

    return <Chart type="area" height="100%" options={options} series={series} />
}
