'use client'

//context
import useBookingDetails from "@/app/_contexts/booking-details-context";

//db
import { GetConfirmedBookings } from "@/app/_services/_data/get-booking-confirmed";

//pages
import BookingSingle from "./booking-single";

interface bookingConfirmedProps {
    bookingConfirmed: any
}

const BookingsDetails = ({ bookingConfirmed }: bookingConfirmedProps) => {

    const { bookingDetails } = useBookingDetails()

    return (
        <>
            <main className='w-full bg-popover p-5 rounded-xl' >
                {
                    bookingDetails.length != 0 ?
                        bookingDetails?.map((booking: any) => (
                            <BookingSingle booking={booking} key={booking.id} />
                        ))
                        :
                        bookingConfirmed
                        ?.slice(0, 1)
                                .map((booking: any) => (
                                    <BookingSingle booking={booking} key={booking.id} />
                                ))

                }
            </main>
        </>
    );
}

export default BookingsDetails;