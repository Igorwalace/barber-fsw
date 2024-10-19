import Footer from "../_pages/_footer";
import Header from "../_pages/_header";

//functios
import { GetConfirmedBookings } from "../_services/_data/get-booking-confirmed";
import BookingsConfirmed from "./components-bookings/bookings-confirmed";

const Bookings = async () => {

    const bookings = await GetConfirmedBookings()

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