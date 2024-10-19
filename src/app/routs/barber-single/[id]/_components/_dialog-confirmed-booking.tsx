'use client'

//contexts
import useAppUtils from "@/app/_contexts/utils";

//shadcn
import { Button } from "@/app/_services/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/app/_services/components/ui/dialog"

//react-icons
import { FaCheck } from "react-icons/fa";

const DialogConfirmedBooking = () => {

    const { openDialogConfirmedBooking, setOpenDialogConfirmedBooking } = useAppUtils()

    return (
        <>
            <Dialog open={openDialogConfirmedBooking} onOpenChange={setOpenDialogConfirmedBooking} >
                <DialogContent className='w-64 h-64 rounded-lg' >
                    <DialogHeader className="flex flex-col items-center justify-between lg:gap-0 gap-0" >
                        <DialogTitle className='bg-primary w-16 h-16 rounded-full flex justify-center items-center' >
                            <FaCheck color='black' className='w-7 h-5 font-extrabold' />
                        </DialogTitle>
                        <DialogTitle className='text-' >Reserva Efetuada!</DialogTitle>
                        <DialogDescription className='text-center' >Sua reserva foi agendada com sucesso.</DialogDescription>
                        <DialogClose asChild className='w-full'>
                            <Button type="button" variant="secondary">
                                Fechar
                            </Button>
                        </DialogClose>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default DialogConfirmedBooking;