import { PropsWithChildren } from 'react'

import { cn } from '..'

export interface H3Props extends React.HtmlHTMLAttributes<HTMLHeadingElement>, PropsWithChildren {}

export function H3({ children, className, ...props }: H3Props) {
    return (
        <h3
            className={cn(['mt-8 scroll-m-20 text-2xl font-bold tracking-tight', className])}
            {...props}
        >
            {children}
        </h3>
    )
}
