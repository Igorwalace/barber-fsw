import React from 'react'

//interface
import { BarberSingleProps } from './about'

//react-icons
import { CiLocationOn } from 'react-icons/ci'
import { IoStarSharp } from 'react-icons/io5'

//shadcn
import { Separator } from '@/app/_services/components/ui/separator'

const Below_Img = ({ barbersingle }: BarberSingleProps) => {
    return (
        <>
            <div className='lg:px-0 px-5 py-5 flex justify-between' >

                <div className='flex flex-col gap-2' >
                    <h1 className='lg:text-3xl text-xl font-bold' >{barbersingle.name}</h1>
                    <div className='flex gap-2 items-center' >
                        <span className='text-primary' ><CiLocationOn /></span>
                        <span className='text-sm' >{barbersingle.address}</span>
                    </div>
                    <div className='flex gap-2 items-center lg:hidden' >
                        <span className='text-primary' ><IoStarSharp /></span>
                        <span className='text-sm' >5,0 (800 avaliações)</span>
                    </div>
                </div>

                <div className='bg-card lg:flex flex-col justify-center items-center rounded-xl px-2 py-1 gap-1 hidden' >
                    <div className='flex gap-2 items-center justify-center' >
                        <span className='text-primary' ><IoStarSharp /></span>
                        <span className='text-xl font-extrabold' >5,0</span>
                    </div>
                    <span className='text-xs' >800 avaliações</span>
                </div>

            </div>
        </>
    )
}

export default Below_Img