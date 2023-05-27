'use client'

import React from 'react'

import Link from 'next/link'

import { cn } from '../lib/utils'
import { CircleNotch } from '@phosphor-icons/react'
import { VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
    [
        'inline-flex items-center justify-center gap-2 rounded-md text-sm font-bold transition-colors duration-200',
        'disabled:opacity-50 disabled:pointer-events-none'
    ],
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground hover:bg-primary-hover',
                outline:
                    'bg-transparent border border-border hover:bg-muted hover:border-border-accent',
                error: 'bg-red-500 text-white hover:bg-red-600',
                link: 'bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100'
            },
            size: {
                xs: 'h-8 px-2 rounded-md',
                sm: 'h-9 px-4 rounded-md',
                default: 'h-10 py-2 px-5 text-md',
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

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonBaseProps & {
        loading?: boolean
    }

export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
    ButtonBaseProps & {
        href?: string | any
    }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, loading, variant, size, ...props }, ref) => (
        <button
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            disabled={props.disabled || loading}
            {...props}
        >
            {loading && <CircleNotch size={20} weight="bold" className="animate-spin" />}
            {props.children}
        </button>
    )
)
Button.displayName = 'Button'

const ButtonLink = React.forwardRef<HTMLLinkElement, ButtonLinkProps>(
    ({ className, variant, size, href, ...props }, ref) => (
        <Link
            className={cn(buttonVariants({ variant, size, className }))}
            href={href}
            ref={ref as any}
            {...props}
        />
    )
)
ButtonLink.displayName = 'ButtonLink'

export { Button, ButtonLink, buttonVariants }
