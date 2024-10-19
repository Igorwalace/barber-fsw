"use server"

//prisma
import { prisma } from "../prisma/_prisma"
import { GetSession } from "./get-session"

export const GetConfirmedBookings = async () => {

    const session = await GetSession()

    return prisma.booking.findMany({
        where: {
            userId: session?.user?.id,
        },
        include: {
            service: {
                include: {
                    barbershop: true,
                },
            }
        },
        orderBy: {
            date: "asc",
        },
    })
}