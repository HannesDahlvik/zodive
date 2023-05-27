import { Metadata } from 'next'

import DashboardTransactionsDataTable from '~/components/dashboard/transactions/DataTable'
import { dashboardTransactionsColumns } from '~/components/dashboard/transactions/columns'
import { createCaller } from '~/lib/caller'

export const metadata: Metadata = {
    title: 'Home'
}

async function getTransactions() {
    const caller = await createCaller()
    return caller.transactions.all()
}

export default async function DashboardTransactionsPage() {
    const transactions = await getTransactions()

    return (
        <div className="p-8 h-screen w-full">
            <DashboardTransactionsDataTable
                columns={dashboardTransactionsColumns}
                data={transactions}
            />
        </div>
    )
}
