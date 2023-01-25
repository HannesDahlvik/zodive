import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { useEffect } from 'react'

import '@zodive/ui/styles'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
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
            <Head>
                <title>Zodive</title>
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
