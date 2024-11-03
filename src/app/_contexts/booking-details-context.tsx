'use client'

//prisma
import { Booking, Prisma } from "@prisma/client";

//next-react
import { createContext, useContext, useState } from "react"

export const AppContext = createContext<any>(undefined);

export function AppBookingDetails({ children }: {
    children: React.ReactNode;
}) {
    
    const [bookingDetails, setBookingDetails] = useState<Booking[] | undefined>([]);

    return (
        <AppContext.Provider value={{
            bookingDetails,
            setBookingDetails
        }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useBookingDetails() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useBookingDetails must be used within an AppBookingDetails provider');
    }
    return context;
}
