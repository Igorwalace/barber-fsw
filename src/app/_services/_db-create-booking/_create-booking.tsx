'use server'

//next-react
import { revalidatePath } from "next/cache"

//prisma
import { prisma } from "../prisma/_prisma"

interface CreateBookingParams {
    serviceId: string
    userId: string
    date: Date
    barbershopId: string
}

export const CreateBooking = async ({ serviceId, userId, date, barbershopId }: CreateBookingParams) => {
    await prisma.booking.create({
        data: {
            serviceId: serviceId,
            userId: userId,
            date: date,
            barbershopId: barbershopId
        }
    })
    revalidatePath("/routs/barber-single/[id]")
    revalidatePath("/")
}