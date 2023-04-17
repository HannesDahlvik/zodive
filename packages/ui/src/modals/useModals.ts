import { useContext } from 'react'

import { ModalSettings, ModalsContext } from './ModalsProvider'

type ModalsEvents = {
    openModal(payload: ModalSettings): void
    closeModal(id: string): void
    closeAllModals(): void
}

export const useModals = (): ModalsEvents => {
    const ctx = useContext(ModalsContext)

    const openModal = (payload: ModalSettings) => {
        ctx?.openModal(payload)
    }

    const closeModal = (id: string) => {
        ctx?.closeModal(id)
    }

    const closeAllModals = () => {
        ctx?.closeAll()
    }

    return {
        openModal,
        closeModal,
        closeAllModals
    }
}
