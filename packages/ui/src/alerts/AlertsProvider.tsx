'use client'

import { PropsWithChildren, createContext, useState } from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '..'
import { genRandomString } from '../lib/utils'
import { AlertDialogProps } from '@radix-ui/react-alert-dialog'

export type AlertSettings = Partial<AlertDialogProps> &
    Partial<{
        title: string
        description: string
        modalId: string
        onClose: () => void
        onConfirm: () => void
    }>

export type AlertsContextProps = {
    createAlert: (props: AlertSettings) => void
    closeAlert: (id: string) => void
    closeAll: () => void
} | null

export const AlertsContext = createContext<AlertsContextProps>(null)

export function AlertsProvider({ children }: PropsWithChildren) {
    const [alerts, setAlerts] = useState<AlertSettings[]>([])

    const createAlert = (props: AlertSettings) => {
        const id = props.modalId || genRandomString(20)
        const alert: AlertSettings = {
            ...props,
            modalId: id,
            open: true,
            onOpenChange: () => closeAlert(id)
        }

        setAlerts([...alerts, alert])
    }

    const closeAlert = (id: string) => {
        const arr = [...alerts]
        let closedAlert = alerts.findIndex((m) => m.modalId === id)
        arr.splice(closedAlert, 1)
        setAlerts(arr)
    }

    const closeAll = () => {
        setAlerts([])
    }

    return (
        <AlertsContext.Provider value={{ closeAll, closeAlert: closeAlert, createAlert }}>
            {alerts.map((alert) => (
                <AlertDialog
                    open={alert.open}
                    onOpenChange={alert.onOpenChange}
                    key={alert.modalId}
                >
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>{alert.title}</AlertDialogTitle>
                            {alert.description && (
                                <AlertDialogDescription>{alert.description}</AlertDialogDescription>
                            )}
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={alert.onClose}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={alert.onConfirm}>Confirm</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            ))}

            {children}
        </AlertsContext.Provider>
    )
}
