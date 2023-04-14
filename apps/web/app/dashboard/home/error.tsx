'use client'

import { Button, H2 } from '@zodive/ui'
import { ErrorProps } from '~/lib/types'

export default function DashboardHomeErrorPage({ reset }: ErrorProps) {
    return (
        <div className="flex justify-center items-center p-8 h-full">
            <H2>Something went wrong!</H2>
            <Button onClick={() => reset()}>Reload</Button>
        </div>
    )
}
