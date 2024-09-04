'use client'

//prisma
import { Booking } from "@prisma/client";

//functios
import { DeleteBooking } from "./_delete-booking";

interface CancelarBookingProps {
    booking: Booking
}

const CancelarBooking = ({ booking }: CancelarBookingProps) => {

    const handleRemoveBooking = async () => {
        const bookingId = booking.id
        await DeleteBooking({
            bookingId
        })
    }

    return (

        <button onClick={handleRemoveBooking} className='py-1 px-3 bg-destructive text-sm rounded-lg text-destructive-foreground hover:bg-destructive/90' >Cancelar</button>
    );
}

export default CancelarBooking;