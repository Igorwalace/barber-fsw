
//pages
import BookingItem from "@/app/_components-g/booking-item";
import { Booking } from "@prisma/client";

interface BookingProps {
    booking: Booking
}

const ButtonBookings = ({ booking }: BookingProps) => {
    return (
        <>
            <button className='button-styling' >
                <BookingItem
                    booking={JSON.parse(JSON.stringify(booking))}
                />
            </button>
        </>
    );
}

export default ButtonBookings;