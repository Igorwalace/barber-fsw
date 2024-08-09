import React from 'react'

//shadcn
import { Button } from '../_services/components/ui/button'
import { FaScissors } from 'react-icons/fa6'
import { GiBeard } from 'react-icons/gi'
import { AiFillCalendar } from 'react-icons/ai'

interface InterfaceCategory {
    name: string,
    icon: any
}

const Categorys = () => {

    const categorys = [
        {
            name: 'Cabelo',
            icon: <FaScissors />
        },
        {
            name: 'Barba',
            icon: <GiBeard />
        },
        {
            name: 'Acabamento',
            icon: <AiFillCalendar />
        }
    ]

    return (
        <>
            <div className='flex gap-3 w-full overflow-x-auto scrollbar-none' >
                {
                    categorys.map((categorys: InterfaceCategory) => (
                        <div key={categorys.name}>
                            <Button className='rounded-3xl text-sm' variant='secondary' ><span className='pr-2' >{categorys.icon}</span>{categorys.name}</Button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Categorys