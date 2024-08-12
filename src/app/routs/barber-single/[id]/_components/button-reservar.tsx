'use client'

import React, { useState } from 'react'

//shadcn
import { Button } from '@/app/_services/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/_services/components/ui/sheet"

//prisma
import { BarbershopService } from '@prisma/client'
import { Separator } from '@/app/_services/components/ui/separator'
import { Calendar } from '@/app/_services/components/ui/calendar'

interface BarberServiceProps {
    barberservice: BarbershopService
}

const Button_Reservar = ({ barberservice }: BarberServiceProps) => {

    const [openReserve, useOpenReserve] = useState(false)
    const [date, setDate] = useState<Date | undefined>(new Date())

    const HandleReservar = (id: string) => {
        useOpenReserve(true)
    }

    return (
        <>
            <Button onClick={() => HandleReservar(barberservice.id)} variant='secondary' >Reservar</Button>

            <Sheet open={openReserve} onOpenChange={useOpenReserve} >
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className='text-lg mb-3' >Fazer Reservar - {barberservice.name}</SheetTitle>
                        <Separator />
                    </SheetHeader>
                    <SheetDescription className='mt-5' >
                        <div className='flex justify-center' >
                            <Calendar
                                mode="single"
                                // locale={ptBR}
                                selected={date}
                                onSelect={setDate}
                                fromDate={new Date()}
                            />
                        </div>
                    </SheetDescription>
                </SheetContent>
            </Sheet>

        </>
    )
}

export default Button_Reservar