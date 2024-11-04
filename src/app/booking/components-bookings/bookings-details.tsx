'use client'

//context
import useBookingDetails from "@/app/_contexts/booking-details-context";

//db

//pages
import BookingSingle from "./booking-single";
import { useCallback, useEffect } from "react";
import SheetBookingDetails from "./sheet-bookings-details";

interface bookingConfirmedProps {
    bookingConfirmed: any
}

const BookingsDetails = ({ bookingConfirmed }: bookingConfirmedProps) => {

    const { bookingDetails, setBookingDetails } = useBookingDetails()

    const fetchData = useCallback(async () => {
        await setBookingDetails([bookingConfirmed[0]]);
    }, []);

    useEffect(() => {
        if (bookingConfirmed.length > 0 && bookingDetails.length === 0) {
            fetchData();
        }
    }, [bookingDetails, bookingConfirmed]);

    return (
        <>
            <SheetBookingDetails />
            {
                bookingDetails.length > 0 &&
                <main className={`w-full bg-popover p-5 rounded-xl`} >
                    {
                        bookingDetails?.map((booking: any) => (
                            <BookingSingle booking={booking} setBookingDetails={setBookingDetails} key={booking?.id} />
                        ))
                    }
                </main>
            }
            <button onClick={()=>{
                console.log(bookingDetails)
            }} >CLIQUEEEEE</button>
        </>
    );
}

export default BookingsDetails;