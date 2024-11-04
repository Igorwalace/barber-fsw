'use client'
//pages
import BookingItem from "@/app/_components-g/booking-item";
import { Prisma } from "@prisma/client";
import { useMediaQuery } from "@uidotdev/usehooks";
//context
import useBookingDetails from "@/app/_contexts/booking-details-context";
import useAppUtils from "@/app/_contexts/utils";

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

    const { setBookingDetails } = useBookingDetails()
    const { setSheetBookingDetails } = useAppUtils()
    
    const isLargeDevice = useMediaQuery(
        "only screen and (max-width : 1024px)"
    );

    const handleBookingDetails = () => {
        setBookingDetails([booking])
        // if (!isLargeDevice) return
        setSheetBookingDetails(true)
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
