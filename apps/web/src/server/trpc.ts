import { initTRPC } from '@trpc/server'
import SuperJSON from 'superjson'

const t = initTRPC.create({
    transformer: SuperJSON
})

export const router = t.router

export const procedure = t.procedure

export const middleware = t.middleware
