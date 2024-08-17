
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

interface StatesProps {
    openDialogLogin: boolean
    setOpenDialogLogin: any
}

const Dialog_Login = ({ setOpenDialogLogin, openDialogLogin }: StatesProps) => {

    const [loadingSignin, setLoadingSignin] = useState(false)

    const handleSignin = async () => {
        setLoadingSignin(true)
        try {
            await signIn("google")
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingSignin(false)
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
                            <Button disabled={loadingSignin} variant='outline' className='gap-2 w-full' onClick={handleSignin} >

                                {
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