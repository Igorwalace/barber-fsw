'use client'

//db
import { DeleteBooking } from "@/app/_pages/_delete-booking";

//shadcn
import { Button } from "@/app/_services/components/ui/button";
import { Separator } from "@/app/_services/components/ui/separator";

//pages
import Phone_Item from "@/app/routs/barber-single/[id]/_components/phone-item";

//date-fns
import { format, isFuture } from "date-fns";
import { ptBR } from "date-fns/locale";

//next-react
import Image from "next/image";
import { useState } from "react";

//react-icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

//context
import useAppUtils from "@/app/_contexts/utils";

interface BookingSinglePage {
    booking: any
    setBookingDetails: any
}

const BookingSingle = ({ booking, setBookingDetails }: BookingSinglePage) => {

    const { setSheetBookingDetails } = useAppUtils()

    const [loading, setLoading] = useState(false)
    if (!booking) return

    const handleDeleteBooking = async (bookingId: any) => {
        try {
            setLoading(true)
            await DeleteBooking({ bookingId: bookingId })
            setSheetBookingDetails(false)
            setBookingDetails([])
            setLoading(false)
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

                <div className='mt-3' >
                    <span className={`text-xs ${isFuture(booking.date) ? 'bg-[#221C3D] text-primary' : 'bg-[#26272B] text-[#838896]'} mt-3 px-[8px] py-[2px] rounded-xl`} >
                        {
                            isFuture(booking.date) ? 'Confirmado' : 'Finalizado'
                        }
                    </span>
                </div>

                <div className="border-[#26272B] border-2 rounded-lg p-2" >
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
                    <Button disabled={loading} onClick={() => handleDeleteBooking(booking.id)} variant='destructive' className='w-full' >
                        {
                            !loading
                                ?
                                'Cancelar Reserva'
                                :
                                <div className='w-full gap-2 flex justify-center items-center' >
                                    <AiOutlineLoading3Quarters size={18} className="animate-spin" />
                                    Cancelando reserva
                                </div>
                        }
                    </Button>
                </div>

                {/* <Separator className={`w-full ${!isFuture(booking.date) && 'hidden'} h-[2px]`} /> */}

                <div className='py-2 flex flex-col gap-3' >
                    <h1 className='text-sm' >Sobre nós</h1>
                    <p className='text-sm text-[#838896]' >{booking.service.barbershop.description}</p>
                </div>

                <Separator className='h-[2px]' />

                <div className="space-y-3 py-2">
                    {booking.service.barbershop.phones.map((phone: any, key: any) => (
                        <Phone_Item key={key} phone={phone} />
                    ))}
                </div>

            </div>
        </>
    );
}

export default BookingSingle;