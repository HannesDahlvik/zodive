import { PropsWithChildren } from 'react'

import { Metadata } from 'next'
import { Lato } from 'next/font/google'

import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Providers from '~/Providers'

const lato = Lato({
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    creator: 'Hannes Dahlvik',
    description:
        'Zodive is an open source finance tracker, built for those who are interested in tracking what you spend your money on.',
    title: {
        default: 'Zodive',
        template: '%s | Zodive'
    },
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ],
    icons: {
        icon: '/favicon.ico'
    }
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={lato.className}>
                <Providers>
                    {children}
                    <Analytics />
                </Providers>
            </body>
        </html>
    )
}
