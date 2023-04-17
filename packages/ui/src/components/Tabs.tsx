'use client'

import React from 'react'

import { cn } from '..'
import * as TabsPrimitive from '@radix-ui/react-tabs'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(
            'inline-flex items-center justify-center rounded-md bg-slate-100 p-1 dark:bg-surface-700',
            className
        )}
        {...props}
    />
))

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        className={cn(
            'inline-flex min-w-[100px] items-center justify-center rounded px-3 py-1.5 text-sm font-medium text-primary-500 transition-all',
            'data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm',
            'dark:text-slate-200 dark:data-[state=active]:bg-surface-900 dark:data-[state=active]:text-slate-100',
            'disabled:pointer-events-none disabled:opacity-50',
            className
        )}
        {...props}
        ref={ref}
    />
))

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        className={cn(
            'mt-2 rounded-md border border-slate-200 p-6 dark:border-slate-700',
            className
        )}
        {...props}
        ref={ref}
    />
))

export { Tabs, TabsList, TabsTrigger, TabsContent }
