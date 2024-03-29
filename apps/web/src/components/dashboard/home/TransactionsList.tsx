'use client'

import { Fragment, useEffect, useState } from 'react'

import DashboardHomeTransactionItem from './TransactionItem'
import dayjs from '@zodive/dayjs'
import { Transaction } from '@zodive/db'
import { useDate } from '~/contexts/DateContext'

interface Props {
    transactions: Transaction[]
    amount?: number
}

export default function DashboardHomeTransactionsList({ transactions, amount = 5 }: Props) {
    const { date } = useDate()

    const [data, setData] = useState<Transaction[]>([])

    useEffect(() => {
        setData(
            transactions
                .filter((val) => dayjs(val.date).isBefore(date))
                .sort((a, b) => b.date.getTime() - a.date.getTime())
        )
    }, [transactions, date])

    if (data.length === 0)
        return (
            <div className="flex flex-col text-center pt-8">
                <p>You have 0 transactions</p>
            </div>
        )

    return (
        <div className="flex flex-col gap-3 mt-4">
            {data.map((transaction, i) => {
                const payment = transaction.type === 'PAYMENT'

                if (i < amount)
                    return (
                        <Fragment key={transaction.id}>
                            <DashboardHomeTransactionItem
                                date={dayjs(transaction.date)}
                                payment={payment}
                                transaction={transaction}
                            />
                        </Fragment>
                    )
            })}
        </div>
    )
}
