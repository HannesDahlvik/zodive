import { use } from 'react'

import { Metadata } from 'next'

import { Card } from '@zodive/ui'
import SuperJSON from 'superjson'
import { DashboardHomeTopBar } from '~/components/dashboard/home/TopBar'
import DashboardHomeTransactionsList from '~/components/dashboard/home/TransactionsList'
import { createCaller } from '~/lib/caller'

export const metadata: Metadata = {
    title: 'Home'
}

async function getTransactions() {
    const caller = await createCaller()
    return SuperJSON.stringify(await caller.transactions.all())
}

export default function DashboardHomePage() {
    const transactions = use(getTransactions())

    return (
        <div className="grid grid-rows-[44px_350px_1fr] gap-4 p-8 max-h-screen h-full">
            <DashboardHomeTopBar />

            <Card></Card>

            <div className="grid grid-cols-[3fr_2fr] gap-4">
                <Card></Card>

                <Card>
                    <div className="flex justify-between items-center">
                        <h4 className="!mt-0">Transactions</h4>
                    </div>

                    <DashboardHomeTransactionsList transactions={transactions} />
                </Card>
            </div>
        </div>
    )
}
