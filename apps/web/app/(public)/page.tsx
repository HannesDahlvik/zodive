import { ButtonLink, H1 } from '@zodive/ui'

export default function HomePage() {
    return (
        <div>
            <H1>Zodive</H1>

            <div className="flex gap-2 mt-4">
                <ButtonLink href="/dashboard">Dashboard</ButtonLink>

                <ButtonLink href="/signin">Signin</ButtonLink>
            </div>
        </div>
    )
}
