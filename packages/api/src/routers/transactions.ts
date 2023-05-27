import { authedProcedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'
import { prisma } from '@zodive/db'
import { z } from 'zod'

export const transactionsRouter = router({
    all: authedProcedure.query(async ({ ctx }) => {
        const transactions = await prisma.transaction
            .findMany({ where: { userId: ctx.user.id } })
            .catch(() => {
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Could not get transactions'
                })
            })

        return transactions
    }),
    get: authedProcedure
        .input(
            z.object({
                id: z.string().cuid()
            })
        )
        .query(async ({ input }) => {
            const transaction = await prisma.transaction
                .findUnique({ where: { id: input.id } })
                .catch(() => {
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: 'Could not get transaction'
                    })
                })

            return transaction
        }),
    create: authedProcedure
        .input(
            z.object({
                title: z.string().min(3),
                amount: z.number(),
                date: z.date(),
                type: z.enum(['PAYMENT', 'RECEIVED_PAYMENT'])
            })
        )
        .mutation(async ({ ctx, input }) => {
            const newTransaction = await prisma.transaction
                .create({
                    data: {
                        amount: input.amount,
                        title: input.title,
                        type: input.type,
                        date: input.date,
                        userId: ctx.user.id
                    }
                })
                .catch(() => {
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: 'Could not create transaction'
                    })
                })

            return newTransaction
        }),
    delete: authedProcedure
        .input(
            z.object({
                ids: z.string().array().min(1)
            })
        )
        .mutation(async ({ ctx, input }) => {
            const deletedTransactions = prisma.transaction
                .deleteMany({
                    where: {
                        id: {
                            in: input.ids
                        },
                        AND: {
                            userId: ctx.user.id
                        }
                    }
                })
                .catch(() => {
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: 'Could not delete transaction(s)'
                    })
                })

            return deletedTransactions
        })
})
