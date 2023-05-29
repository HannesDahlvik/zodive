import { authedProcedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'
import { prisma, ChartTypes } from '@zodive/db'
import { z } from 'zod'

export const settingsRouter = router({
    update: authedProcedure
        .input(
            z.object({
                name: z.string().min(5),
                defaultChart: z.custom<ChartTypes>()
            })
        )
        .mutation(async ({ ctx, input }) => {
            const updatedUser = await prisma.user
                .update({
                    data: {
                        ...input
                    },
                    where: {
                        id: ctx.user.id
                    }
                })
                .catch(() => {
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: 'Could not update user info'
                    })
                })

            return updatedUser
        })
})
