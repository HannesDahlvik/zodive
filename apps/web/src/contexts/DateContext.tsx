import { PropsWithChildren, createContext, useContext, useState } from 'react'

import dayjs, { Dayjs } from '@zodive/dayjs'

interface DateContextType {
    date: Dayjs
    nextYear: () => void
    nextMonth: () => void
    nextWeek: () => void
    prevYear: () => void
    prevMonth: () => void
    prevWeek: () => void
    resetDate: () => void
}

export const DateContext = createContext<DateContextType | null>(null)

export function useDate() {
    const dateCtx = useContext(DateContext)
    return { ...dateCtx }
}

export function DateProvider({ children }: PropsWithChildren) {
    const [date, setDate] = useState(dayjs())

    const nextYear = () => {
        setDate(date.add(1, 'year'))
    }
    const nextMonth = () => {
        setDate(date.add(1, 'month'))
    }
    const nextWeek = () => {
        setDate(date.add(1, 'week'))
    }
    const prevYear = () => {
        setDate(date.subtract(1, 'year'))
    }
    const prevMonth = () => {
        setDate(date.subtract(1, 'month'))
    }
    const prevWeek = () => {
        setDate(date.subtract(1, 'week'))
    }

    const resetDate = () => {
        setDate(dayjs())
    }

    return (
        <DateContext.Provider
            value={{
                date,
                nextYear,
                nextMonth,
                nextWeek,
                prevYear,
                prevMonth,
                prevWeek,
                resetDate
            }}
        >
            {children}
        </DateContext.Provider>
    )
}
