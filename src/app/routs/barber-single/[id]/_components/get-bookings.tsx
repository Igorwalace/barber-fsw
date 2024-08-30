'use server'

import { prisma } from "@/app/_services/prisma/_prisma";
import { endOfDay, startOfDay } from "date-fns";

interface GETBookings {
    serviceId: string
    date: Date
}

export const GETBookings = async ({ serviceId, date }: GETBookings) => {
    const bookings = await prisma.booking.findMany({
        where: {
            date: {
                lte: endOfDay(date),
                gte: startOfDay(date)
            }
        }
    })
    return bookings
}

export default GETBookings;