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

export default function DashboardHomeChartYear({ transactions }: Props) {
    const { date } = useDate()
    const [series, setSeries] = useState<ApexAxisChartSeries>()
    const [options, setOptions] = useState<ApexOptions>()

    useEffect(() => {
        const yearArr = Array.from<number>({ length: 12 }).fill(0)
        const payments = [...yearArr]
        const receivedPayments = [...yearArr]

        transactions.map((transaction) => {
            const transactionDate = dayjs(transaction.date)
            if (transactionDate.year() === date?.year()) {
                const month = transactionDate.month()
                if (transaction.type === 'PAYMENT') payments[month] += transaction.amount
                else receivedPayments[month] += transaction.amount
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
                categories: dayjs.months()
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
