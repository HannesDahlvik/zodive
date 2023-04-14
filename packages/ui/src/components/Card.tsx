import { PropsWithChildren } from 'react'

import { cn } from '..'

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export function Card({ children, className, ...props }: Props) {
    return (
        <div
            className={cn(
                'bg-white dark:bg-surface-800 h-full p-8 rounded-lg border border-border-light dark:border-border-dark',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
