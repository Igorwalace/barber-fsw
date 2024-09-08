
//prisma
import { Barbershop, BarbershopService } from "@prisma/client";

//date-fns
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ServiceInfoProps {
    barberservice: BarbershopService
    selectedTime: string
    day: Date
    barbershop: Barbershop
}

const ServiceInfo = ({ barberservice, selectedTime, day, barbershop }: ServiceInfoProps) => {
    return (
        <>
            <div className="bg-card rounded-xl p-3 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className='font-extrabold text-white' >{barberservice.name}</h1>
                    <h1 className='text-sm text-white font-bold' >R${Number(barberservice.price)}</h1>
                </div>
                <div className="flex items-center justify-between">
                    <h1 className='text-sm text-[#838896]' >Data</h1>
                    <h1 className='text-sm' >{format(day, "d 'de' MMMM", {
                        locale: ptBR
                    })}</h1>
                </div>
                <div className="flex items-center justify-between">
                    <h1 className='text-sm text-[#838896]' >Horário</h1>
                    <h1 className='text-sm' >{selectedTime}</h1>
                </div>
                <div className="flex items-center justify-between">
                    <h1 className='text-sm text-[#838896]' >Barbearia</h1>
                    <h1 className='text-sm' >{barbershop.name}</h1>
                </div>
            </div>
        </>
    );
}

export default ServiceInfo;