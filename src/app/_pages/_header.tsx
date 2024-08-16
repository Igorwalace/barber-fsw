//react-next
import { auth } from '../_services/auth/auth'
import React from 'react'

//shadcn
import { Button } from '../_services/components/ui/button'

//react-icons
import { FaRegCalendarAlt } from 'react-icons/fa'

//logo
import Logo from '../_components-g/logo-icon'

//pages
import Perfil_Login from './components/_perfil-login'
import Perfil_Logado from './components/_perfil-logado'
import Menu_Mobile from './components/menu-mobile'

const Header = async () => {

    const session = await auth()

    return (
        <div className='lg:px-10 px-5 py-5 border-b-2 border-separate' >
            <nav className='flex justify-between items-center' >
                <Logo />
                <div className='lg:flex hidden justify-center items-center gap-3' >
                    <Button variant="ghost" className='text-sm flex gap-1'><span><FaRegCalendarAlt /></span>Agendamentos</Button>
                    {
                        session?.user
                            ?
                            <Perfil_Logado session={session} />
                            :
                            <Perfil_Login />
                    }
                </div>
                <div className='lg:hidden' >
                    <Menu_Mobile session={session} />
                </div>
            </nav>
        </div>
    )
}

export default Header