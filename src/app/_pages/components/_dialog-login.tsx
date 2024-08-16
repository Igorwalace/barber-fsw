
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/app/_services/components/ui/dialog"

//react-icons
import { FaGoogle } from 'react-icons/fa'

//shadcn
import { Button } from '@/app/_services/components/ui/button'

//react-next
import { signIn } from "next-auth/react";

interface StatesProps {
    openDialogLogin: boolean
    setOpenDialogLogin: any
}

const Dialog_Login = ({ setOpenDialogLogin, openDialogLogin }: StatesProps) => {
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
                            <Button variant='outline' className='gap-1 w-full' onClick={() => signIn('google')} ><FaGoogle />Google</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Dialog_Login;