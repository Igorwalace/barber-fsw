'use client'
//prisma
import { Prisma } from "@prisma/client";

//shadcn
import { Avatar, AvatarImage } from "../_services/components/ui/avatar";

//date-fns
import { format, isFuture } from "date-fns";
import { ptBR } from "date-fns/locale";
import useBookingDetails from "../_contexts/booking-details-context";

//db

export interface BookingItemProps {
    booking: Prisma.BookingGetPayload<{
        include: {
            service: {
                include: {
                    barbershop: true
                }
            }
        }
    }>
}

const BookingItem = ({ booking }: BookingItemProps) => {

    const DateFuture = isFuture(booking.date)
    const { bookingDetails } = useBookingDetails()

    return (
        <>
            <div key={booking.id} className={`lg:min-w-[80%] min-w-[90%] border-2 ${bookingDetails[0]?.id === booking?.id ? "border-primary" : 'border-border' } bg-popover p-3 rounded-xl flex items-center justify-between`} >
                <div className='lg:w-[70%] w-[65%] space-y-2 border-r-2 border-border' >
                    <div className="flex justify-between items-center pr-3">
                        <span className={`text-xs ${DateFuture ? 'bg-[#221C3D] text-primary' : 'bg-[#26272B] text-[#838896]'} px-[8px] py-[2px] rounded-xl`} >
                            {
                                DateFuture ? 'Confirmado' : 'Finalizado'
                            }
                        </span>
                        {/* <CancelarBooking booking={booking} /> */}
                    </div>
                    <h1 className='text-base text-left font-extrabold' >{booking.service.name}</h1>
                    <div className='flex items-center gap-3' >
                        <Avatar className='w-6 h-6' >
                            <AvatarImage src={booking.service.barbershop.imageUrl} />
                        </Avatar>
                        <span className='text-sm' >{booking.service.barbershop.name}</span>
                    </div>
                </div>
                <div className='lg:w-[30%] w-[35%] flex items-center justify-center flex-col' >
                    <span className='text-sm capitalize font-normal' >
                        {format(booking.date, "MMMM", {
                            locale: ptBR
                        })}
                    </span>
                    <span className='text-2xl font-normal' >
                        {format(booking.date, "d", {
                            locale: ptBR
                        })}
                    </span>
                    <span className='text-sm' >
                        {format(booking.date, "HH':'mm", {
                            locale: ptBR
                        })}
                    </span>
                </div>
            </div>
        </>
    );
}

export default BookingItem;

