import { NextPage } from 'next'
import { AppProps, AppType } from 'next/app'

import { useEffect } from 'react'

import { SessionProvider } from 'next-auth/react'

import { api } from '../utils/api'

import { Noto_Sans } from '@next/font/google'
import '@zodive/ui/styles'

const notoSans = Noto_Sans({ weight: ['100', '300', '400', '600', '700'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const MyApp = (({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) => {
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

    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${notoSans.style.fontFamily};
                }
            `}</style>

            <SessionProvider session={session}>
                {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
        </>
    )
}) as AppType

export default api.withTRPC(MyApp)
