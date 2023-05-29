import { PropsWithChildren } from 'react'

export default function DashboardSettingsCard({ children }: PropsWithChildren) {
    return <div className="flex items-center gap-32 border-t border-t-border pt-4">{children}</div>
}
