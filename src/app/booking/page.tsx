//react-next
import { redirect } from "next/navigation";
import Footer from "../_pages/_footer";
import Header from "../_pages/_header";

//functins
import { GetConfirmedBookings } from "../_services/_data/get-booking-confirmed";
import { GetSession } from "../_services/_data/get-session";

//pages
import BookingsConfirmed from "./components-bookings/bookings-confirmed";

const Bookings = async () => {

    const bookings = await GetConfirmedBookings()

    const session = await GetSession()
    if(!session?.user) redirect('/')

    return (
        <>
            <main className='min-h-[calc(100dvh-68px)]' >
                <Header />
                <div>
                    <div>
                        <h1>Agendamentos</h1>
                    </div>
                    <div>
                        <BookingsConfirmed />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Bookings;