import { Card, Skeleton } from '@zodive/ui'
import { DashboardHomeTopBar } from '~/components/dashboard/home/TopBar'

export default function DashboardHomeLoadingPage() {
    return (
        <div className="relative grid grid-rows-[44px_200px_1fr] gap-4 p-8 max-h-screen h-full">
            <DashboardHomeTopBar />

            <Card>
                <Skeleton className="h-full" />
            </Card>

            <div className="grid grid-cols-[3fr_2fr] gap-4">
                <Card>
                    <Skeleton className="h-full" />
                </Card>

                <Card>
                    <div className="flex justify-between items-center">
                        <h4 className="!mt-0">Latest Transactions</h4>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                        <Skeleton className="h-12" />
                        <Skeleton className="h-12" />
                        <Skeleton className="h-12" />
                        <Skeleton className="h-12" />
                        <Skeleton className="h-12" />
                        <Skeleton className="h-12" />
                        <Skeleton className="h-12" />
                    </div>
                </Card>
            </div>
        </div>
    )
}
