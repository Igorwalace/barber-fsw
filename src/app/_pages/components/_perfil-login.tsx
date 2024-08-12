'use client'
import { signIn } from "next-auth/react"
import React from 'react'

//react-icons
import { FaRegUserCircle } from 'react-icons/fa'

//shadcn
import { Button } from '@/app/_services/components/ui/button'

const Perfil_Login = () => {
    return (
        <>
            <Button onClick={() => signIn()} variant="secondary" className='bg-primary text-sm py-2 px-3 flex gap-1' ><span><FaRegUserCircle /></span>Perfil</Button>
        </>
    )
}

export default Perfil_Login