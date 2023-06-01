'use client'

import DashboardEditTransactionModal from '../modals/EditTransaction'
import { Copy, DotsThree, PencilSimple, TrashSimple } from '@phosphor-icons/react'
import { Transaction } from '@zodive/db'
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    useAlerts,
    useModals
} from '@zodive/ui'
import { api } from '~/lib/api'

interface Props {
    transaction: Transaction
}

export default function DashboardTransactionsRowActions({ transaction }: Props) {
    const { createAlert } = useAlerts()
    const { openModal, closeAllModals } = useModals()

    const trpcCtx = api.useContext()
    const deleteTransactionMutation = api.transactions.delete.useMutation()

    const handleEditTransaction = () => {
        openModal({
            title: 'Edit transaction',
            children: <DashboardEditTransactionModal transaction={transaction} />
        })
    }

    const handleDeleteTransaction = () => {
        createAlert({
            title: 'Are you sure you want to delete this transactions?',
            description:
                'This action cannot be undone. This will permanently delete the transaction.',
            onConfirm: () => {
                deleteTransactionMutation.mutate(
                    {
                        ids: [transaction.id]
                    },
                    {
                        onError: (err) => {
                            console.error(err)
                        },
                        onSuccess: () => {
                            trpcCtx.transactions.all.invalidate()
                            closeAllModals()
                        }
                    }
                )
            }
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 w-8 p-0">
                    <DotsThree size={24} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(transaction.id)}>
                    <Copy className="mr-2" weight="fill" /> Copy transaction ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleEditTransaction}>
                    <PencilSimple className="mr-2" weight="fill" /> Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="text-red-500 hover:!text-red-500 focus:!text-red-500"
                    onClick={handleDeleteTransaction}
                >
                    <TrashSimple className="mr-2" weight="fill" /> Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
