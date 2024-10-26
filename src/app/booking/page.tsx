//react-next
import { redirect } from "next/navigation";
import Footer from "../_pages/_footer";
import Header from "../_pages/_header";

//db
import { GetSession } from "../_services/_data/get-session";

//pages
import BookingsPage from "./components-bookings/bookings-confirmed";
import BookingsDetails from "./components-bookings/bookings-details";
import { GetConfirmedBookings } from "../_services/_data/get-booking-confirmed";

const Bookings = async () => {

    const bookingConfirmed = await GetConfirmedBookings()
    const session = await GetSession()
    if(!session?.user) redirect('/')

    return (
        <>
            <main className='min-h-[calc(100dvh-68px)]' >
                <Header />
                <div className='flex justify-center items-start gap-10 m-5' >
                    <div className='w-full lg:w-[445px]' >
                        <BookingsPage />
                    </div>
                    <div className='hidden lg:block w-[445px] mt-[68px]' >
                        <BookingsDetails bookingConfirmed={bookingConfirmed} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Bookings;