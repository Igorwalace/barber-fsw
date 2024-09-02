'use server'

import { prisma } from "@/app/_services/prisma/_prisma";
import { endOfDay, startOfDay, startOfHour } from "date-fns";

interface Checkbookings {
    date: Date
    barbershopId: string
}

export const Checkbookings = async ({ date, barbershopId }: Checkbookings) => {
    const bookings = await prisma.booking.findMany({
        where: {
            barbershopId,
            date
        }
    })
    return bookings
}

export default Checkbookings;