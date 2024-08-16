'use client'
import React, { useState } from 'react'

//react-icons
import { FaRegUserCircle } from 'react-icons/fa'

//shadcn
import { Button } from '@/app/_services/components/ui/button'

//pages
import Dialog_Login from "./_dialog-login"

const Perfil_Login = () => {

    const [openDialogLogin, setOpenDialogLogin] = useState(false)

    return (
        <>
            <Button onClick={() => setOpenDialogLogin(true)} variant="secondary" className='bg-primary text-sm py-2 px-3 flex gap-1' ><span><FaRegUserCircle /></span>Perfil</Button>
            <Dialog_Login openDialogLogin={openDialogLogin} setOpenDialogLogin={setOpenDialogLogin} />
        </>
    )
}

export default Perfil_Login