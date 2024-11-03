
//db
import { GetConfirmedBookings } from "@/app/_services/_data/get-booking-confirmed";
import { GetSession } from "@/app/_services/_data/get-session";

//pages
import ButtonBookings from "./button-bookings";

const BookingsPage = async () => {

    const bookingsConfirmed = await GetConfirmedBookings()
    const bookingsConcluded = bookingsConfirmed.filter((b) => b.date > new Date())
    const bookingsFinal = bookingsConfirmed.filter((b) => b.date < new Date())

    return (
        <>
            <main>
                <div>
                    <h1 className='font-black text-lg lg:text-2xl' >Agendamentos</h1>
                </div>
                {
                    bookingsConcluded.length != 0 || bookingsFinal.length != 0
                    ?
                    <>
                        <div>
                            <h1 className='text-xs text-[#838896] my-3' >CONFIRMADOS</h1>
                            <div className='grid gap-2' >
                                {
                                    bookingsConcluded.length === 0
                                        ?
                                        <h1 className='text-center' >Você não tem agendamentos confirmados.</h1>
                                        :
                                        bookingsConcluded
                                            .map((booking: any) => (
                                                <ButtonBookings booking={booking} key={booking.id} />
                                            ))
                                }
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xs text-[#838896] my-3' >FINALIZADOS</h1>
                            <div className='grid gap-2' >
                                {
                                    bookingsFinal.length === 0
                                        ?
                                        <h1 className='text-center' >Você não tem agendamentos finalizados.</h1>
                                        :
                                        bookingsFinal
                                            .map((booking: any) => (
                                                <ButtonBookings booking={booking} key={booking.id} />
                                            ))

                                }
                            </div>
                        </div>
                    </>
                    :
                    ''
                }
            </main>
        </>
    );
}

export default BookingsPage;