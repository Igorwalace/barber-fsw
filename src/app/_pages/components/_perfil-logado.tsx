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

    const [openDialogLogado, setOpenDialogLogado] = useState(false)
    const [loadingSignout, setLoadingSignout] = useState(false)

    const handleLoadingSignOut = async () => {
        setLoadingSignout(true)
        try {
            await signOut()
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingSignout(false)
        }
    }

    return (
        <>
            <Button variant='ghost' onClick={() => setOpenDialogLogado(true)} className='flex gap-2 items-center' >
                <Avatar>
                    <AvatarImage src={session?.user?.image ?? ''} />
                </Avatar>
                <h1 className='text-base font-bold' >{session?.user?.name}</h1>
            </Button>
            <Dialog open={openDialogLogado} onOpenChange={setOpenDialogLogado} >
                <DialogContent className='w-[90%] rounded-lg' >
                    <DialogHeader>
                        <DialogTitle>Sair</DialogTitle>
                        <DialogDescription>
                            Deseja sair da plataforma?
                        </DialogDescription>
                        <DialogDescription className='pt-2 w-full flex gap-2' >
                            <Button variant='secondary' className='gap-1 w-2/4' disabled={loadingSignout} onClick={() => setOpenDialogLogado(false)} >Voltar</Button>
                            <Button variant='destructive' className={`gap-1 w-2/4`} disabled={loadingSignout} onClick={handleLoadingSignOut} >
                                {
                                    loadingSignout
                                        ?
                                        <span className={`${loadingSignout && 'loader'}`} ></span>
                                        :
                                        'Sair'
                                }
                            </Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    );
}

export default Perfil_Logado;