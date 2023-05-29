'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ChartTypes } from '@zodive/db'
import {
    Button,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Skeleton
} from '@zodive/ui'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import DashboardSettingsCard from '~/components/dashboard/settings/Card'
import { useSettings } from '~/contexts/SettingsContext'
import { api } from '~/lib/api'
import { dashboardHomeChartTypes } from '~/lib/types'

const updateUserSchema = z.object({
    defaultChart: z.custom<ChartTypes>()
})
type UpdateUserSchema = z.infer<typeof updateUserSchema>

export default function DashboardSettingsDashboardPage() {
    const { data: session, update } = useSession()
    const { settings } = useSettings()

    const updateUserMutation = api.settings.update.useMutation()

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { isDirty }
    } = useForm<UpdateUserSchema>({
        resolver: zodResolver(updateUserSchema)
    })

    const handleUpdateUser = async (data: UpdateUserSchema) => {
        updateUserMutation.mutate(
            {
                defaultChart: data.defaultChart,
                name: session?.user.name as string
            },
            {
                onError: (err) => {
                    console.error(err)
                },
                onSuccess: async (res) => {
                    reset({
                        defaultChart: res.defaultChart
                    })
                    await update(res)
                }
            }
        )
    }

    if (!settings) return <Skeleton className="h-full" />

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleUpdateUser)}>
            <DashboardSettingsCard>
                <div className="flex flex-col">
                    <p className="!p-0">Default chart</p>
                    <p className="!mt-1 text-muted-foreground">
                        Select default dashboard home chart
                    </p>
                </div>

                <Select
                    defaultValue={settings?.defaultChart}
                    onValueChange={(val: ChartTypes) =>
                        setValue('defaultChart', val, {
                            shouldDirty: true
                        })
                    }
                    {...register('defaultChart')}
                >
                    <SelectTrigger className="w-[240px]">
                        <SelectValue placeholder={settings?.defaultChart} />
                    </SelectTrigger>
                    <SelectContent>
                        {dashboardHomeChartTypes.map((row, i) => (
                            <SelectItem className="capitalize" value={row} key={i}>
                                {row}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </DashboardSettingsCard>

            <div className="mt-4">
                <Button type="submit" loading={updateUserMutation.isLoading} disabled={!isDirty}>
                    Save Changes
                </Button>
            </div>
        </form>
    )
}
