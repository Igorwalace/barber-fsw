'use client'

import { GetConfirmedBookings } from "@/app/_services/_data/get-booking-confirmed";
import { Booking, Prisma } from "@prisma/client";

interface BookingsConfirmedProps {
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

const BookingsConfirmed = () => {

    return (
        <>
            
        </>
    );
}

export default BookingsConfirmed;