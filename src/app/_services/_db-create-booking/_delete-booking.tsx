'use server'

//next-react
import { revalidatePath } from "next/cache"

//prisma
import { prisma } from "../prisma/_prisma"

interface DeleteBooking {
    bookingId: string
}

export const DeleteBooking = async ({ bookingId }: DeleteBooking) => {
    await prisma.booking.delete({
        where: {
            id: bookingId,

        },
    })
    console.log('ok')
    revalidatePath("/routs/barber-single/[id]")
    revalidatePath("/booking")
    revalidatePath("/")
}