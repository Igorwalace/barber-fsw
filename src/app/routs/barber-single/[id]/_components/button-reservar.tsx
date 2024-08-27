'use client'

import React, { useState } from 'react'

//local
import { ptBR } from "date-fns/locale";

//shadcn
import { Button } from '@/app/_services/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/app/_services/components/ui/sheet"

//prisma
import { BarbershopService } from '@prisma/client'
import { Separator } from '@/app/_services/components/ui/separator'
import { Calendar } from '@/app/_services/components/ui/calendar'

interface BarberServiceProps {
    barberservice: BarbershopService
}

const Button_Reservar = ({ barberservice }: BarberServiceProps) => {

    const TIME_LIST = [
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
    ]

    const [openReserve, useOpenReserve] = useState(false)
    const [date, setDate] = useState<Date | undefined>(undefined)

    const HandleReservar = (id: string) => {
        useOpenReserve(true)
    }

    const handleSelectDay = (dateSelect: Date | undefined) => {
        setDate(dateSelect)
    }

    return (
        <>
            <Button onClick={() => HandleReservar(barberservice.id)} variant='secondary' >Reservar</Button>

            <Sheet open={openReserve} onOpenChange={useOpenReserve} >
                <SheetContent className='overflow-y-auto [&::-webkit-scrollbar]:hidden' >
                    <SheetHeader>
                        <SheetTitle className='text-lg mb-3' >Fazer Reservar - {barberservice.name}</SheetTitle>
                        <Separator />
                    </SheetHeader>
                    <SheetDescription className='w-full' >
                        <div className="border-b border-solid py-5">
                            <Calendar
                                mode="single"
                                locale={ptBR}
                                selected={date}
                                onSelect={handleSelectDay}
                                fromDate={new Date()}
                                styles={{
                                    head: {
                                        width: "100%",
                                        textTransform: "capitalize",
                                    },
                                    cell: {
                                        width: "100%",
                                    },
                                    button: {
                                        width: "100%",
                                    },
                                    nav_button_previous: {
                                        width: "32px",
                                        height: "32px",
                                    },
                                    nav_button_next: {
                                        width: "32px",
                                        height: "32px",
                                    },
                                    caption: {
                                        textTransform: "capitalize",
                                    },
                                }}
                            />
                        </div>
                        {
                            date &&
                            <div className="lg:grid grid-cols-4 py-5 justify-center flex gap-3 overflow-x-auto pl-0 [&::-webkit-scrollbar]:hidden">
                                {
                                    TIME_LIST.length > 0 &&
                                    TIME_LIST.map((time) => (
                                        <Button
                                            key={time}
                                            variant="outline"
                                            className="rounded-full"
                                        // onClick={() => handleTime\elect(time)}
                                        >
                                            {time}
                                        </Button>
                                    ))
                                }
                            </div>
                        }
                        {
                            !date &&
                            <div className='py-5 pl-2' >
                                <p className="text-xs">
                                    Não há horários disponíveis para este dia.
                                </p>
                            </div>
                        }

                        <Separator />
                    </SheetDescription>
                </SheetContent>
            </Sheet>

        </>
    )
}

export default Button_Reservar