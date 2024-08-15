'use client'
import { signIn } from "next-auth/react"
import React, { useState } from 'react'

//react-icons
import { FaGoogle, FaRegUserCircle } from 'react-icons/fa'

//shadcn
import { Button } from '@/app/_services/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/app/_services/components/ui/dialog"


const Perfil_Login = () => {

    const [openDialogLogin, setOpenDialogLogin] = useState(false)

    return (
        <>
            <Button onClick={() => setOpenDialogLogin(true)} variant="secondary" className='bg-primary text-sm py-2 px-3 flex gap-1' ><span><FaRegUserCircle /></span>Perfil</Button>
            <Dialog open={openDialogLogin} onOpenChange={setOpenDialogLogin} >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Faça login na plataforma</DialogTitle>
                        <DialogDescription>
                            Conecte-se usando sua conta do Google.
                        </DialogDescription>
                        <DialogDescription className='pt-2 w-full' >
                            <Button variant='outline' className='gap-1 w-full' onClick={()=> signIn('google')} ><FaGoogle />Google</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Perfil_Login