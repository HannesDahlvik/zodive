import { Skeleton } from '@zodive/ui'

export default function DashboardTransactionsLoadingPage() {
    return (
        <div className="grid grid-rows-[56px_1fr] gap-4 p-8 h-screen w-full">
            <div className="flex justify-between">
                <Skeleton className="h-full w-[350px]" />

                <Skeleton className="h-full w-[120px]" />
            </div>

            <Skeleton className="h-full" />
        </div>
    )
}
