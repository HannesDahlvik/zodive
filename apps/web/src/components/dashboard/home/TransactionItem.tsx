'use client'

import { ArrowDown, ArrowUp, IconContext } from '@phosphor-icons/react'
import { Transaction } from '@zodive/db'
import { cn } from '@zodive/ui'
import dayjs from 'dayjs'

interface Props {
    transaction: Transaction
    payment: boolean
    key: number
    date: Date
}

export default function DashboardHomeTransactionItem({ date, key, payment, transaction }: Props) {
    return (
        <div className="relative flex items-center h-12" key={key}>
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
                <p className={cn('font-bold', payment ? 'text-red-500' : 'text-green-500')}>
                    {payment ? '-' : '+'}
                    {transaction.amount}€
                </p>

                <p className="text-border-accent !mt-0">{transaction.title}</p>
            </div>

            <div className="flex-col ml-auto">
                <p className="text-border-accent">{dayjs(date).format('DD MMM')}</p>
            </div>
        </div>
    )
}