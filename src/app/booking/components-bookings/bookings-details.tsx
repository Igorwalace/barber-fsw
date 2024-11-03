'use client'

//context
import useBookingDetails from "@/app/_contexts/booking-details-context";

//db
import { GetConfirmedBookings } from "@/app/_services/_data/get-booking-confirmed";

//pages
import BookingSingle from "./booking-single";
import { useEffect, useLayoutEffect, useState } from "react";
import { isFuture } from "date-fns";

interface bookingConfirmedProps {
    bookingConfirmed: any
}

const BookingsDetails = ({ bookingConfirmed }: bookingConfirmedProps) => {


    const { bookingDetails, setBookingDetails } = useBookingDetails()

    useEffect(() => {
        if (bookingDetails.length === 0) setBookingDetails([bookingConfirmed[0]])
        console.log(bookingDetails)
    }, [bookingDetails])

    if (bookingDetails[0] === undefined) return

    return (
        <>
            {
                <main className={`w-full bg-popover p-5 rounded-xl`} >
                    {
                        bookingDetails?.map((booking: any) => (
                            <BookingSingle booking={booking} setBookingDetails={setBookingDetails} key={booking?.id} />
                        ))
                    }
                </main>
            }
        </>
    );
}

export default BookingsDetails;