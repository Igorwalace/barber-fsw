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
import { Barbershop, BarbershopService } from '@prisma/client'
import { Separator } from '@/app/_services/components/ui/separator'
import { Calendar } from '@/app/_services/components/ui/calendar'
import { format } from 'date-fns';

interface BarberServiceProps {
    barberservice: BarbershopService
    barbershop: Barbershop
}

const Button_Reservar = ({ barberservice, barbershop }: BarberServiceProps) => {

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
    const [day, setday] = useState<Date | undefined>(undefined)
    const [selectedTime, setselectedTime] = useState('')

    const HandleReservar = (id: string) => {
        useOpenReserve(true)
    }

    const handleTimeSelect = (time: string) => {
        if(selectedTime === time) return setselectedTime('')
        setselectedTime(time)
    }

    const handleSelectDay = (dateSelect: Date | undefined) => {
        setselectedTime('')
        setday(dateSelect)
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
                                selected={day}
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
                            day &&
                            <div className="lg:grid grid-cols-4 py-5 justify-center flex gap-3 overflow-x-auto pl-0 [&::-webkit-scrollbar]:hidden">
                                {
                                    TIME_LIST.length > 0 &&
                                    TIME_LIST.map((time) => (
                                        <Button
                                            key={time}
                                            variant={
                                                selectedTime === time ? 'default' : 'outline'
                                            }
                                            className="rounded-full"
                                            onClick={() => handleTimeSelect(time)}
                                        >
                                            {time}
                                        </Button>
                                    ))
                                }
                            </div>
                        }
                        {
                            !day &&
                            <div className='py-5 pl-2' >
                                <p className="text-xs">
                                    Não há horários disponíveis para este dia.
                                </p>
                            </div>
                        }
                        <Separator className='mb-5' />
                        {
                            selectedTime && day &&
                            <>
                                <div className="bg-card rounded-xl p-3 flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <h1 className='font-extrabold text-white' >{barberservice.name}</h1>
                                        <h1 className='text-sm text-white font-bold' >R${Number(barberservice.price)}</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h1 className='font-extrabold text-sm text-[#838896]' >Data</h1>
                                        <h1 className='text-sm' >{format(day, "d 'de' MMMM", {
                                            locale: ptBR
                                        })}</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h1 className='font-extrabold text-sm text-[#838896]' >Horário</h1>
                                        <h1 className='text-sm' >{selectedTime}</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h1 className='font-extrabold text-sm text-[#838896]' >Barbearia</h1>
                                        <h1 className='text-sm' >{barbershop.name}</h1>
                                    </div>
                                </div>
                                <Button variant='default' className='w-full mt-5' >Continuar</Button>
                            </>
                        }

                    </SheetDescription>
                </SheetContent>
            </Sheet >

        </>
    )
}

export default Button_Reservar