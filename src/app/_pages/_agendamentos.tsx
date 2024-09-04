
//next-react
import { format } from "date-fns";
import { auth } from "../_services/auth/auth";
import { Avatar, AvatarImage } from "../_services/components/ui/avatar";

//prisma
import { prisma } from "../_services/prisma/_prisma";
import { ptBR } from "date-fns/locale";
import CancelarBooking from "./_cancelar-booking";

const Agendamentos = async () => {

    const session = await auth()

    // const userbookings = await prisma.

    const bookings = await prisma.booking.findMany({
        where: {
            userId: session?.user?.id
        },
        include: {
            service: true,
            barbershop: true
        }
    })

    return (
        <>
            {
                session?.user && bookings.length > 0 &&
                <main className='lg:px-0 lg:py-0 pt-5 px-5 relative' >
                    <div className='pb-3' >
                        <h1 className='capitalize text-sm' >Agendamentos</h1>
                    </div>
                    <div className="flex overflow-x-auto lg:scrollbar-thin scrollbar-none relative" >
                        {
                            bookings
                                .map((booking) => (
                                    <>
                                        <div key={booking.id} className='lg:min-w-[80%] min-w-[90%] border-2 border-card bg-[#26272B] p-3 rounded-xl flex items-center justify-between' >
                                            <div className='lg:w-[70%] w-[65%] space-y-2 border-r-2 border-card' >
                                                <div className="flex justify-between items-center pr-3">
                                                    <span className='text-primary text-xs bg-[#221C3D] px-[8px] py-[2px] rounded-xl' >Confirmado</span>
                                                    <CancelarBooking booking={booking} />
                                                </div>
                                                <h1 className='text-base font-extrabold' >{booking.service.name}</h1>
                                                <div className='flex items-center gap-3' >
                                                    <Avatar className='w-6 h-6' >
                                                        <AvatarImage src={booking.barbershop.imageUrl} />
                                                    </Avatar>
                                                    <span className='text-sm' >{booking.barbershop.name}</span>
                                                </div>
                                            </div>
                                            <div className='lg:w-[30%] w-[35%] flex items-center justify-center flex-col' >
                                                <span className='text-sm capitalize font-normal' >
                                                    {format(booking.date, "MMMM", {
                                                        locale: ptBR
                                                    })}
                                                </span>
                                                <span className='text-2xl font-normal' >
                                                    {format(booking.date, "d", {
                                                        locale: ptBR
                                                    })}
                                                </span>
                                                <span className='text-sm' >
                                                    {format(booking.date, "HH':'mm", {
                                                        locale: ptBR
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                ))
                        }
                    </div>
                </main>
            }
        </>
    );
}

export default Agendamentos;