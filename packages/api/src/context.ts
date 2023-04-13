import * as trpcNext from '@trpc/server/adapters/next'
import { getServerSession } from '@zodive/auth'

export async function createContext(opts: trpcNext.CreateNextContextOptions) {
    const { req, res } = opts
    const session = await getServerSession({ req, res })

    return {
        user: session?.user
    }
}
