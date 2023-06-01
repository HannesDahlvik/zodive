import { Metadata } from 'next'

import { ButtonLink, Card } from '@zodive/ui'
import DashboardHomeChart from '~/components/dashboard/home/Chart'
import DashboardHomeStats from '~/components/dashboard/home/Stats'
import { DashboardHomeTopBar } from '~/components/dashboard/home/TopBar'
import DashboardHomeTransactionsList from '~/components/dashboard/home/TransactionsList'
import { createCaller } from '~/lib/caller'

export const metadata: Metadata = {
    title: 'Home'
}

async function getTransactions() {
    const caller = await createCaller()
    return caller.transactions.all()
}

export default async function DashboardHomePage() {
    const transactions = await getTransactions()

    return (
        <div className="relative grid grid-rows-[44px_200px_1fr] gap-4 p-8 max-h-screen h-full">
            <DashboardHomeTopBar />

            <div>
                <DashboardHomeStats transactions={transactions} data-superjson />
            </div>

            <div className="grid grid-cols-[3fr_2fr] gap-4">
                <Card>
                    <DashboardHomeChart transactions={transactions} />
                </Card>

                <Card>
                    <div className="flex justify-between items-center">
                        <h4 className="!mt-0">Latest Transactions</h4>

                        <ButtonLink href="/dashboard/transactions" size="sm" variant="outline">
                            View all
                        </ButtonLink>
                    </div>

                    <DashboardHomeTransactionsList
                        transactions={transactions}
                        amount={7}
                        data-superjson
                    />
                </Card>
            </div>
        </div>
    )
}
