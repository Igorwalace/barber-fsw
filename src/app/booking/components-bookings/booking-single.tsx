'use client'

import useBookingDetails from "@/app/_contexts/booking-details-context";
import { DeleteBooking } from "@/app/_pages/_delete-booking";
import { Button } from "@/app/_services/components/ui/button";
import { Separator } from "@/app/_services/components/ui/separator";
import Phone_Item from "@/app/routs/barber-single/[id]/_components/phone-item";
import { Prisma } from "@prisma/client";
import { format, isFuture } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";

interface BookingSinglePage {
    booking: any
}

const BookingSingle = ({ booking }: BookingSinglePage) => {

    const handleDeleteBooking = async (bookingId: any) => {
        try {
            await DeleteBooking({ bookingId: bookingId })
        } catch (error) {
            alert(bookingId)
            console.log(error)
        }
    }

    return (
        <>
            <div key={booking.id} className='space-y-3' >
                <div className='relative w-full h-[180px]' >
                    <Image
                        className='rounded-lg'
                        fill
                        priority
                        quality={100}
                        alt='map'
                        src='/map.png'
                    />
                    <div className='px-5 py-3 bg-popover absolute rounded-lg bottom-3 right-3 left-3 flex gap-4' >
                        <div className='relative w-12 h-12' >
                            <Image
                                className='rounded-full'
                                alt={booking.service.barbershop.name}
                                fill
                                priority
                                src={booking.service.barbershop.imageUrl}
                            />
                        </div>
                        <div>
                            <h1 className='text-base' >{booking.service.barbershop.name}</h1>
                            <h1 className='text-xs' >{booking.service.barbershop.address}</h1>
                        </div>
                    </div>
                </div>

                <div className='py-2 flex flex-col gap-3' >
                    <h1 className='text-sm' >Sobre nós</h1>
                    <p className='text-sm text-[#838896]' >{booking.service.barbershop.description}</p>
                </div>

                <Separator className='h-[2px]' />

                <div className="space-y-3 py-2">
                    {booking.service.barbershop.phones.map((phone: any) => (
                        <Phone_Item key={phone} phone={phone} />
                    ))}
                </div>

                <Separator className='h-[2px]' />

                <div className='mt-3' >
                    <span className={`text-xs ${isFuture(booking.date) ? 'bg-[#221C3D] text-primary' : 'bg-[#26272B] text-[#838896]'} mt-3 px-[8px] py-[2px] rounded-xl`} >
                        {
                            isFuture(booking.date) ? 'Confirmado' : 'Finalizado'
                        }
                    </span>
                </div>

                <div className="border-card border-2 rounded-lg p-2" >
                    <div className='flex items-center justify-between' >
                        <h1 className='text-base font-extrabold' >{booking.service.name}</h1>
                        <h1 className='text-base font-extrabold'>R${booking.service.price}</h1>
                    </div>
                    <div className='flex items-center justify-between' >
                        <h1 className='text-sm text-[#838896]'>Data</h1>
                        <h1 className='text-sm'>
                            {format(booking.date, "d", {
                                locale: ptBR
                            })}
                            {' '}de{' '}
                            {format(booking.date, "MMMM", {
                                locale: ptBR
                            })}
                        </h1>
                    </div>
                    <div className='flex items-center justify-between' >
                        <h1 className='text-sm text-[#838896]'>Hórario</h1>
                        <h1 className='text-sm'>
                            {format(booking.date, "HH':'mm", {
                                locale: ptBR
                            })}
                        </h1>
                    </div>
                    <div className='flex items-center justify-between' >
                        <h1 className='text-sm text-[#838896]'>Barbearia</h1>
                        <h1 className='text-sm'>{booking.service.barbershop.name}</h1>
                    </div>
                </div>

                <div className={`w-full ${!isFuture(booking.date) && 'hidden'}`} >
                    <Button onClick={() => handleDeleteBooking(booking.id)} variant='destructive' className='w-full' >Cancelar Reserva</Button>
                </div>

            </div>
        </>
    );
}

export default BookingSingle;