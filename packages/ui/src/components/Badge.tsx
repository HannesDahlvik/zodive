import * as React from 'react'

import { cn } from '..'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
    [
        'inline-flex items-center border rounded-full font-semibold transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
    ],
    {
        variants: {
            variant: {
                default:
                    'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
                outline: 'border border-border text-foreground hover:bg-border'
            },
            size: {
                sm: 'px-2.5 py-0.5 text-xs',
                md: 'px-4 py-1 text-sm',
                lg: 'px-6 py-1.5 text-base'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'sm'
        }
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }
