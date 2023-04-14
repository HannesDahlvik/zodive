import { appRouter } from '@zodive/api'
import { authOptions } from '@zodive/auth'
import { getServerSession } from 'next-auth'

export const createCaller = async () => {
    const session = await getServerSession(authOptions)

    const caller = appRouter.createCaller({
        user: session?.user
    })
    return caller
}
