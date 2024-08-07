import React from 'react'

//shadcn
import { Button } from '../_services/components/ui/button'

//react-icons
import { FaRegCalendarAlt, FaRegUserCircle } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

//fonts
import { righteous } from '../_services/fonts/fonts'

const Header = () => {
    return (
        <div className='px-10 py-5' >
            <nav className='flex justify-between items-center' >
                <div>
                    <button className={`${righteous.className} text-primary text-3xl font-bold`} >IG<span className='text-white' >Barber</span></button>
                </div>
                <div className='lg:flex hidden justify-center items-center gap-3' >
                    <Button variant="ghost" className='text-sm flex gap-1'><span><FaRegCalendarAlt /></span>Agendamentos</Button>
                    <Button variant="secondary" className='bg-primary text-sm py-2 px-3 flex gap-1' ><span><FaRegUserCircle /></span>Perfil</Button>
                </div>
                <div className='lg:hidden' >
                    <Button variant="link" size="icon" ><FiMenu color='white' size={20} /></Button>
                </div>
            </nav>
        </div>
    )
}

export default Header