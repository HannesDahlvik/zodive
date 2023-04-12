'use client'

import { Button, Input } from '@zodive/ui'

export default function LoginForm() {
    return (
        <form className="flex flex-col gap-4">
            <Input label="Email" type="email" placeholder="name@example.com" required />

            <Input label="Password" type="password" placeholder="********" required />

            <Button type="submit" className="w-full">
                Login
            </Button>
        </form>
    )
}
