"use server"

//next-react
import { notFound } from "next/navigation"
import { auth } from "../auth/auth"

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
            },
            barbershop: true
        },
        orderBy: {
            date: "asc",
        },
    })
}