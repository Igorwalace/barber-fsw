//react-next
import { redirect } from "next/navigation";
import Footer from "../_pages/_footer";
import Header from "../_pages/_header";

//db
import { GetSession } from "../_services/_data/get-session";

//pages
import BookingsPage from "./components-bookings/bookings-confirmed";
import BookingsDetails from "./components-bookings/bookings-details";

const Bookings = async () => {

    const session = await GetSession()
    if(!session?.user) redirect('/')

    return (
        <>
            <main className='min-h-[calc(100dvh-68px)]' >
                <Header />
                <div className='flex justify-center items-center gap-10 mx-5' >
                    <div className='w-full lg:w-[445px]' >
                        <BookingsPage />
                    </div>
                    <div className='hidden lg:block' >
                        <BookingsDetails />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Bookings;