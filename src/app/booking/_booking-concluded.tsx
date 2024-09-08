//pages
import BookingItem from "../_components-g/booking-item";

//db
import { getConcludedBookings } from "../_services/_data/get-booking-concluded";
import { GetConfirmedBookings } from "../_services/_data/get-booking-confirmed";
import { GetSession } from "../_services/_data/get-session";

//next-react
import { auth } from "../_services/auth/auth";

//prisma

const BookingConcluded = async () => {

    const session = await GetSession()

    const bookingsConfirmed = await GetConfirmedBookings()
    const bookingsConcluded = await getConcludedBookings()

    return (
        <>
            <div className='lg:w-[440px] w-full flex gap-2 flex-col' >
                {
                    session?.user && bookingsConcluded.length != 0 ?
                        <>
                            {
                                bookingsConcluded.map((booking) => (
                                    <BookingItem
                                        key={booking.id}
                                        booking={JSON.parse(JSON.stringify(booking))}
                                    />
                                ))
                            }
                        </>
                        :
                        <h1 className='text-sm' >Nenhum agendamento finalizado.</h1>
                }
            </div>
        </>
    );
}

export default BookingConcluded;