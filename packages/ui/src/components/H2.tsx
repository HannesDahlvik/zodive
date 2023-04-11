import { PropsWithChildren } from 'react'

import { cn } from '..'

export interface H2Props extends React.HtmlHTMLAttributes<HTMLHeadingElement>, PropsWithChildren {}

export function H2({ children, className, ...props }: H2Props) {
    return (
        <h2
            className={cn([
                'mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700',
                className
            ])}
            {...props}
        >
            {children}
        </h2>
    )
}
