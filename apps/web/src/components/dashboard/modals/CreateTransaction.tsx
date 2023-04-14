'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import type { TransactionType } from '@zodive/db'
import { Button, Input, Tabs, TabsContent, TabsList, TabsTrigger, useModals } from '@zodive/ui'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '~/lib/api'

const createTransactionSchema = z.object({
    type: z.enum(['PAYMENT', 'RECEIVED_PAYMENT']).default('PAYMENT'),
    title: z.string().min(3).max(32),
    amount: z.number(),
    date: z.date()
})
type CreateTransactionSchema = z.infer<typeof createTransactionSchema>

export default function DashboardCreateTransactionModal() {
    const { closeAllModals } = useModals()

    const trpcCtx = api.useContext()
    const createTransactionMutation = api.transactions.create.useMutation()

    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CreateTransactionSchema>({
        resolver: zodResolver(createTransactionSchema)
    })

    const handleCreateTransaction = (data: CreateTransactionSchema) => {
        createTransactionMutation.mutate(
            {
                ...data
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

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleCreateTransaction)}>
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

                <Button loading={createTransactionMutation.isLoading}>Create</Button>
            </div>
        </form>
    )
}
