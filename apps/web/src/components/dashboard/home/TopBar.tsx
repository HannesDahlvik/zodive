'use client'

import DashboardDateChanger from '../DateChanger'
import DashboardCreateTransactionModal from '../modals/CreateTransaction'
import { Plus } from '@phosphor-icons/react'
import { Button, useModals } from '@zodive/ui'

export function DashboardHomeTopBar() {
    const { openModal } = useModals()

    const handleCreateTransaction = () => {
        openModal({
            children: <DashboardCreateTransactionModal />
        })
    }

    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-8">
                <h2 className="!pb-0">Dashboard</h2>
                <div className="flex justify-center w-[250px]">
                    <DashboardDateChanger />
                </div>
            </div>

            <Button onClick={handleCreateTransaction}>
                <Plus size={24} weight="bold" /> Create
            </Button>
        </div>
    )
}
