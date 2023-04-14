'use client'

import { Button } from '@zodive/ui'
import { ErrorProps } from '~/lib/types'

export default function DashboardHomeErrorPage({ reset }: ErrorProps) {
    return (
        <div className="flex justify-center items-center p-8 h-full">
            <h2>Something went wrong!</h2>
            <Button onClick={() => reset()}>Reload</Button>
        </div>
    )
}
