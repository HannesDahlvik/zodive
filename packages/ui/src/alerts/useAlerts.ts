import { useContext } from 'react'

import { AlertSettings, AlertsContext } from './AlertsProvider'

type AlertsEvents = {
    createAlert(payload: AlertSettings): void
    closeAlert(id: string): void
    closeAllAlerts(): void
}

export const useAlerts = (): AlertsEvents => {
    const ctx = useContext(AlertsContext)

    const createAlert = (payload: AlertSettings) => {
        ctx?.createAlert(payload)
    }

    const closeAlert = (id: string) => {
        ctx?.closeAlert(id)
    }

    const closeAllAlerts = () => {
        ctx?.closeAll()
    }

    return {
        createAlert,
        closeAlert,
        closeAllAlerts
    }
}
