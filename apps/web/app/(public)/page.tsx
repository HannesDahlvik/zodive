import { ButtonLink } from '@zodive/ui'

export default function HomePage() {
    return (
        <div>
            <h1>Zodive</h1>

            <div className="flex gap-2 mt-4">
                <ButtonLink href="/dashboard">Dashboard</ButtonLink>

                <ButtonLink href="/signin">Sign in</ButtonLink>
            </div>
        </div>
    )
}
