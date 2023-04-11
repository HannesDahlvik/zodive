import * as React from 'react'

import { cn } from '../lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
    [
        'inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors duration-200',
        'dark:focus:ring-offset-slate-900 dark:focus:ring-slate-400',
        'data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
        'disabled:opacity-50 disabled:pointer-events-none'
    ],
    {
        variants: {
            variant: {
                default: 'bg-blue-500 text-white hover:bg-blue-600',
                outline: 'bg-transparent border border-blue-500 hover:bg-blue-500/20',
                error: 'bg-red-500 text-white hover:bg-red-600',
                warning: 'bg-orange-500 text-black hover:bg-bg-orange-600',
                link: 'bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100'
            },
            size: {
                default: 'h-10 py-2 px-5 text-md',
                sm: 'h-9 px-4 rounded-md',
                lg: 'h-11 px-8 rounded-md'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
