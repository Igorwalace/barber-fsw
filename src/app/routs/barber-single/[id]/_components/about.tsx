import React from 'react'

//prisma
import { Barbershop } from '@prisma/client'

export interface BarberSingleProps {
    barbersingle: Barbershop
}

const About = ({ barbersingle }: BarberSingleProps) => {
    return (
        <div className='py-2 flex flex-col gap-3' >
            <h1 className='text-sm' >Sobre nós</h1>
            <p className='text-sm text-[#838896]' >{barbersingle.description}</p>
        </div>
    )
}

export default About