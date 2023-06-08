import { authOptions } from '@zodive/auth'
import { ButtonLink } from '@zodive/ui'
import { getServerSession } from 'next-auth'
import HomeImage from '~/components/public/Image'

export default async function HomePage() {
    const session = await getServerSession(authOptions)

    return (
        <>
            <div className="relative flex flex-col justify-center items-center p-8 py-16 sm:py-20 sm:px-10 md:py-40 md:px-20 lg:p-40">
                <div className="flex flex-col items-center text-center mb-8 z-20">
                    <h1>Track Your Finances with Ease</h1>
                    <p className="lg:text-2xl text-center w-[90%] md:w-[400px] lg:w-[625px]">
                        Zodive is an open source finance tracker, built for those who are interested
                        in tracking what you spend your money on.
                    </p>
                </div>

                <div className="flex justify-center items-center z-20">
                    {session?.user ? (
                        <>
                            <ButtonLink href="/dashboard" size="lg">
                                Dashboard
                            </ButtonLink>
                        </>
                    ) : (
                        <ButtonLink href="/signin" size="lg">
                            Sign In
                        </ButtonLink>
                    )}
                </div>

                <div className="absolute w-52 h-40 sm:w-96 -rotate-[20deg] bg-black/40 dark:bg-white/25 rounded-full blur-3xl z-10" />
            </div>

            <div className="flex flex-col items-center h-screen mt-16">
                <div className="relative container flex justify-center items-center">
                    <HomeImage
                        darkSrc="/dashboard-home-dark.png"
                        lightSrc="/dashboard-home-light.png"
                        alt="Zodive dashboard home"
                    />

                    <div className="absolute w-[90%] h-3/4 bg-black/50 dark:bg-white/25 blur-3xl z-10" />
                </div>
            </div>
        </>
    )
}
