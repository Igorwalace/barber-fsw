import React from 'react'

//shadcn
import { Button } from '../_services/components/ui/button'

//react-icons
import { FaRegCalendarAlt, FaRegUserCircle } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

//logo
import Logo from '../_components-g/logo-icon'

//pages
import Perfil_Login from './components/_perfil-login'

const Header = () => {
    return (
        <div className='lg:px-10 px-5 py-5 border-b-2 border-separate' >
            <nav className='flex justify-between items-center' >
                <Logo />
                <div className='lg:flex hidden justify-center items-center gap-3' >
                    <Button variant="ghost" className='text-sm flex gap-1'><span><FaRegCalendarAlt /></span>Agendamentos</Button>
                    <Perfil_Login />
                </div>
                <div className='lg:hidden' >
                    <Button variant="link" size="icon" ><FiMenu color='white' size={20} /></Button>
                </div>
            </nav>
        </div>
    )
}

export default Header