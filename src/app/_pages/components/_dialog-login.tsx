'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/app/_services/components/ui/dialog"

//react-icons
import { FaGoogle } from 'react-icons/fa'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

//shadcn
import { Button } from '@/app/_services/components/ui/button'

//react-next
import { signIn } from "next-auth/react";
import { useState } from "react";

//contexts
import useAppUtils from "@/app/_contexts/utils";

const Dialog_Login = () => {

    const [loadingSignin, setLoadingSignin] = useState(false)

    const { openDialogLogin, setOpenDialogLogin, dialogLoginFinally, setDialogLoginFinally } = useAppUtils()

    const handleSignin = async () => {
        setLoadingSignin(true)
        try {
            await signIn("google")
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingSignin(false)
            setDialogLoginFinally(true)
        }
    }

    return (
        <>
            <Dialog open={openDialogLogin} onOpenChange={setOpenDialogLogin} >
                <DialogContent className='w-[90%] rounded-lg' >
                    <DialogHeader>
                        <DialogTitle>Faça login na plataforma</DialogTitle>
                        <DialogDescription>
                            Conecte-se usando sua conta do Google.
                        </DialogDescription>
                        <DialogDescription className='pt-2 w-full' >
                            <Button disabled={loadingSignin && dialogLoginFinally} variant='outline' className='gap-2 w-full' onClick={handleSignin} >

                                {
                                    dialogLoginFinally
                                        ?
                                        <>
                                            <AiOutlineLoading3Quarters size={18} className="animate-spin" />
                                            Redirecionando
                                        </>
                                        :
                                        loadingSignin
                                            ?
                                            <>
                                                <AiOutlineLoading3Quarters size={18} className="animate-spin" />
                                                Carregando
                                            </>
                                            :
                                            <>
                                                <FaGoogle />
                                                Google
                                            </>
                                }

                            </Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Dialog_Login;