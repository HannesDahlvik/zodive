import { PropsWithChildren } from 'react'

import { cn } from '..'

export interface H2Props extends React.HtmlHTMLAttributes<HTMLHeadingElement>, PropsWithChildren {}

export function H2({ children, className, ...props }: H2Props) {
    return (
        <h2
            className={cn(['mt-10 scroll-m-2 pb-2 text-3xl font-bold first:mt-0', className])}
            {...props}
        >
            {children}
        </h2>
    )
}
