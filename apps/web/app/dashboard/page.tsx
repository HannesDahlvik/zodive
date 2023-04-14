import { redirect } from 'next/navigation'

export default function DashboardIndexPage() {
    return redirect('/dashboard/home')
}
