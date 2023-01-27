import { AppType } from 'next/app'
import { api } from '../utils/api'

import { useEffect } from 'react'

import '@zodive/ui/styles'

const MyApp: AppType = ({ Component, pageProps }) => {
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

    return <Component {...pageProps} />
}

export default api.withTRPC(MyApp)
