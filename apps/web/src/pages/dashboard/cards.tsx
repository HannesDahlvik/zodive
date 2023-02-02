import { NextPageWithLayout } from '../_app'

import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

import DashboardLayout from '~/layouts/Dashboard'

const DashboardCardsPage: NextPageWithLayout = () => {
    return (
        <div className="p-8">
            <p>Cards page coming soon...</p>
        </div>
    )
}

DashboardCardsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default DashboardCardsPage

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
