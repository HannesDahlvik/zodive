'use client'

import { Button, ButtonLink, H1 } from '@zodive/ui'
import { toggleTheme } from '~/lib/utils'

export default function HomePage() {
    return (
        <div>
            <H1>Zodive</H1>

            <div className="flex gap-2 mt-4">
                <ButtonLink href="/signup">Signup</ButtonLink>

                <ButtonLink href="/login">Login</ButtonLink>

                <Button onClick={toggleTheme}>Toggle theme</Button>
            </div>
        </div>
    )
}
