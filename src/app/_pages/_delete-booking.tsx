'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "../_services/prisma/_prisma"

interface DeleteBookingProps {
    bookingId: string
}

export const DeleteBooking = async ({ bookingId }: DeleteBookingProps) => {
    await prisma.booking.delete({
        where: {
            id: bookingId
        }
    })
    revalidatePath("/")
} 