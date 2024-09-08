import React from 'react'
import Link from 'next/link'

//shadcn
import { Button } from '../_services/components/ui/button'
import { FaScissors } from 'react-icons/fa6'
import { GiBeard } from 'react-icons/gi'
import { AiFillCalendar } from 'react-icons/ai'

interface InterfaceCategory {
    name: string,
    icon: any
    link: string
}

const Categorys = () => {

    const categorys = [

        {
            name: 'Agendamentos',
            link: '/booking',
            icon: <AiFillCalendar />
        }
    ]

    return (
        <>
            <div className='flex gap-3 w-full overflow-x-auto scrollbar-none' >
                {
                    categorys.map((categorys: InterfaceCategory) => (
                        <div key={categorys.name}>
                            <Button className='rounded-3xl text-sm' variant='secondary' >
                                <Link href={categorys.link} className='flex gap-1 justify-center items-center' >
                                    <span className='pr-2' >{categorys.icon}</span>{categorys.name}
                                </Link>
                            </Button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Categorys