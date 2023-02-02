import React, { ComponentProps } from 'react'
import Link, { LinkProps } from 'next/link'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const styles = cva(
    [
        'inline-flex justify-center items-center font-semibold duration-200 disabled:opacity-50',
        'disabled:opacity-70 disabled:pointer-events-none disabled:cursor-not-allowed'
    ],
    {
        defaultVariants: {
            fullWidth: false,
            radius: 'sm',
            size: 'md',
            color: 'primary'
        },
        variants: {
            color: {
                primary: 'bg-primary-500 hover:bg-primary-600 text-white',
                secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
                tertiary: 'bg-tertiary-500 hover:bg-tertiary-600 text-white',
                success: 'bg-success-500 hover:bg-success-600 text-black',
                warning: 'bg-warning-500 hover:bg-warning-600 text-black',
                error: 'bg-error-500 hover:bg-error-600 text-black',
                surface: 'bg-surface-500 hover:bg-surface-600 text-white'
            },
            size: {
                xs: 'py-1.5 px-2 text-xs',
                sm: 'py-2 px-3 text-sm',
                md: 'py-2 px-5 text-base',
                lg: 'py-3 px-8 text-lg',
                xl: 'py-4 px-12 text-xl'
            },
            radius: {
                xs: 'rounded-sm',
                sm: 'rounded',
                md: 'rounded-md',
                lg: 'rounded-lg',
                xl: 'rounded-xl'
            },
            fullWidth: {
                true: 'w-full'
            }
        }
    }
)

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof styles>

export type ButtonLinkProps = LinkProps & ComponentProps<'link'> & VariantProps<typeof styles>

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
    return (
        <button className={cx(styles(props), className)} {...props}>
            {props.children}
        </button>
    )
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ className, href, ...props }) => {
    return (
        <Link className={cx(styles(props), className)} href={href as string}>
            {props.children}
        </Link>
    )
}
