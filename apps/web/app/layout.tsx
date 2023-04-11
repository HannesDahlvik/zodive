import { Metadata } from 'next'
import { Lato } from 'next/font/google'

import './globals.css'
import { Theme, cn } from '@zd/ui'

const lato = Lato({
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: {
        default: 'Zodive',
        template: '%s | Zodive'
    },
    creator: 'Hannes Dahlvik',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ],
    icons: {
        icon: '/favicon.ico'
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={cn([
                    'bg-white dark:bg-surface-900 dark:text-white duration-200',
                    lato.className
                ])}
            >
                <Theme>{children}</Theme>
            </body>
        </html>
    )
}