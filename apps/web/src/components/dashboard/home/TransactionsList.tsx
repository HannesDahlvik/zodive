import DashboardHomeTransactionItem from './TransactionItem'
import { Transaction } from '@zodive/db'

interface Props {
    transactions: Transaction[]
    amount?: number
}

export default function DashboardHomeTransactionsList({ transactions, amount = 5 }: Props) {
    if (transactions.length === 0)
        return (
            <div className="flex flex-col text-center pt-8">
                <p>You have 0 transactions</p>
            </div>
        )

    return (
        <div className="flex flex-col gap-3 mt-4">
            {transactions.map((transaction, i) => {
                const payment = transaction.type === 'PAYMENT'

                if (i < amount)
                    return (
                        <DashboardHomeTransactionItem
                            date={transaction.date}
                            key={i}
                            payment={payment}
                            transaction={transaction}
                        />
                    )
            })}
        </div>
    )
}
