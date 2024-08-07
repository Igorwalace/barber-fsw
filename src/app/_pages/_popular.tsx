import React from 'react'

//prisma
import { prisma } from '../_services/prisma/_prisma'

//pages
import BarbershopItem from './components/_barber-shop-item'

const Popular = async () => {

    const barbershop = await prisma.barbershop.findMany()

    return (
        <>
            <main className='py-5 lg:px-10 px-5' >
                <div>
                    <h1 className='lg:text-xl text-sm font-bold' >Populares</h1>
                </div>
                <div className='flex gap-3 justify-between items-center pt-3 overflow-x-scroll scrollbar-none' >
                    {
                        barbershop.slice(0, 5).map((barber) => (
                            <BarbershopItem key={barber.id} barbershop={barber} />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default Popular