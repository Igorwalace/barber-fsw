import React from 'react'

//prisma
import { Barbershop } from '@prisma/client'
import Image from 'next/image'
import { Button } from '@/app/_services/components/ui/button'

interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return (
        <>
            <main className='w-[165px] lg:w-56 min-h-60 bg-card rounded-2xl' >
                <div className='relative lg:h-[159px] h-[120px] w-full' >
                    <Image
                        src={barbershop.imageUrl}
                        fill
                        className="rounded-2xl object-cover"
                        alt={barbershop.description}
                    />
                </div>
                <div className="p-3 flex flex-col gap-[8px]">
                    <h1 className='text-sm font-bold whitespace-nowrap' >{barbershop.name}</h1>
                    <h1 className='text-xs text-[#838896] whitespace-nowrap' >{barbershop.address}</h1>
                    <Button variant='secondary'>Reservar</Button>
                </div>
            </main>
        </>
    )
}

export default BarbershopItem