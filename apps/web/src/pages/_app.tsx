import { AppType } from 'next/app'
import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

import { api } from '../utils/api'

import { Noto_Sans } from '@next/font/google'
import '@zodive/ui/styles'

const notoSans = Noto_Sans({ weight: ['100', '300', '400', '600', '700'] })

const MyApp: AppType = ({ Component, pageProps: { session, ...pageProps } }: any) => {
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${notoSans.style.fontFamily};
                }
            `}</style>

            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </>
    )
}

export default api.withTRPC(MyApp)
