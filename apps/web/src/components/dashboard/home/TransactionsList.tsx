'use client'

import { useEffect, useState } from 'react'

import { ArrowDown, ArrowUp, IconContext } from '@phosphor-icons/react'
import { Transaction } from '@zodive/db'
import { Skeleton, cn } from '@zodive/ui'
import dayjs from 'dayjs'
import SuperJSON from 'superjson'

interface Props {
    transactions: string
    amount?: number
}

export default function DashboardHomeTransactionsList({ transactions, amount = 5 }: Props) {
    const [data, setData] = useState<Transaction[] | null>(null)

    useEffect(() => {
        const arr = SuperJSON.parse<Transaction[]>(transactions)
        setData(arr.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
    }, [transactions])

    if (!data)
        return (
            <div className="flex flex-col gap-3 mt-4">
                <Skeleton className="h-12" />
                <Skeleton className="h-12" />
                <Skeleton className="h-12" />
                <Skeleton className="h-12" />
                <Skeleton className="h-12" />
            </div>
        )

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
                const date = dayjs(transaction.date)

                if (i < amount)
                    return (
                        <div className="relative flex items-center h-12" key={i}>
                            <div
                                className={cn(
                                    'flex justify-center items-center h-full w-12 mr-4 rounded-lg',
                                    payment ? 'bg-red-500/25' : 'bg-green-500/25'
                                )}
                            >
                                <IconContext.Provider
                                    value={{
                                        size: 26,
                                        color: payment ? 'rgb(239 68 68)' : 'rgb(34 197 94)',
                                        weight: 'bold'
                                    }}
                                >
                                    {payment ? <ArrowDown /> : <ArrowUp />}
                                </IconContext.Provider>
                            </div>

                            <div className="flex-col">
                                <p
                                    className={cn(
                                        'font-bold',
                                        payment ? 'text-red-500' : 'text-green-500'
                                    )}
                                >
                                    {payment ? '-' : '+'}
                                    {transaction.amount}€
                                </p>

                                <p className="text-border-accent !mt-0">{transaction.title}</p>
                            </div>

                            <div className="flex-col ml-auto">
                                <p className="text-border-accent">{date.format('DD MMM')}</p>
                            </div>
                        </div>
                    )
            })}
        </div>
    )
}
