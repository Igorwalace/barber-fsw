
//next-react
import { format } from "date-fns";
import { auth } from "../_services/auth/auth";
import { Avatar, AvatarFallback, AvatarImage } from "../_services/components/ui/avatar";

//prisma
import { prisma } from "../_services/prisma/_prisma";
import { ptBR } from "date-fns/locale";

const Agendamentos = async () => {

    const session = await auth()

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
                session?.user &&
                <main className='lg:px-0 lg:py-0 pt-5 px-5 relative' >
                    <div className='pb-3' >
                        <h1 className='capitalize text-sm' >Agendamentos</h1>
                    </div>
                    <div className="flex overflow-x-auto scrollbar-none" >
                        {
                            bookings
                                .map((booking) => (
                                    <div key={booking.id} className='min-w-[350px] border-2 border-card bg-[#26272B] p-3 rounded-xl flex items-center justify-between w-full' >
                                        <div className='w-[70%] space-y-2 border-r-2 border-card' >
                                            <span className='text-primary text-xs bg-[#221C3D] px-[8px] py-[2px] rounded-xl' >Confirmado</span>
                                            <h1 className='text-base font-extrabold' >{booking.service.name}</h1>
                                            <div className='flex items-center gap-3' >
                                                <Avatar className='w-6 h-6' >
                                                    <AvatarImage src={booking.barbershop.imageUrl} />
                                                </Avatar>
                                                <span className='text-sm' >{booking.barbershop.name}</span>
                                            </div>
                                        </div>
                                        <div className='w-[30%] flex items-center justify-center flex-col' >
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
                                ))
                        }
                    </div>
                </main>
            }
        </>
    );
}

export default Agendamentos;