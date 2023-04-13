import { redirect } from 'next/navigation'

import { appRouter } from '@zodive/api'
import { authOptions } from '@zodive/auth'
import { getServerSession } from 'next-auth'

export const rsc = async () => {
    const session = await getServerSession(authOptions)
    if (!session) return redirect('/signin')

    const caller = appRouter.createCaller({
        user: session.user
    })
    return caller
}
