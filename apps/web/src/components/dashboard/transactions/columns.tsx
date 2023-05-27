'use client'

import { ArrowsDownUp, DotsThree } from '@phosphor-icons/react'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from '@zodive/dayjs'
import { Transaction, TransactionType } from '@zodive/db'
import {
    Button,
    Checkbox,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@zodive/ui'
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
                <>
                    Amount
                    <Button
                        className="ml-2"
                        variant="outline"
                        size="xs"
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    >
                        <ArrowsDownUp className="h-4 w-4" />
                    </Button>
                </>
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
                <>
                    Date
                    <Button
                        className="ml-2"
                        variant="outline"
                        size="xs"
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    >
                        <ArrowsDownUp className="h-4 w-4" />
                    </Button>
                </>
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
        cell: ({ row }) => {
            const transaction = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="h-8 w-8 p-0">
                            <DotsThree size={24} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(transaction.id)}
                        >
                            Copy transaction ID
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
