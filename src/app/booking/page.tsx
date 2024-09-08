import Footer from "../_pages/_footer";
import Header from "../_pages/_header";

//next-react

//prisma

//db
import BookingsConfirmed from "./_bookings-confirmed";
import AboutBooking from "./_about-booking";
import BookingConcluded from "./_booking-concluded";
import { GetSession } from "../_services/_data/get-session";

const Booking = async () => {

    const session = await GetSession()

    return (
        <>
            <main className='min-h-[calc(100dvh-68px)]' >
                <Header />
                {
                    session?.user
                        ?
                        <div className='w-full flex justify-center flex-col items-center lg:block lg:py-10 lg:px-42 md:px-32 py-6 px-5' >
                            <div className='w-full pb-5' >
                                <h1 className='lg:text-2xl text-xl font-bold' >Agendamentos</h1>
                            </div>
                            <div className='w-full flex gap-10' >
                                <div className='lg:w-auto w-full' >
                                    <div className='pb-2' >
                                        <h1 className='text-xs lg:text-sm text-[#838896] uppercase' >Confirmados</h1>
                                    </div>
                                    <BookingsConfirmed />
                                    <div className='pb-2 lg:pt-10 pt-5' >
                                        <h1 className='text-xs lg:text-sm text-[#838896] uppercase' >Finalizados</h1>
                                    </div>
                                    <div className='flex gap-10' >
                                        <BookingConcluded />
                                    </div>
                                </div>
                                <AboutBooking />
                            </div>
                        </div>
                        :
                        <div className='flex justify-center lg:py-10 py-6' >
                            <h1 className='text-sm' >Faça login para conferir suas reservas.</h1>
                        </div>
                }
            </main>
            <Footer />
        </>
    );
}

export default Booking;