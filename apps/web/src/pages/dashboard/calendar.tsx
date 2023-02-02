import { NextPageWithLayout } from '../_app'

import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

import DashboardLayout from '~/layouts/Dashboard'

const DashboardCalendarPage: NextPageWithLayout = () => {
    return (
        <div className="p-8">
            <p>Calendar page coming soon...</p>
        </div>
    )
}

DashboardCalendarPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default DashboardCalendarPage

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
