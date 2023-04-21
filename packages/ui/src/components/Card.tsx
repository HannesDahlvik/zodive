import { PropsWithChildren } from 'react'

import { cn } from '..'

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export function Card({ children, className, ...props }: Props) {
    return (
        <div
            className={cn(
                'relative bg-card h-full p-8 rounded-lg border border-border overflow-hidden',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
