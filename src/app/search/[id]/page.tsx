
//pages
import Footer from "@/app/_pages/_footer";
import Header from "@/app/_pages/_header";
import BarbershopItem from "@/app/_pages/components/_barber-shop-item";
import FormSearch from "@/app/_pages/components/_form-search";

//db
import { GetBarberShop } from "@/app/_services/_data/get-barbershop";

interface PropsId {
    params: {
        id: string
    }
}

const Page = async ({ params }: PropsId) => {

    const barbershop = await GetBarberShop()

    return (
        <>
            <main className='min-h-[calc(100dvh-68px)]' >
                <Header />
                <div className='lg:px-10 px-5 py-5' >
                    <div className="lg:hidden" >
                        <FormSearch />
                    </div>
                    <h1 className='text-[#838896] lg:text-base text-sm lg:mb-5 lg:mt-0 my-5' >Resultados para “{decodeURIComponent(params.id)}”</h1>
                    <div className="flex items-center flex-wrap gap-2" >
                        {
                            barbershop
                                .filter((barber) => barber.name.includes(decodeURIComponent(params.id)))
                                .map((barber) => (
                                    <BarbershopItem key={barber.id} barbershop={barber} />
                                ))
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Page;

//decodeURIComponent