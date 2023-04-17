'use client'

import { Button, Input } from '@zodive/ui'

export default function SigninForm() {
    return (
        <form className="flex flex-col gap-4">
            <Input label="Email" type="email" placeholder="name@example.com" required disabled />

            <Button type="submit" className="w-full" disabled>
                Sign in
            </Button>
        </form>
    )
}
