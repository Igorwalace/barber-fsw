'use client'

//context
import useBookingDetails from "@/app/_contexts/booking-details-context";

//db

//pages
import BookingSingle from "./booking-single";
import { useCallback, useEffect, useState } from "react";

interface bookingConfirmedProps {
    bookingConfirmed: any
}

const BookingsDetails = ({ bookingConfirmed }: bookingConfirmedProps) => {

    const { bookingDetails, setBookingDetails } = useBookingDetails()
    const [bookingSingleDetails, setBookingSingleDetails] = useState()

    // useEffect(() => {
    //     if (bookingConfirmed.length === 0) {
    //         setBookingDetails([])
    //     }
    //     else if (bookingDetails.length === 0) {
    //         setBookingDetails([bookingConfirmed[0]])
    //     }
    // }, [bookingDetails, bookingConfirmed])

    const fetchData = useCallback(async () => {
        setBookingDetails([bookingConfirmed[0]]);
    }, []);

    useEffect(() => {
        if (bookingConfirmed.length > 0 && bookingDetails.length === 0) {
            fetchData();
        }
    }, [bookingConfirmed, bookingConfirmed]);

    return (
        <>
            {
                bookingConfirmed.length != 0 && 
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