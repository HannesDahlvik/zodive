'use client'

import DashboardCreateTransactionModal from '../modals/CreateTransaction'
import { Plus } from '@phosphor-icons/react'
import { Table } from '@tanstack/react-table'
import { Transaction } from '@zodive/db'
import { Button, Input, useAlerts, useModals } from '@zodive/ui'
import { api } from '~/lib/api'

interface Props {
    table: Table<Transaction>
}

export default function DashboardTransactionsTopBar({ table }: Props) {
    const { createAlert } = useAlerts()
    const { openModal } = useModals()

    const trpcCtx = api.useContext()
    const deleteTransactionMutaion = api.transactions.delete.useMutation()

    const handleDeleteSelected = () => {
        createAlert({
            title: 'Confirm delete',
            description: `This action cannot be undone. This will permanently delete your selected transactions.`,
            onConfirm: () => {
                const rows = table.getFilteredSelectedRowModel().rows
                const ids: string[] = []
                rows.map((row) => ids.push(row.original.id))

                deleteTransactionMutaion.mutate(
                    { ids },
                    {
                        onError: (err) => {
                            console.error(err.message)
                        },
                        onSuccess: () => {
                            trpcCtx.transactions.all.invalidate()
                            table.resetRowSelection()
                        }
                    }
                )
            }
        })
    }

    const handleCreateTransaction = () => {
        openModal({
            children: <DashboardCreateTransactionModal />
        })
    }

    return (
        <div className="flex justify-between items-center gap-4 pb-4">
            <div className="flex items-center gap-4">
                <Input
                    placeholder="Filter titles"
                    value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
                    onChange={(event) =>
                        table.getColumn('title')?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />

                <Button
                    size="sm"
                    disabled={table.getFilteredSelectedRowModel().rows.length === 0}
                    onClick={handleDeleteSelected}
                >
                    Delete Selected
                </Button>
            </div>

            <div className="flex items-center">
                <Button onClick={handleCreateTransaction}>
                    <Plus size={24} weight="bold" /> Create
                </Button>
            </div>
        </div>
    )
}
