import React from 'react'

//shadcn
import { Button } from '@/app/_services/components/ui/button'
import { Input } from '@/app/_services/components/ui/input'
import { CiSearch } from 'react-icons/ci'

const Search_Home = () => {
    return (
        <>
            <h1 className='text-2xl font-normal' >Olá. Faça seu login!</h1>
            <h1 className='text-sm font-light'>Sexta, 2 de fevereiro</h1>
            <div className='flex mt-10 gap-1' >
                <Input type="email" placeholder="Buscar Barbearias" />
                <Button variant="outline" size="icon" className='bg-[#8162FF] px-2'>
                    <CiSearch size={20} className='font-extrabold' />
                </Button>
            </div>
        </>
    )
}

export default Search_Home