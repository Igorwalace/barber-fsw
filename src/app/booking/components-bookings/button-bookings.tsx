'use client'
//pages
import BookingItem from "@/app/_components-g/booking-item";
import { Prisma } from "@prisma/client";

//context
import useBookingDetails from "@/app/_contexts/booking-details-context";

interface BookingProps {
    booking: Prisma.BookingGetPayload<{
        include: {
            service: {
                include: {
                    barbershop: true
                }
            },
            barbershop: true
        }
    }>
}

const ButtonBookings = ({ booking }: BookingProps) => {

    const { setBookingDetails, bookingDetails } = useBookingDetails()

    const handleBookingDetails = () => {
        setBookingDetails([booking])
    }

    return (
        <>
            <button onClick={() => handleBookingDetails()} className='button-styling' >
                <BookingItem
                    booking={JSON.parse(JSON.stringify(booking))}
                />
            </button>
        </>
    );
}

export default ButtonBookings;