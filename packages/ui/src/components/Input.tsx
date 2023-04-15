import React from 'react'

import { cn } from '..'
import { Label } from './Label'
import { VariantProps, cva } from 'class-variance-authority'

const inputVariants = cva([
    'h-10 w-full bg-transparent px-3 py-2 text-sm rounded border border-border-light outline-none transition-all',
    'dark:border-border-dark',
    'focus-within:border-primary-700 dark:focus-within:border-primary-300',
    'disabled:cursor-not-allowed disabled:opacity-50'
])

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {
    label?: string
    error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, label, required, ...props }, ref) => {
        return (
            <div className="flex flex-col items-start gap-1">
                {label && (
                    <div className="flex justify-between w-full">
                        <Label htmlFor={label}>
                            {label}{' '}
                            {required && (
                                <span className="text-red-500 text-base leading-3">*</span>
                            )}
                        </Label>

                        {error && <p className="text-sm text-red-500 leading-3 !mt-0">{error}</p>}
                    </div>
                )}

                <input className={cn(inputVariants(), className)} id={label} ref={ref} {...props} />
            </div>
        )
    }
)

export { Input }
