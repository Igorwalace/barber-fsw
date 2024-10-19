import { prisma } from "@/app/_services/prisma/_prisma";
import BarbershopItem from "./_barber-shop-item";

const BarberShopMoreVisits = async () => {

    const barbershop = await prisma.barbershop.findMany()

    return (
        <>
            {
                barbershop.slice(0, 6).map((barber) => (
                    <BarbershopItem key={barber.id} barbershop={barber} />
                ))
            }
        </>
    );
}

export default BarberShopMoreVisits;