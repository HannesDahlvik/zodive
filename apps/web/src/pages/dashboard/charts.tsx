import { NextPageWithLayout } from '../_app'

import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

import DashboardLayout from '~/layouts/Dashboard'

const DashboardChartsPage: NextPageWithLayout = () => {
    return (
        <div className="p-8">
            <p>Charts page coming soon...</p>
        </div>
    )
}

DashboardChartsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default DashboardChartsPage

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
