'use client'
import useAppUtils from "@/app/_contexts/utils";
import { Sheet, SheetContent, SheetDescription } from "@/app/_services/components/ui/sheet";
import BookingSingle from "./booking-single";
import useBookingDetails from "@/app/_contexts/booking-details-context";

const SheetBookingDetails = () => {

    const { sheetBookingDetails, setSheetBookingDetails } = useAppUtils()
    const { bookingDetails, setBookingDetails } = useBookingDetails()


    return (
        <>
            <div className='lg:hidden'>
                <Sheet open={sheetBookingDetails} onOpenChange={setSheetBookingDetails} >
                    <SheetContent className='overflow-y-auto justify-start items-start w-[90%]' >
                        <SheetDescription>
                            {
                                bookingDetails?.map((booking: any) => (
                                    <BookingSingle booking={booking} setBookingDetails={setBookingDetails} key={booking?.id} />
                                ))
                            }
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}

export default SheetBookingDetails;