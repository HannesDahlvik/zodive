import { NextPage } from 'next'

import { signOut, useSession } from 'next-auth/react'

import { Button, ButtonLink } from '@zodive/ui'

const IndexPage: NextPage = () => {
    const { data: user } = useSession()

    return (
        <div>
            <h1>Zodive</h1>

            <div className="mt-4">
                {!user ? (
                    <ButtonLink href="/signin">Sign in</ButtonLink>
                ) : (
                    <Button onClick={() => signOut()}>Sign out</Button>
                )}

                <ButtonLink href="/dashboard" className="ml-2">
                    Dashboard
                </ButtonLink>
            </div>
        </div>
    )
}

export default IndexPage
