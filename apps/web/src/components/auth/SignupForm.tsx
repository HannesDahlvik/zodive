'use client'

import { Button, Input } from '@zodive/ui'

export default function SignupForm() {
    return (
        <form className="flex flex-col gap-4">
            <Input label="Username" type="email" placeholder="Jon Doe" required />

            <Input label="Email" type="email" placeholder="name@example.com" required />

            <Input label="Password" type="password" placeholder="********" required />

            <Button type="submit" className="w-full">
                Signup
            </Button>
        </form>
    )
}
