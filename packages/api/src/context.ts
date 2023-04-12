import * as trpcNext from '@trpc/server/adapters/next'
import { Session, getServerSession } from '@zodive/auth'
import { prisma } from '@zodive/db'

interface CreateContextOptions {
    session: Session | null
    rsc: boolean
}

export async function createInnerContext(opts: CreateContextOptions) {
    return {
        session: opts.session,
        prisma
    }
}

export async function createContext(
    opts:
        | {
              type: 'rsc'
              session: any
          }
        | (trpcNext.CreateNextContextOptions & { type: 'api' })
) {
    if (opts.type === 'rsc') {
        return {
            type: opts.type
        }
    }

    const { req, res } = opts
    const session = await getServerSession({ req, res })

    return {
        type: opts.type,
        session
    }
}
