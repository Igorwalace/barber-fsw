
//react-next
import Image from 'next/image'
import React from 'react'
import { notFound } from 'next/navigation'
import { auth } from '@/app/_services/auth/auth'

//prisma
import { prisma } from '@/app/_services/prisma/_prisma'

//pages
import Header from '@/app/_pages/_header'
import About from './_components/about'
import Phone_Item from './_components/phone-item'
import Logo from '@/app/_components-g/logo-icon'
import Arrow_Back from './_components/arrow-back'
import Below_Img from './_components/below-img'
import Menu_Barber from './_components/menu-barber-single'
import Footer from '@/app/_pages/_footer'
import Button_Reservar from './_components/button-reservar'

//shadcn
import { Separator } from '@/app/_services/components/ui/separator'

interface BaberSingleProps {
    params: {
        id: string
    }
}

const Page = async ({ params }: BaberSingleProps) => {

    const session = await auth()

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
                        <div className='absolute top-3 left-3 lg:hidden' >
                            <Arrow_Back />
                        </div>
                        <div className='absolute top-3 right-3 lg:hidden' >
                            <Menu_Barber />
                        </div>
                    </div>
                    <Below_Img barbersingle={barbersingle} />

                    <Separator className='h-[3px]' />

                    <div className='flex flex-col gap-2 lg:px-0 px-5 py-5' >
                        <div>
                            <h1 className='text-sm' >Serviços</h1>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-2' >
                            {
                                barbersingle.services.map((service) => (
                                    <div key={service.id} className='bg-card p-3 flex gap-3 rounded-lg' >
                                        <div className='relative w-28 h-28' >
                                            <Image
                                                fill
                                                className='rounded-lg object-cover'
                                                alt={service.name}
                                                src={service.imageUrl}
                                            />
                                        </div>
                                        <div className='flex flex-col justify-between' >
                                            <h1 className='text-sm font-bold' >{service.name}</h1>
                                            <h1 className='text-sm text-[#838896] lg:max-w-56' >{service.description}</h1>
                                            <div className='flex justify-between items-center' >
                                                <span className='text-primary text-sm font-extrabold' >R$ {Number(service.price)}</span>
                                                <Button_Reservar session={session} barbershop={barbersingle} barberservice={service} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className='w-[386px] max-h-[700px] lg:block hidden bg-card p-3 space-y-3 rounded-lg' >

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

                    <div className='flex gap-2 items-center justify-center' >
                        <h1>Em parceria com</h1>
                        <Logo />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page