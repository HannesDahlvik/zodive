import { ButtonLink, H1 } from '@zodive/ui'

export default function HomePage() {
    return (
        <div>
            <H1>Zodive</H1>

            <div className="flex gap-2 mt-4">
                <ButtonLink href="/signup">Signup</ButtonLink>

                <ButtonLink href="/login">Login</ButtonLink>
            </div>
        </div>
    )
}
