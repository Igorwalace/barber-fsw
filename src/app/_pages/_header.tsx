//react-next
import Link from 'next/link'
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
import Menu_Mobile from './components/_menu-mobile'

//db
import { GetSession } from '../_services/_data/get-session'

//pages
import SerachHeader from './_search-header'

const Header = async () => {

    const session = await GetSession()

    return (
        <div className='lg:px-10 px-5 py-5 border-b-2 border-separate' >
            <nav className='flex justify-between items-center' >
                <Logo />
                <SerachHeader />
                <div className='lg:flex hidden justify-center items-center gap-3' >
                    {
                        session?.user &&
                        <Button asChild variant="ghost" className='text-sm flex gap-1'>
                            <Link href='/booking' >
                                <span><FaRegCalendarAlt /></span>
                                Agendamentos
                            </Link>
                        </Button>
                    }
                    {
                        !session?.user &&
                        <Button disabled variant="ghost" className='text-sm flex gap-1'>
                            <span><FaRegCalendarAlt /></span>
                            Agendamentos
                        </Button>
                    }
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