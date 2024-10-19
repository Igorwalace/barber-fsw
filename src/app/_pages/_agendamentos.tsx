
//pages
import BookingItem from "../_components-g/booking-item";

//db
import { GetConfirmedBookings } from "../_services/_data/get-booking-confirmed";
import { GetSession } from "../_services/_data/get-session";

const Agendamentos = async () => {

    const session = await GetSession()

    const bookingsConfirmed = await GetConfirmedBookings()
    const bookingsConcluded = bookingsConfirmed.filter((b) => b.date > new Date())

    return (
        <>
            {
                session?.user && bookingsConcluded.length > 0 &&
                <main className='lg:px-0 lg:py-0 pt-5 px-5 relative' >
                    <div className='pb-3' >
                        <h1 className='capitalize text-sm' >Agendamentos</h1>
                    </div>
                    <div className="flex gap-2 overflow-x-auto lg:scrollbar-thin scrollbar-none relative" >
                        {
                            bookingsConcluded.map((booking)=>(
                                <BookingItem
                                    key={booking.id}
                                    booking={JSON.parse(JSON.stringify(booking))}
                                />
                            ))
                        }
                    </div>
                </main>
            }
        </>
    );
}

export default Agendamentos;