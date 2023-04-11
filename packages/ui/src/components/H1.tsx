import { PropsWithChildren } from 'react'

import { cn } from '..'

export interface H1Props extends React.HtmlHTMLAttributes<HTMLHeadingElement>, PropsWithChildren {}

export function H1({ children, className, ...props }: H1Props) {
    return (
        <h1
            className={cn([
                'scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl',
                className
            ])}
            {...props}
        >
            {children}
        </h1>
    )
}
