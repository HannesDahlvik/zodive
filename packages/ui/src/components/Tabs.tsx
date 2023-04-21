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
            'inline-flex items-center justify-center bg-muted text-muted-foreground rounded-md p-1',
            className
        )}
        {...props}
    />
))
TabsList.displayName = 'TabsList'

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        className={cn(
            'inline-flex min-w-[100px] items-center justify-center rounded px-3 py-1.5 text-sm text-muted-foreground font-medium transition-all',
            'data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm',
            'dark:data-[state=active]:bg-background dark:data-[state=active]:text-white',
            'disabled:pointer-events-none disabled:opacity-50',
            className
        )}
        {...props}
        ref={ref}
    />
))
TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        className={cn('mt-2 rounded-md border border-border p-6', className)}
        {...props}
        ref={ref}
    />
))
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }
