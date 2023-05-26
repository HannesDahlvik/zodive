'use client'

import {
    CaretDoubleLeft,
    CaretDoubleRight,
    CaretLeft,
    CaretRight,
    IconContext
} from '@phosphor-icons/react'
import { useDate } from '~/contexts/DateContext'

export default function DashboardDateChanger() {
    const { date, nextYear, nextMonth, prevYear, prevMonth, resetDate } = useDate()

    return (
        <IconContext.Provider
            value={{
                size: 24
            }}
        >
            <div className="grid grid-cols-[48px_150px_48px] items-center gap-3">
                <div className="flex items-center">
                    <CaretDoubleLeft className="cursor-pointer" onClick={prevYear} />
                    <CaretLeft className="cursor-pointer" onClick={prevMonth} />
                </div>

                <p className="text-center !mt-0 cursor-pointer select-none" onClick={resetDate}>
                    {date?.format('DD MMMM YYYY')}
                </p>

                <div className="flex items-center">
                    <CaretRight className="cursor-pointer" onClick={nextMonth} />
                    <CaretDoubleRight className="cursor-pointer" onClick={nextYear} />
                </div>
            </div>
        </IconContext.Provider>
    )
}
