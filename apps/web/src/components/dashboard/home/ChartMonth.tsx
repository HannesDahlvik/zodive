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

export default function DashboardHomeChartMonth({ transactions }: Props) {
    const { date } = useDate()
    const [series, setSeries] = useState<ApexAxisChartSeries>()
    const [options, setOptions] = useState<ApexOptions>()

    useEffect(() => {
        const monthArr = Array.from<number>({ length: date?.daysInMonth() as number }).fill(0)
        const payments = [...monthArr]
        const receivedPayments = [...monthArr]

        transactions.map((transaction) => {
            const transactionDate = dayjs(transaction.date)
            if (
                transactionDate.year() === date?.year() &&
                transactionDate.month() === date?.month()
            ) {
                const day = transactionDate.date()
                if (transaction.type === 'PAYMENT') payments[day - 1] += transaction.amount
                else receivedPayments[day - 1] += transaction.amount
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
                categories: date?.daysInMonth()
            }
        })
        setSeries([
            {
                name: 'Payments',
                data: payments.map((val) => Number(val.toFixed(2))),
                color: '#ef4444'
            },
            {
                name: 'Received payments',
                data: receivedPayments.map((val) => Number(val.toFixed(2))),
                color: '#22c55e'
            }
        ])
    }, [transactions, date])

    if (!series && !options) return <Skeleton className="h-full" />

    return <Chart type="area" height="100%" options={options} series={series} />
}
