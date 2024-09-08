//shadcn
import { Separator } from "../_services/components/ui/separator";

//pages
import Map from "../_components-g/_map";
import About from "../routs/barber-single/[id]/_components/about";
import Phone_Item from "../routs/barber-single/[id]/_components/phone-item";

//date-fns
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

//db
import { GetSession } from "../_services/_data/get-session";
import { GetConfirmedBookings } from "../_services/_data/get-booking-confirmed";

const AboutBooking = async () => {

    const session = await GetSession()

    const bookings = await GetConfirmedBookings()

    return (
        <>
            {
                bookings.length != 0 &&
                <div className='w-[386px] min-w-[280px] hidden lg:block max-h-[700px] bg-popover p-3 rounded-xl' >
                    {
                        bookings
                            .slice(0, 1)
                            .map((barber) => (
                                <>
                                    <Map key={barber.id} barbersingle={barber.barbershop} />
                                    <About key={barber.id} barbersingle={barber.barbershop} />
                                    <Separator className='my-2 bg-border' />
                                    <div className="space-y-3 py-2">
                                        {barber.barbershop.phones.map((phone, acc) => (
                                            <Phone_Item key={acc} phone={phone} />
                                        ))}
                                    </div>
                                    <Separator className='my-2 bg-border' />
                                    <div className='py-2' >
                                        <span className='text-primary text-xs mb-2 bg-[#221C3D] px-[8px] py-[2px] rounded-xl' >Confirmado</span>
                                        <div className="border-2 border-border">
                                            <div className="bg-card rounded-xl p-3 flex flex-col gap-4">
                                                <div className="flex items-center justify-between">
                                                    <h1 className='font-extrabold text-white' >{barber.barbershop.name}</h1>
                                                    <h1 className='text-sm text-white font-bold' >R${ }</h1>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <h1 className='text-sm text-[#838896]' >Data</h1>
                                                    <h1 className='text-sm' >{format(12, "d 'de' MMMM", {
                                                        locale: ptBR
                                                    })}</h1>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <h1 className='text-sm text-[#838896]' >Horário</h1>
                                                    <h1 className='text-sm' >{ }</h1>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <h1 className='text-sm text-[#838896]' >Barbearia</h1>
                                                    <h1 className='text-sm' >{ }</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                    }
                </div>
            }
        </>
    );
}

export default AboutBooking;