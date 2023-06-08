'use client'

import DashboardTransactionsRowActions from './RowActions'
import { ArrowsDownUp } from '@phosphor-icons/react'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from '@zodive/dayjs'
import { Transaction, TransactionType } from '@zodive/db'
import { Button, Checkbox } from '@zodive/ui'
import { currencyFormatter } from '~/lib/currencyFormatter'

export const dashboardTransactionsColumns: ColumnDef<Transaction>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'title',
        header: 'Title'
    },
    {
        accessorKey: 'amount',
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    Amount
                    <Button
                        className="ml-2"
                        variant="outline"
                        size="xs"
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    >
                        <ArrowsDownUp className="h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            const amount = row.getValue<number>('amount')
            const formatted = currencyFormatter(amount)
            return formatted
        }
    },
    {
        accessorKey: 'date',
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    Date
                    <Button
                        className="ml-2"
                        variant="outline"
                        size="xs"
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    >
                        <ArrowsDownUp className="h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            const date = dayjs(row.getValue<Date>('date'))
            return date.format('DD.MM.YYYY')
        }
    },
    {
        accessorKey: 'type',
        header: 'Type',
        cell: ({ row }) => {
            const type = row.getValue<TransactionType>('type')
            return type === 'PAYMENT' ? 'Payment' : 'Received Payment'
        }
    },
    {
        id: 'actions',
        cell: ({ row }) => <DashboardTransactionsRowActions transaction={row.original} />
    }
]
