"use server"

//prisma
import { prisma } from "../prisma/_prisma"

//db
import { GetSession } from "./get-session"

export const getConcludedBookings = async () => {

    const session = await GetSession()

    return prisma.booking.findMany({
        where: {
            userId: session?.user?.id,
            date: {
                lt: new Date(),
            },
        },
        include: {
            service: {
                include: {
                    barbershop: true,
                },
            },
        },
        orderBy: {
            date: "asc",
        },
    })
}