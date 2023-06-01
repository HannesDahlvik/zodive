'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Transaction, TransactionType } from '@zodive/db'
import { Button, Input, Tabs, TabsList, TabsTrigger, useModals, useToast } from '@zodive/ui'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '~/lib/api'

interface Props {
    transaction: Transaction
}

const editTransactionSchema = z.object({
    type: z.enum(['PAYMENT', 'RECEIVED_PAYMENT']),
    title: z.string().min(3).max(32),
    amount: z.number().min(1),
    date: z.date()
})
type EditTransactionSchema = z.infer<typeof editTransactionSchema>

export default function DashboardEditTransactionModal({ transaction }: Props) {
    const { closeAllModals } = useModals()
    const { toast } = useToast()

    const trpcCtx = api.useContext()
    const editTransactionMutation = api.transactions.edit.useMutation()

    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<EditTransactionSchema>({
        defaultValues: {
            ...transaction
        },
        resolver: zodResolver(editTransactionSchema)
    })

    const handleEditTransaction = (data: EditTransactionSchema) => {
        editTransactionMutation.mutate(
            {
                id: transaction.id,
                ...data
            },
            {
                onError: (err) => {
                    toast({
                        title: 'Error',
                        description: err.message,
                        variant: 'error'
                    })
                },
                onSuccess: () => {
                    trpcCtx.transactions.all.invalidate()
                    closeAllModals()
                }
            }
        )
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleEditTransaction)}>
            <Tabs
                defaultValue="PAYMENT"
                className="flex flex-col items-center w-full"
                onValueChange={(ev) => setValue('type', ev as TransactionType)}
            >
                <TabsList>
                    <TabsTrigger value="PAYMENT">Payment</TabsTrigger>
                    <TabsTrigger value="RECEIVED_PAYMENT">Received Payment</TabsTrigger>
                </TabsList>
            </Tabs>

            <Input
                label="Title"
                type="text"
                required
                error={errors.title?.message}
                {...register('title')}
            />

            <Input
                label="Amount"
                type="number"
                step={0.01}
                required
                error={errors.amount?.message}
                {...register('amount', {
                    valueAsNumber: true
                })}
            />

            <Input
                label="Date"
                type="date"
                required
                error={errors.date?.message}
                {...register('date', {
                    valueAsDate: true
                })}
            />

            <div className="grid grid-cols-2 gap-4 w-full">
                <Button type="button" variant="outline" onClick={closeAllModals}>
                    Cancel
                </Button>

                <Button loading={editTransactionMutation.isLoading}>Save</Button>
            </div>
        </form>
    )
}
