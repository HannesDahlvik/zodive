'use client'

import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'

import { ChartTypes } from '@zodive/db'
import { useSession } from 'next-auth/react'
import { DashboardSettings } from '~/lib/types'

interface SettingsContextType {
    settings: {
        defaultChart: ChartTypes
    }
    setSettings: Dispatch<SetStateAction<DashboardSettings>>
}

export const SettingsContext = createContext<SettingsContextType | null>(null)

export const useSettings = () => {
    const settingsCtx = useContext(SettingsContext)
    return { ...settingsCtx }
}

export function SettingsProvider({ children }: PropsWithChildren) {
    const { data: session } = useSession()

    const [settings, setSettings] = useState<DashboardSettings>({
        defaultChart: session?.user.defaultChart as ChartTypes
    })

    useEffect(() => {
        setSettings({
            defaultChart: session?.user.defaultChart as ChartTypes
        })
    }, [session])

    return (
        <SettingsContext.Provider
            value={{
                settings: {
                    defaultChart: settings.defaultChart
                },
                setSettings
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}
