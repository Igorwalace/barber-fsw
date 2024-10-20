"use server"

//prisma
import { prisma } from "../prisma/_prisma"

export const GetBarberShop = async () => {

    return prisma.barbershop.findMany({
        include: {
            Booking: true
        },
    })
}