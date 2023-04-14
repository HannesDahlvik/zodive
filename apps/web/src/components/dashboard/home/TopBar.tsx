'use client'

import DashboardCreateTransactionModal from '../modals/CreateTransaction'
import { Plus } from '@phosphor-icons/react'
import { Button, H2, useModals } from '@zodive/ui'

export function DashboardHomeTopBar() {
    const { openModal } = useModals()

    const handleCreateTransaction = () => {
        openModal({
            children: <DashboardCreateTransactionModal />
        })
    }

    return (
        <div className="flex justify-between items-center w-full">
            <H2>Dashboard</H2>

            <Button onClick={handleCreateTransaction}>
                <Plus size={24} weight="bold" /> Create
            </Button>
        </div>
    )
}
