import React from 'react'

import { cn, genRandomString } from '..'
import { Label } from './Label'
import { VariantProps, cva } from 'class-variance-authority'

const inputVariants = cva(
    [
        'h-10 w-full bg-transparent px-3 py-2 text-sm rounded border border-slate-300 outline-none transition-all',
        'dark:border-surface-600',
        'focus-within:border-primary-700 dark:focus-within:border-white',
        'disabled:cursor-not-allowed disabled:opacity-50'
    ],
    {
        variants: {
            error: {
                true: 'border-red-500 focus-within:border-red-500 dark:border-red-500 dark:focus-within:border-red-500'
            }
        }
    }
)

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {
    label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, label, required, ...props }, ref) => {
        return (
            <div className="flex flex-col items-start gap-[0.1rem]">
                {label && (
                    <Label htmlFor={label}>
                        {label} {required && <span className="text-red-500 text-base">*</span>}
                    </Label>
                )}

                <input
                    className={cn(inputVariants({ className, error }))}
                    id={label}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
Input.displayName = 'Input'

export { Input }
