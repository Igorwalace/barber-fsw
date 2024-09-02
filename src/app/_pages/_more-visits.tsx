import React from 'react'

//prisma
import { prisma } from '../_services/prisma/_prisma'

//pages
import BarbershopItem from './components/_barber-shop-item'
import Title from '../_components-g/title'
import Button_Arrow from '../_components-g/butto-arrow'

const More_Visits = async () => {

    const barbershop = await prisma.barbershop.findMany()

    return (
        <>
            <main className='py-5 lg:px-10 px-5 relative' >
                <Title title={`Mais Visitados`} />
                <div className='flex gap-3 justify-between items-center pt-3 overflow-x-scroll scrollbar-none' >
                    {
                        barbershop.slice(0, 6).map((barber) => (
                            <BarbershopItem key={barber.id} barbershop={barber} />
                        ))
                    }
                    <Button_Arrow />
                </div>
            </main>
        </>
    )
}

export default More_Visits