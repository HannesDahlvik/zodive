import { ButtonLink } from '@zodive/ui'
import { NextPage } from 'next'

const ErrorPage: NextPage = () => {
    return (
        <div className="flex justify-center items-center flex-col h-screen">
            <h2>Auth Error</h2>

            <p className="mt-2">There was an error with auth!</p>

            <div className="mt-2">
                <ButtonLink href="/">Home</ButtonLink>

                <ButtonLink href="/login" className="ml-2">
                    Login
                </ButtonLink>
            </div>
        </div>
    )
}

export default ErrorPage
