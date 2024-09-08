import { Barbershop } from "@prisma/client";
import Image from "next/image";

interface MapProps {
    barbersingle: Barbershop
}

const Map = ({ barbersingle }: MapProps) => {
    return (
        <>
            <div className='relative w-full h-[180px]' >
                <Image
                    className='rounded-lg'
                    fill
                    priority
                    quality={100}
                    alt='map'
                    src='/map.png'
                />
                <div className='px-5 py-3 bg-popover absolute rounded-lg bottom-3 right-3 left-3 flex gap-4' >
                    <div className='relative w-12 h-12' >
                        <Image
                            className='rounded-full'
                            alt={barbersingle.name}
                            fill
                            priority
                            src={barbersingle.imageUrl}
                        />
                    </div>
                    <div>
                        <h1 className='text-base' >{barbersingle.name}</h1>
                        <h1 className='text-xs' >{barbersingle.address}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Map;