import React from 'react'

//prisma
import { prisma } from '../_services/prisma/_prisma'

//pages
import BarbershopItem from './components/_barber-shop-item'

const Re_Banner = async () => {

    const barbershop = await prisma.barbershop.findMany()

    return (
        <>
            <main className='lg:px-0 lg:py-0 pt-5 px-5' >
                <div>
                    <h1 className='uppercase text-sm' >Recomendados</h1>
                </div>
                <div className='flex gap-3 mt-5' >
                    {
                        barbershop.slice(0, 3).map((barber) => (
                            <BarbershopItem key={barber.id} barbershop={barber} />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default Re_Banner