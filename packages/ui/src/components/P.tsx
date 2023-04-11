import { PropsWithChildren } from 'react'

import { cn } from '..'

export interface PProps extends React.HtmlHTMLAttributes<HTMLParagraphElement>, PropsWithChildren {}

export function P({ children, className, ...props }: PProps) {
    return (
        <p className={cn(['leading-5 [&:not(:first-child)]:mt-6', className])} {...props}>
            {children}
        </p>
    )
}
