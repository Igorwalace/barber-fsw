import { auth } from '@/app/_services/auth/auth'
import React from 'react'

//pages
import UserLoginSearch from './user-login-search-home'
import FormSearch from './_form-search'

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
                    <UserLoginSearch session={session} />

            }
            <h1 className='lg:text-base text-sm font-light'>{dayCurrent}, {date.getDate()} de <span className='capitalize' >{date.toLocaleString('pt-BR', { month: 'long' })}.</span></h1>
            <div className="lg:my-10 mt-5">
                <FormSearch />
            </div>
        </>
    )
}

export default Search_Home