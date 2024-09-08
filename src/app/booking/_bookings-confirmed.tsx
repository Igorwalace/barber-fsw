//pages
import BookingItem from "../_components-g/booking-item";

//db
import { getConcludedBookings } from "../_services/_data/get-booking-concluded";
import { GetConfirmedBookings } from "../_services/_data/get-booking-confirmed";

//next-react
import { auth } from "../_services/auth/auth";

//prisma

const BookingsConfirmed = async () => {

    const session = await auth()

    const bookingsConfirmed = await GetConfirmedBookings()
    const bookingsConfirmedeFilter = bookingsConfirmed.filter((b)=> b.date > new Date())

    return (
        <>
            <div className='space-y-2' >
                {
                    session?.user && bookingsConfirmedeFilter.length != 0 ?
                        <>
                            {
                                bookingsConfirmedeFilter.map((booking) => (
                                    <BookingItem
                                        key={booking.id}
                                        booking={JSON.parse(JSON.stringify(booking))}
                                    />
                                ))
                            }
                        </>
                        :
                        <h1 className='text-sm' >Nenhum agendamento confirmado.</h1>
                }
            </div>
        </>
    );
}

export default BookingsConfirmed;