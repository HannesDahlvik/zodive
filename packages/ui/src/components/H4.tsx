import { PropsWithChildren } from 'react'

import { cn } from '..'

export interface H4Props extends React.HtmlHTMLAttributes<HTMLHeadingElement>, PropsWithChildren {}

export function H4({ children, className, ...props }: H4Props) {
    return (
        <h4 className={cn(['mt-8 scroll-m-20 text-xl font-semibold', className])} {...props}>
            {children}
        </h4>
    )
}
