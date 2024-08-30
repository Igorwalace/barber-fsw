'use client'

import React, { useState } from 'react'

//pages

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
import { useToast } from '@/app/_services/components/ui/use-toast';

//prisma
import { Barbershop, BarbershopService, Booking } from '@prisma/client'
import { Separator } from '@/app/_services/components/ui/separator'
import { Calendar } from '@/app/_services/components/ui/calendar'
import { format, set } from 'date-fns';

//db/funcao createbooking
import { CreateBooking } from '@/app/_services/_db-create-booking/_create-booking';

//react-icons
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface BarberServiceProps {
    barberservice: BarbershopService
    barbershop: Pick<Barbershop, 'name'>
    bookings: Booking[]
    session: any
}

const Button_Reservar = ({ barberservice, barbershop, session, bookings }: BarberServiceProps) => {

    const [openReserve, setOpenReserve] = useState(false)
    const [loadingBooking, setLoadingBooking] = useState(false)
    const [day, setday] = useState<Date | undefined>(undefined)
    const [selectedTime, setselectedTime] = useState('')
    const { toast } = useToast()

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

    const handleReserve = (id: string) => {
        if (!session?.user?.id) {
            toast({
                variant: "destructive",
                title: "Atenção!",
                description: "Para fazer uma reserva você precisa fazer login.",
            })
            return
        }
        setOpenReserve(true)
    }

    const handleTimeSelect = (time: string) => {
        if (selectedTime === time) return setselectedTime('')
        setselectedTime(time)
    }

    const handleSelectDay = (dateSelect: Date | undefined) => {
        setselectedTime('')
        setday(dateSelect)
    }
    const handleCreateBooking = async () => {
        if (!day || !selectedTime) return

        setLoadingBooking(true)

        const hour = selectedTime.split(':')[0]
        const minute = selectedTime.split(':')[1]
        const newDate = set(day, {
            minutes: Number(minute),
            hours: Number(hour)
        })

        await CreateBooking({
            serviceId: barberservice.id,
            userId: session?.user?.id,
            date: newDate
        })
        setLoadingBooking(false)
        toast({
            style: { backgroundColor: 'white', color: 'black', border: 'none' },
            title: "Concluído",
            description: "Reserva concluída com sucesso!",
        })
        setOpenReserve(false)
    }

    return (
        <>
            <Button onClick={() => handleReserve(barberservice.id)} variant='secondary' >Reservar</Button>

            <Sheet open={openReserve} onOpenChange={setOpenReserve} >
                <SheetContent className='overflow-y-auto [&::-webkit-scrollbar]:hidden w-[90%]' >
                    <SheetHeader>
                        <SheetTitle className='text-lg mb-3 justify-start text-left' >Fazer Reservar - {barberservice.name}</SheetTitle>
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
                                className='w-full'
                                styles={{
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
                                    Selecione um dia primeiro.
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
                                        <h1 className='text-sm text-[#838896]' >Data</h1>
                                        <h1 className='text-sm' >{format(day, "d 'de' MMMM", {
                                            locale: ptBR
                                        })}</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h1 className='text-sm text-[#838896]' >Horário</h1>
                                        <h1 className='text-sm' >{selectedTime}</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h1 className='text-sm text-[#838896]' >Barbearia</h1>
                                        <h1 className='text-sm' >{barbershop.name}</h1>
                                    </div>
                                </div>
                            </>
                        }
                        <Button disabled={loadingBooking || !selectedTime} onClick={handleCreateBooking} variant='default' className='w-full mt-5 gap-2 flex' >
                            {
                                loadingBooking
                                    ?
                                    <>
                                        <AiOutlineLoading3Quarters size={18} className="animate-spin" />
                                        Fazendo reserva
                                    </>
                                    :
                                    <>
                                        Fazer reserva
                                    </>
                            }
                        </Button>

                    </SheetDescription>
                </SheetContent>
            </Sheet >

        </>
    )
}

export default Button_Reservar