import { NextPageWithLayout } from '../_app'

import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

import DashboardLayout from '~/layouts/Dashboard'

const DashboardHomePage: NextPageWithLayout = () => {
    return (
        <div className="p-8">
            <p>Dashboard page coming soon...</p>
        </div>
    )
}

DashboardHomePage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default DashboardHomePage

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
