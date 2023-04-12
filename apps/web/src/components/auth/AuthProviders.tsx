'use client'

import { GithubLogo, IconContext } from '@phosphor-icons/react'
import { Button } from '@zodive/ui'

export default function AuthProviders() {
    return (
        <IconContext.Provider
            value={{
                size: 18,
                weight: 'fill'
            }}
        >
            <div className="flex flex-col">
                <Button variant="outline" className="gap-2">
                    <GithubLogo /> Github
                </Button>
            </div>
        </IconContext.Provider>
    )
}
