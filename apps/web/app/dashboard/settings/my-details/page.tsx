'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ChartTypes } from '@zodive/db'
import { Avatar, AvatarFallback, AvatarImage, Button, Input, Skeleton, useToast } from '@zodive/ui'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useSettings } from '~/contexts/SettingsContext'
import { api } from '~/lib/api'
import { parseUsername } from '~/lib/parseUsername'

const updateUserSchema = z.object({
    name: z.string().min(5)
})
type UpdateUserSchema = z.infer<typeof updateUserSchema>

export default function DashboardSettingsMyDetailsPage() {
    const { data: session, update } = useSession()
    const { settings } = useSettings()
    const { toast } = useToast()

    const updateUserMutation = api.settings.update.useMutation()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty }
    } = useForm<UpdateUserSchema>({
        resolver: zodResolver(updateUserSchema)
    })

    const handleUpdateUser = async (data: UpdateUserSchema) => {
        updateUserMutation.mutate(
            {
                defaultChart: settings?.defaultChart as ChartTypes,
                name: data.name
            },
            {
                onError: (err) => {
                    toast({
                        title: 'Error',
                        description: err.message,
                        variant: 'error'
                    })
                },
                onSuccess: async (res) => {
                    reset({
                        name: res.name as string
                    })
                    toast({
                        title: 'Saved changes'
                    })
                    await update(res)
                }
            }
        )
    }

    if (!settings) return <Skeleton className="h-full" />

    return (
        <div className="flex flex-col items-center gap-8">
            <Avatar className="w-40 h-40">
                <AvatarImage
                    src={session?.user.image as string}
                    alt={session?.user.name as string}
                />
                <AvatarFallback className="text-2xl">
                    {parseUsername(session?.user.name as string)}
                </AvatarFallback>
            </Avatar>

            <form className="flex flex-col gap-4 w-96" onSubmit={handleSubmit(handleUpdateUser)}>
                <Input
                    label="Name"
                    type="text"
                    required
                    defaultValue={session?.user.name as string}
                    error={errors.name?.message}
                    {...register('name')}
                />

                <Input label="Email" defaultValue={session?.user.email as string} readOnly />

                <Button type="submit" disabled={!isDirty} loading={updateUserMutation.isLoading}>
                    Save Changes
                </Button>
            </form>
        </div>
    )
}
