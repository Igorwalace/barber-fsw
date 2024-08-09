import Image from 'next/image'
import React from 'react'
import { notFound } from 'next/navigation'

//prisma
import { prisma } from '@/app/_services/prisma/_prisma'

//pages
import Header from '@/app/_pages/_header'
import Phone_Item from './phone-item'
import Logo from '@/app/_components-g/logo-icon'

//shadcn
import { Separator } from '@/app/_services/components/ui/separator'
import About from './about'
import Below_Img from './below-img'

interface BaberSingleProps {
    params: {
        id: string
    }
}

const Page = async ({ params }: BaberSingleProps) => {

    const barbersingle = await prisma.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true,
        },
    })

    if (!barbersingle) {
        return notFound()
    }

    return (
        <>
            <div className="lg:block hidden"><Header /></div>
            <div className='lg:px-10 lg:py-5 flex justify-center gap-10' >
                <div className='lg:w-auto w-full' >
                    <div className='relative w-full lg:w-[750px] h-[250px] lg:h-[487px]' >
                        <Image
                            className='rounded-lg object-cover'
                            fill
                            quality={100}
                            src={barbersingle?.imageUrl}
                            alt={barbersingle?.description}
                        />
                    </div>
                    <Below_Img barbersingle={barbersingle} />

                </div>
                <div className='w-[386px] lg:flex hidden bg-card p-3 flex-col gap-3 rounded-lg' >

                    <div className='relative w-full h-[180px]' >
                        <Image
                            className='rounded-lg'
                            fill
                            quality={100}
                            alt='map'
                            src='/map.png'
                        />
                        <div className='px-5 py-3 bg-popover absolute rounded-lg bottom-3 right-3 left-3 flex gap-4' >
                            <div className='relative w-12 h-12' >
                                <Image
                                    className='rounded-full'
                                    alt={barbersingle.name}
                                    fill
                                    src={barbersingle.imageUrl}
                                />
                            </div>
                            <div>
                                <h1 className='text-base' >{barbersingle.name}</h1>
                                <h1 className='text-xs' >{barbersingle.address}</h1>
                            </div>
                        </div>
                    </div>


                    <About barbersingle={barbersingle} />

                    <Separator className='h-[2px]' />

                    <div className="space-y-3 py-2">
                        {barbersingle.phones.map((phone) => (
                            <Phone_Item key={phone} phone={phone} />
                        ))}
                    </div>

                    <Separator className='h-[2px]' />

                    <div className='flex gap-2 items-center justify-center py-5' >
                        <h1>Em parceria com</h1>
                        <Logo />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page