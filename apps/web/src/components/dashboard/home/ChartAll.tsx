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

export default function DashboardHomeChartAll({ transactions }: Props) {
    const { date } = useDate()
    const [series, setSeries] = useState<ApexAxisChartSeries>()
    const [options, setOptions] = useState<ApexOptions>()

    useEffect(() => {
        const years: number[] = [date?.year() as number]
        transactions.map((transaction) => {
            const transactionDate = dayjs(transaction.date)
            const transactionYear = transactionDate.year()
            years.map(() => {
                if (!years.includes(transactionYear)) years.push(transactionYear)
            })
        })

        const allArr = Array.from<number>({ length: years.length }).fill(0)
        const payments = [...allArr]
        const receivedPayments = [...allArr]

        transactions.map((transaction) => {
            const transactionDate = dayjs(transaction.date)
            const year = transactionDate.year()
            if (transaction.type === 'PAYMENT') payments[years.indexOf(year)] += transaction.amount
            else receivedPayments[years.indexOf(year)] += transaction.amount
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
                categories: years
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
