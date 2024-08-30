'use server'

import { prisma } from "../prisma/_prisma"

interface CreateBookingParams {
    serviceId: string
    userId: string
    date: Date
}

export const CreateBooking = async ({ serviceId, userId, date }: CreateBookingParams) => {
    await prisma.booking.create({
        data: {
            serviceId: serviceId,
            userId: userId,
            date: date
        }
    })
}