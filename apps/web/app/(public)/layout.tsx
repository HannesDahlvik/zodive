import { PropsWithChildren } from 'react'

import PublicNavbar from '~/components/public/Navbar'

export default function PublicLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen">
            <PublicNavbar />

            <main>{children}</main>
        </div>
    )
}
