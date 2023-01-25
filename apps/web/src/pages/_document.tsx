import { NextPage } from 'next'
import { Html, Head, Main, NextScript } from 'next/document'

const Document: NextPage = () => {
    return (
        <Html>
            <Head />
            <body className="bg-surface-100 dark:bg-surface-900 dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
