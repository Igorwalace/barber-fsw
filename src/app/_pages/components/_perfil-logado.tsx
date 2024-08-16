'use client'
//shadcn
import { Avatar, AvatarImage } from "@/app/_services/components/ui/avatar"
import { Button } from "@/app/_services/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/app/_services/components/ui/dialog"


//react-next
import { useState } from "react";
import { signOut } from "next-auth/react";


const Perfil_Logado = ({ session }: any) => {

    const [openDialogLogado, useOpenDialogLogado] = useState(false)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleLogado = () => useOpenDialogLogado(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleSignOut = () => useOpenDialogLogado(false)

    return (
        <>
            <Button variant='ghost' onClick={handleLogado} className='flex gap-2 items-center' >
                <Avatar>
                    <AvatarImage src={session?.user?.image ?? ''} />
                </Avatar>
                <h1 className='text-base font-bold' >{session?.user?.name}</h1>
            </Button>
            <Dialog open={openDialogLogado} onOpenChange={useOpenDialogLogado} >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Sair</DialogTitle>
                        <DialogDescription>
                            Deseja sair da plataforma?
                        </DialogDescription>
                        <DialogDescription className='pt-2 w-full flex gap-2' >
                            <Button variant='secondary' className='gap-1 w-full' onClick={handleSignOut} >Voltar</Button>
                            <Button variant='destructive' className='gap-1 w-full' onClick={() => signOut()} >Sair</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    );
}

export default Perfil_Logado;