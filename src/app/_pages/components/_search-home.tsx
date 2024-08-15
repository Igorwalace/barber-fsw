import { auth } from '@/app/_services/auth/auth'
import React from 'react'

//shadcn
import { Button } from '@/app/_services/components/ui/button'
import { Input } from '@/app/_services/components/ui/input'

//react-icons
import { CiSearch } from 'react-icons/ci'

const Search_Home = async () => {

    const session = await auth()
    const date = new Date()
    const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    const dayCurrent = diasDaSemana[date.getDay()]

    return (
        <>
            {
                session?.user
                    ?
                    <h1 className='lg:text-2xl text-xl font-normal' >Olá, {session?.user?.name}!</h1>
                    :
                    <h1 className='lg:text-2xl text-xl font-normal' >Olá. Faça seu login!</h1>

            }
            <h1 className='lg:text-base text-sm font-light'>{dayCurrent}, {date.getDate()} de <span className='capitalize' >{date.toLocaleString('default', { month: 'long' })}.</span></h1>
            <div className='flex lg:mt-10 mt-5 gap-1' >
                <Input type="email" placeholder="Buscar Barbearias" />
                <Button variant="outline" size="icon" className='bg-[#8162FF] px-2'>
                    <CiSearch size={20} className='font-extrabold' />
                </Button>
            </div>
        </>
    )
}

export default Search_Home