import React from 'react'

import Link from 'next/link'

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
                outline:
                    'bg-transparent border border-slate-300 hover:bg-slate-200/50 dark:border-surface-500 dark:hover:bg-surface-700',
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

export interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonBaseProps

export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
    ButtonBaseProps & {
        href?: string | any
    }

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

const ButtonLink = React.forwardRef<HTMLLinkElement, ButtonLinkProps>(
    ({ className, variant, size, href, ...props }, ref) => {
        return (
            <Link
                className={cn(buttonVariants({ variant, size, className }))}
                href={href}
                ref={ref as any}
                {...props}
            />
        )
    }
)

export { Button, ButtonLink, buttonVariants }
