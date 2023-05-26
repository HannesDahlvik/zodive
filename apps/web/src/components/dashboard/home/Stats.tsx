'use client'

import { useEffect, useState } from 'react'

import dayjs from '@zodive/dayjs'
import { Transaction } from '@zodive/db'
import { Card } from '@zodive/ui'
import { useDate } from '~/contexts/DateContext'
import { currencyFormatter } from '~/lib/currencyFormatter'

interface Props {
    transactions: Transaction[]
}

export default function DashboardHomeStats({ transactions }: Props) {
    const { date } = useDate()

    const [payments, setPayments] = useState(0)
    const [receivedPayments, setReceivedPayments] = useState(0)
    const [monthPayments, setMonthPayments] = useState(0)

    useEffect(() => {
        let paymentsTotal = 0
        let receivedPaymentsTotal = 0
        let monthPaymentsTotal = 0
        transactions.map((transaction) => {
            const transactionDate = dayjs(transaction.date)
            if (transactionDate.year() === date?.year())
                if (transaction.type === 'PAYMENT') paymentsTotal += transaction.amount
                else receivedPaymentsTotal += transaction.amount

            if (transactionDate.month() === date?.month()) {
                if (transaction.type === 'PAYMENT') monthPaymentsTotal += transaction.amount
            }
        })
        setPayments(paymentsTotal)
        setReceivedPayments(receivedPaymentsTotal)
        setMonthPayments(monthPaymentsTotal)
    }, [transactions, date])

    return (
        <div className="grid grid-cols-4 gap-4 h-full text-center">
            <Card>
                <p className="text-lg">Income</p>

                <p className="text-3xl font-bold">{currencyFormatter(receivedPayments)}</p>
            </Card>

            <Card>
                <p className="text-lg">Payments</p>

                <p className="text-3xl font-bold">{currencyFormatter(payments)}</p>
            </Card>

            <Card>
                <p className="text-lg">Profit</p>

                <p className="text-3xl font-bold">
                    {currencyFormatter(receivedPayments - payments)}
                </p>
            </Card>

            <Card>
                <p className="text-lg">Month payments</p>

                <p className="text-3xl font-bold">{currencyFormatter(monthPayments)}</p>
            </Card>
        </div>
    )
}
