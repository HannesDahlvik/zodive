import { NextPage } from 'next'

import { signOut } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

import { Button } from '@zodive/ui'

const DashboardPage: NextPage = () => {
    return (
        <div>
            <Button className="m-3" onClick={() => signOut()}>
                Sign out
            </Button>
        </div>
    )
}

export default DashboardPage

export async function getServerSideProps(context: any) {
    const session = await getServerSession(context.req, context.res, authOptions)

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }
}
