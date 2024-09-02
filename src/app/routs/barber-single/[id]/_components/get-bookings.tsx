'use server'

import { prisma } from "@/app/_services/prisma/_prisma";
import { endOfDay, startOfDay } from "date-fns";

interface GETBookings {
    date: Date
    barbershopId: string
}

export const GETBookings = async ({ date, barbershopId }: GETBookings) => {
    const bookings = await prisma.booking.findMany({
        where: {
            date: {
                lte: endOfDay(date),
                gte: startOfDay(date),
                
            },
            barbershopId: barbershopId
        }  
    })
    return bookings
}

export default GETBookings;