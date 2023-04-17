import { AppRouter } from './src/root'
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'

export { appRouter, type AppRouter } from './src/root'
export { createContext } from './src/context'

export type RouterInputs = inferRouterInputs<AppRouter>

export type RouterOutputs = inferRouterOutputs<AppRouter>
